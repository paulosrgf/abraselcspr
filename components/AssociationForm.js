// components/AssociationForm.js

'use client';

import { useState } from 'react';

const AssociationForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    nomeEstabelecimento: '',
    cidade: '',
    tipoCulinaria: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/associar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('✅ Formulário enviado com sucesso! Entraremos em contato em breve.');
        setFormData({ nome: '', email: '', telefone: '', nomeEstabelecimento: '', cidade: '', tipoCulinaria: '' });
      } else {
        const errorData = await response.json();
        setMessage(`❌ Erro ao enviar. Tente novamente: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Erro de rede:', error);
      setMessage('❌ Erro de conexão. Verifique sua rede.');
    } finally {
      setLoading(false);
    }
  };

  // 🚨 CLASSES ATUALIZADAS PARA O MODO CLARO
  const inputClasses = "w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-green-700/5 focus:border-green-700 transition-all";

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter">
          Dados do <span className="text-green-700">Interessado</span>
        </h2>
        <div className="w-12 h-1 bg-amber-500 rounded-full mt-1"></div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Dados Pessoais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-400 uppercase ml-1">Nome Completo</label>
            <input type="text" name="nome" placeholder="Ex: João Silva" value={formData.nome} onChange={handleChange} className={inputClasses} required />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-400 uppercase ml-1">E-mail Corporativo</label>
            <input type="email" name="email" placeholder="email@empresa.com.br" value={formData.email} onChange={handleChange} className={inputClasses} required />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-400 uppercase ml-1">Telefone / WhatsApp</label>
          <input type="tel" name="telefone" placeholder="(42) 99999-9999" value={formData.telefone} onChange={handleChange} className={inputClasses} required />
        </div>
        
        <div className="pt-6 mb-2">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter">
            Dados do <span className="text-green-700">Estabelecimento</span>
          </h2>
          <div className="w-12 h-1 bg-amber-500 rounded-full mt-1"></div>
        </div>

        {/* Dados do Estabelecimento */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-400 uppercase ml-1">Nome do Negócio</label>
          <input type="text" name="nomeEstabelecimento" placeholder="Ex: Restaurante Sabor & Cia" value={formData.nomeEstabelecimento} onChange={handleChange} className={inputClasses} required />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-400 uppercase ml-1">Cidade</label>
            <input type="text" name="cidade" placeholder="Guarapuava" value={formData.cidade} onChange={handleChange} className={inputClasses} required />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-400 uppercase ml-1">Tipo de Culinária</label>
            <input type="text" name="tipoCulinaria" placeholder="Pizzaria, Bar, etc." value={formData.tipoCulinaria} onChange={handleChange} className={inputClasses} required />
          </div>
        </div>

        {/* Mensagem de Status */}
        {message && (
          <div className={`text-center font-bold p-4 rounded-2xl animate-pulse ${message.startsWith('✅') ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-600 border border-red-100'}`}>
            {message}
          </div>
        )}

        {/* Botão de Envio Padronizado */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-5 text-lg font-black uppercase tracking-widest bg-green-700 text-white rounded-2xl 
                     hover:bg-green-600 transition-all duration-300 disabled:bg-gray-200 disabled:text-gray-400 shadow-lg shadow-green-700/20"
        >
          {loading ? 'Processando...' : 'Finalizar Pedido de Associação'}
        </button>
      </form>
      
      <p className="text-center text-gray-400 mt-8 text-xs font-medium uppercase tracking-widest">
        🔒 Seus dados estão protegidos pela LGPD.
      </p>
    </div>
  );
};

export default AssociationForm;