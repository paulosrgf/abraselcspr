// components/BenefitsSection.js

import { ASSOCIATION_BENEFITS } from '../data/benefitsData';
import Image from 'next/image'; 
import { CheckCircle2 } from 'lucide-react'; 

const BenefitsSection = () => {
    return (
        <section className="py-24 bg-[#f8fafc]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Cabeçalho da Seção Padronizado */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase leading-tight flex flex-wrap justify-center items-center gap-3">
                        Por que ser um associado
                        <Image
                            src="/logos/abrasel-verde.png" 
                            alt="ABRASEL"
                            width={160} 
                            height={30}
                            className="h-8 md:h-10 w-auto object-contain" 
                        />
                        ?
                    </h2>
                    <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mt-6 mb-6"></div>
                    <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
                        Transforme seu negócio com acesso a vantagens exclusivas, suporte especializado e a força da maior representatividade do setor.
                    </p>
                </div>

                {/* Grid de Benefícios Modernizado */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ASSOCIATION_BENEFITS.map((benefit) => (
                        <div 
                            key={benefit.title} 
                            className="group p-8 bg-white rounded-[2.5rem] shadow-sm border border-gray-100 
                                     hover:shadow-xl hover:border-green-700/20 transition-all duration-500 
                                     flex flex-col h-full transform hover:-translate-y-2"
                        >
                            {/* Ícone e Título */}
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-green-50 rounded-2xl text-green-700 group-hover:bg-green-700 group-hover:text-white transition-colors duration-500 mr-4">
                                    <benefit.icon className="w-8 h-8 flex-shrink-0" />
                                </div>
                                <h3 className="text-xl font-black text-gray-900 leading-tight tracking-tight uppercase">
                                    {benefit.title}
                                </h3>
                            </div>
                            
                            {/* Lista de Vantagens com Check personalizado */}
                            <ul className="text-gray-500 text-sm space-y-4 flex-1">
                                {benefit.items.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
                                        <span className="leading-snug font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <p className="text-center text-gray-400 mt-20 text-sm italic font-medium">
                    * Benefícios exclusivos para estabelecimentos devidamente registrados e ativos na associação.
                </p>

            </div>
        </section>
    );
};

export default BenefitsSection;