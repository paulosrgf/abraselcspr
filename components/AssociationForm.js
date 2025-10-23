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
      // 🚨 Ponto de Envio: Enviamos para o nosso Route Handler /api/associar
      const response = await fetch('/api/associar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('✅ Formulário enviado com sucesso! Entraremos em contato em breve.');
        setFormData({ nome: '', email: '', telefone: '', nomeEstabelecimento: '', cidade: '', tipoCulinaria: '' }); // Limpa o formulário
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

  const inputClasses = "w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition";

  return (
    <div className="max-w-3xl mx-auto p-8 bg-gray-900 shadow-2xl rounded-xl">
      <h2 className="text-3xl font-bold text-white mb-6">
        Dados do <span className="text-amber-500">Interessado</span>
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Dados Pessoais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" name="nome" placeholder="Seu Nome Completo" value={formData.nome} onChange={handleChange} className={inputClasses} required />
          <input type="email" name="email" placeholder="Seu Melhor E-mail" value={formData.email} onChange={handleChange} className={inputClasses} required />
        </div>
        <input type="tel" name="telefone" placeholder="Seu Telefone (Ex: 42 99999-9999)" value={formData.telefone} onChange={handleChange} className={inputClasses} required />
        
        <h2 className="text-3xl font-bold text-white pt-4 mb-6">
          Dados do <span className="text-green-700">Estabelecimento</span>
        </h2>

        {/* Dados do Estabelecimento */}
        <input type="text" name="nomeEstabelecimento" placeholder="Nome do Estabelecimento" value={formData.nomeEstabelecimento} onChange={handleChange} className={inputClasses} required />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" name="cidade" placeholder="Cidade (Ex: Guarapuava)" value={formData.cidade} onChange={handleChange} className={inputClasses} required />
          <input type="text" name="tipoCulinaria" placeholder="Tipo de Culinária (Ex: Pizzaria, Bar)" value={formData.tipoCulinaria} onChange={handleChange} className={inputClasses} required />
        </div>

        {/* Mensagem de Status */}
        {message && (
          <p className={`text-center font-semibold p-3 rounded ${message.startsWith('✅') ? 'bg-green-700/20 text-green-500' : 'bg-red-700/20 text-red-500'}`}>
            {message}
          </p>
        )}

        {/* Botão de Envio */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 text-lg font-bold uppercase tracking-wider bg-amber-600 text-black rounded-lg 
                     hover:bg-amber-500 transition duration-300 disabled:bg-gray-600 disabled:text-gray-400"
        >
          {loading ? 'Enviando...' : 'Enviar Pedido de Associação'}
        </button>
      </form>
      
      <p className="text-center text-gray-500 mt-6 text-sm">
        Ao enviar, você concorda com nossos termos.
      </p>
    </div>
  );
};

export default AssociationForm;