// components/CompactAssociateRow.js

import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';

const CompactAssociateRow = ({ name, specialty, city, phone, address, slug }) => {
  return (
    <div className="border-b border-gray-700/50 py-4 hover:bg-gray-800/50 transition duration-300">
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4 px-4 sm:px-6">
        
        {/* Nome e Especialidade (1ª Coluna) */}
        <div className="md:col-span-1">
          <Link href={`/associados/${slug}`} className="text-lg font-semibold text-white hover:text-amber-500 transition">
            {name}
          </Link>
          <p className="text-sm text-gray-400">{specialty}</p>
        </div>

        {/* Cidade (2ª Coluna) */}
        <div className="hidden md:block text-gray-300 text-sm">
          {city}
        </div>

        {/* Contato (3ª Coluna) */}
        <div className="md:col-span-1 flex items-center text-sm">
          <Phone className="w-4 h-4 mr-2 text-green-700" />
          <a href={`tel:${phone.replace(/\D/g, '')}`} className="text-gray-300 hover:text-amber-500">
            {phone}
          </a>
        </div>
        
        {/* Endereço (4ª Coluna) */}
        <div className="md:col-span-1 flex items-start text-sm">
          <MapPin className="w-4 h-4 mr-2 mt-1 text-amber-500 flex-shrink-0" />
          <span className="text-gray-300">{address}</span>
        </div>
        
      </div>
    </div>
  );
};

export default CompactAssociateRow;