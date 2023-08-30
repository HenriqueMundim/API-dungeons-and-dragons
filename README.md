# API-dungeons-and-dragons
A API de D&D é um projeto em andamento desenvolvido em Javascript, node js e express. Feito em conjunto com a [@cubosAcademy](https://cubos.academy/), o objetivo do projeto é poder criar e gerenciar personagens de D&D tanto a sua classe com level, nickname.
## Funcionalidades

- Criar personagem
- Listar todos os personagens

## Requisitos
- Node js
- express js

## Como executar o projeto

Depois de fazer o fork do repositório e clonar, é necessário instalar o node no computador através do link [node js](https://nodejs.org/en).

![node](https://github.com/HenriqueMundim/API-dungeons-and-dragons/assets/101148198/bce9e26f-5811-4bb7-ac0d-64d028059a0a)


Após isso execute o comando "npm install".

![npm comand](https://github.com/HenriqueMundim/API-dungeons-and-dragons/assets/101148198/d238271d-8170-4011-bcb1-9ab51113db41)

E por ultimo utilize o comando "npm run dev" para iniciar o nosso servidor local.

![iniciar servidor local](https://github.com/HenriqueMundim/API-dungeons-and-dragons/assets/101148198/4ac582a8-0797-4d6b-b1c9-c437406d4359)


Apos isso a aplicação estará pronta para ser utilizada.

Para utilizar a funcionalidade de listar personagens é necessario fazer uma requisição get no servidor local na porta 3000 na rota /character, na funcionalidade criar personagem é necessário fazer uma requisição post na mesma rota.

### Listar personagens

A requisição não deve conter nada no body.

![requisicao lisatr](https://github.com/HenriqueMundim/API-dungeons-and-dragons/assets/101148198/8f27dde2-8285-4cdb-9424-ccfd33c46baa)

![resposta listar](https://github.com/HenriqueMundim/API-dungeons-and-dragons/assets/101148198/83e26970-e559-4d0b-a5b3-390857fa89e0)

### Criar personagem 

Para criar personagem é necessário inserir o playerName, charName, profession, level.

![input criar personagem](https://github.com/HenriqueMundim/API-dungeons-and-dragons/assets/101148198/bef946ac-9322-4a0e-a6b0-fa27b6835805)

![resposta criar personagem](https://github.com/HenriqueMundim/API-dungeons-and-dragons/assets/101148198/e42604b5-36f7-491f-9e48-7be9114a3830)











