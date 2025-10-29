# Projeto ABRASEL Centro Sul do Paraná

Este é o site institucional da ABRASEL Centro Sul do Paraná, construído com **Next.js 14 (App Router)** e **Tailwind CSS**.

## 🚀 Tecnologias Utilizadas

- **Framework:** Next.js 14
- **Estilização:** Tailwind CSS
- **Hospedagem Recomendada:** Vercel (para suporte total ao Next.js)

## 📦 Como Colocar no Ar (Deploy)

O deploy é configurado para ser feito de forma contínua através da Vercel:

1.  Crie uma conta gratuita na [Vercel](https://vercel.com/).
2.  Importe este repositório do GitHub.
3.  A Vercel identificará automaticamente as configurações do Next.js e fará o deploy.
4.  Qualquer `git push` subsequente para a branch `main` atualizará o site automaticamente.

## 🛠️ Manutenção e Atualização de Conteúdo

O conteúdo é gerenciado através de arquivos JavaScript/JSON locais, conforme definido na Fase 1.

### **1. Adicionar/Editar Associados (Fase 2)**

Para adicionar novos estabelecimentos:

- Edite o arquivo **`data/associatesData.js`**.
- Adicione um novo objeto ao array `ALL_ASSOCIATES_DATA` seguindo a estrutura padrão.
- Após a edição, execute os comandos `git add .`, `git commit -m "msg"` e `git push origin main`.

### **2. Adicionar/Editar Notícias**

Para adicionar novas notícias:

- Edite o arquivo **`data/newsData.js`**.
- Adicione um novo objeto ao array `ALL_NEWS_DATA`.
- As páginas de notícia individual são geradas dinamicamente com base no `slug`.

### **3. Adicionar Eventos**

Para gerenciar a agenda:

- Edite o arquivo **`data/eventsData.js`**.
- Adicione um novo objeto ao array `ALL_EVENTS_DATA`.

---

_Desenvolvido por [Paulo Sergio do Amaral Filho]_
