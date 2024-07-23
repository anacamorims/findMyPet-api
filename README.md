
# FindMyPet API 🐶🐱🔍

A API FindMyPet foi desenvolvida para auxiliar na localização de animais domésticos desaparecidos. A API permite que donos de pets cadastrem informações detalhadas sobre seus animais perdidos e que indivíduos que encontrem animais possam registrar essas descobertas. Além disso, a API oferece funcionalidades de atualização e remoção de registros, facilitando a manutenção das informações no sistema.

# 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

# 📋 Pré-requisitos

* Node.js  (v22.1.0)
* npm (v10.7.0)
* Express.js (v4.19.2)
* uuid (v6.2.13)

# 🔧 Instalação
Clone o repositório

```
git clone https://github.com/anacamorims/findMyPet-api 
```
Inicialize o projeto
```
npm init -y 
```
Instale Express.js
```
npm i express
```
Instale a biblioteca uuid
```
npm i uuid
```
Inicialize o servidor
```
npm run dev
```
# ⚙️ Executando a API Localmente
Após a instalação, e inicialização, por padrão, a API estará disponível em http://localhost:3000

# 📍 Rotas 

### Buscar Todos Animais
* Rota: ```/animais```
* Método HTTP: GET
* Descrição: Lista todos animais

### Buscar Todos Animais Perdidos
* Rota: ```/animais/perdidos```
* Método HTTP: GET
* Descrição: Lista todos animais com status perdido

### Buscar Todos Animais Encontrados
* Rota: ```/animais/encontrados```
* Método HTTP: GET
* Descrição: Lista todos animais com status encontrado

### Buscar Todos Animais do Tipo Gato
* Rota: ```/animais/gato```
* Método HTTP: GET
* Descrição: Lista todos animais do tipo gato

### Buscar Todos Animais do Tipo Cachorro
* Rota: ```/animais/cachorro```
* Método HTTP: GET
* Descrição: Lista todos animais do tipo cachorro

### Buscar Animal por ID
* Rota: ```/animais/:id```
* Método HTTP: GET
* Descrição: Lista animais por ID

### Registrar Animal 
* Rota: ```/animais```
* Método HTTP: POST
* Descrição: Registra um animal

### Atualizar Dados dos Animais
* Rota: ```/animais/:id```
* Método HTTP: PUT
* Descrição: Atualiza dados de um animal 

### Deletar Animais
* Rota: ```/animais/:id```
* Método HTTP: DELETE
* Descrição: Deleta registro de animais 

# ⚙️ Executando os testes
Utilize ferramentas de desenvolvimento e teste de API's como Postman ou Insomina para enviar solicitações HTTP e visualizar respostas.

![alt text](img/image.png)
![alt text](img/image-1.png)

# 🛠️ Construído com
* #### Node.js  (v22.1.0)
* #### Express.js (v4.19.2)
* #### Padrão MVC 

#

#### 🖇️ Aplicação desenvolvida como Miniprojeto para o M4 da Programadores do Amanhã




