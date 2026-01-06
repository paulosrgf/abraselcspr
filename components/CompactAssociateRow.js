// components/CompactAssociateRow.js
import { Search, ArrowUpRight } from 'lucide-react';

const CompactAssociateRow = ({ name, city }) => {
  // Gera a URL de busca do Google combinando Nome + Cidade
  const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(name + ' ' + city)}`;

  return (
    <a 
      href={googleSearchUrl}
      target="_blank" 
      rel="noopener noreferrer"
      className="grid grid-cols-1 md:grid-cols-12 items-center p-6 hover:bg-green-50/80 transition-all group border-b border-gray-50 last:border-0"
    >
      {/* Nome do Estabelecimento */}
      <div className="col-span-1 md:col-span-6 mb-2 md:mb-0">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span className="text-lg md:text-base font-bold text-gray-900 group-hover:text-green-800 transition-colors block">
            {name}
          </span>
        </div>
      </div>

      {/* Cidade */}
      <div className="col-span-1 md:col-span-4 mb-2 md:mb-0">
        <div className="flex items-center text-gray-500 font-medium">
          <span className="md:hidden text-[10px] uppercase mr-2 text-gray-300 font-black tracking-widest">Cidade:</span>
          {city}
        </div>
      </div>

      {/* Ação (Ícone de Busca) */}
      <div className="col-span-1 md:col-span-2 flex justify-start md:justify-end items-center gap-2">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
          Ver no Google
        </span>
        <div className="w-10 h-10 rounded-xl bg-gray-50 text-gray-400 group-hover:bg-green-700 group-hover:text-white flex items-center justify-center transition-all shadow-sm">
          <Search size={18} />
        </div>
      </div>
    </a>
  );
};

export default CompactAssociateRow;