# Recuperação de senha

**Requisitos Funcionais**

- O usuário deve poder recuperar sua senha informando o seu email
- O usuário deve poder receber um email com instruçoes de recuperaçao de senha
- O usuário deve poder resetar sua senha

**Requisitos Não Funcionais**

- Utilizar Mailtrap para testar envios em ambiente de dev
- Utilizar Amazon SES para envios em produçao
- O envio de emails deve acontecer em segundo plano (background job)

**Regras de Negócios**

- O link enviado por email para resetar senha deve expirar em 2h
- O usuário precisa confirmar a nova senha ao resetar sua senha

# Atualização do perfil

**RF**

- o usuário deve poder atualizar seu nome, email e senha

**RN**

- O usuário não alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário deve confirmar a nova senha;

# Painel do prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia especifico
- O prestador deve receber uma notificaçao, sempre que houver um novo agendamento
- O prestador deve poder visualizar as notificaçoes n lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache
- As notificaçoes do prestador devem ser armazenadas no mongoDB
- As notificaçoes do prestador devem ser enviadas em tempo real utilizando socket.io

**RN**

- A notificaçã deve ter um status de lida ou não lida para que o prestador possa controlar

# Agendamento de serviços

**RF**

- O usuário deve poder listar todos prestadores de serviço cadastrados
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador
- O usuário deve poder listar horários disponiveis em um dia especifico de um prestador
- O usuário deve poder realizar um novo agendamento com um prestador

**RNF**

- A listagem de prestadores deve ser armazenada em cache

**RN**

- cada agendamento deve durar uma hora exatamente
- os agendamentos devem estar disponiveis entre 8h às 18 (Primeiro às 8, último às 17)
- o usuário não pode agendar em um horário já ocupado
- o usuário não pode agendar em um horário que já passou
- o usuário nao pode agendar serviços consigo mesmo

