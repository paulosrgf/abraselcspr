// components/BenefitsSection.js

import { ASSOCIATION_BENEFITS } from '../data/benefitsData';

const BenefitsSection = () => {
    return (
        <section className="py-20 bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-4">
                    Por Que Associar-se à <span className="text-amber-500">ABRASEL</span>?
                </h2>
                <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
                    Transforme seu negócio com acesso a vantagens exclusivas, suporte especializado e a força da maior representatividade do setor.
                </p>

                {/* Grid de Benefícios */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ASSOCIATION_BENEFITS.map((benefit) => (
                        <div 
                            key={benefit.title} 
                            className="p-6 bg-gray-800 rounded-xl shadow-2xl border-t-4 border-amber-500/80 
                                       hover:bg-gray-700/70 transition duration-300"
                        >
                            {/* Ícone e Título */}
                            <div className="flex items-center mb-4">
                                {/* O ícone é um componente LucideReact passado no Array */}
                                <benefit.icon className="w-8 h-8 text-green-500 mr-3 flex-shrink-0" />
                                <h3 className="text-xl font-bold text-white leading-snug">
                                    {benefit.title}
                                </h3>
                            </div>
                            
                            {/* Lista de Vantagens */}
                            <ul className="text-gray-300 text-sm space-y-2 list-disc pl-5">
                                {benefit.items.map((item, index) => (
                                    <li key={index} className="pl-1">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default BenefitsSection;