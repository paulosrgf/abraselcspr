// app/api/associar/route.js

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'; 

// Configuração do Transportador de E-mail
// Usa as variáveis do .env.local (EMAIL_USER e EMAIL_PASS)
const transporter = nodemailer.createTransport({
  service: 'gmail', // Usando Gmail para facilidade. Mudar para 'smtp' se usar outro servidor.
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
});

export async function POST(request) {
  try {
    const data = await request.json();
    
    // 1. Validação básica
    if (!data.email || !data.nomeEstabelecimento || !data.nome) {
      return NextResponse.json({ message: "Dados incompletos. Nome, Email e Estabelecimento são obrigatórios." }, { status: 400 });
    }
    
    // 2. Montagem do Conteúdo do E-mail
    const mailOptions = {
        from: process.env.EMAIL_USER, 
        to: process.env.EMAIL_DESTINATION, // Vai para o seu e-mail de teste
        subject: `[ABRASEL - NOVO LEAD] ${data.nomeEstabelecimento} (${data.cidade})`,
        html: `
            <div style="font-family: Arial, sans-serif; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
                <h2 style="color: #FF9800;">Detalhes do Novo Pedido de Associação</h2>
                <p>Um novo estabelecimento demonstrou interesse em se associar à ABRASEL Centro Sul do Paraná.</p>
                <hr style="border-top: 1px solid #eee;">
                
                <p><strong>Estabelecimento:</strong> ${data.nomeEstabelecimento}</p>
                <p><strong>Cidade:</strong> ${data.cidade}</p>
                <p><strong>Culinária:</strong> ${data.tipoCulinaria}</p>
                
                <h3 style="color: #4CAF50; margin-top: 20px;">Contato Principal</h3>
                <p><strong>Nome:</strong> ${data.nome}</p>
                <p><strong>E-mail:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
                <p><strong>Telefone:</strong> ${data.telefone}</p>
                
                <p style="margin-top: 20px; color: #888;">Por favor, entre em contato o mais rápido possível para iniciar o processo de associação.</p>
            </div>
        `,
    };

    // 4. Envio do E-mail
    await transporter.sendMail(mailOptions);
    
    console.log(`✅ E-mail enviado com sucesso para ${process.env.EMAIL_DESTINATION}`);

    // Resposta de sucesso para o frontend
    return NextResponse.json({ 
        message: 'Pedido processado e e-mail de notificação enviado com sucesso!'
    }, { status: 200 }); 
  
  } catch (error) {
    // Tratamento de erros de envio
    console.error('❌ ERRO NO PROCESSO DE ENVIO DE E-MAIL:', error);
    
    return NextResponse.json({ 
        message: 'Falha interna. Verifique as credenciais de e-mail no servidor.' 
    }, { status: 500 });
  }
}

// Bloquear outros métodos HTTP
export async function GET() {
    return NextResponse.json({ message: 'Método não permitido.' }, { status: 405 });
}