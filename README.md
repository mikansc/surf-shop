# SurfShop (JavaScript Version)

Este aplicativo é resultado do curso [Code With Node: Learn by Doing](https://www.udemy.com/course/code-with-node/)

As tecnologias utilizadas foram: 

* NodeJS e Express, com 
* EJS como view engine
* MongoDB para data persistence

Utilizei APIs de terceiros para adicionar as funcionalidades de upload de imagem (Cloudinary), mapa (Mapbox) e servidor de e-mail (SendGrid).

O MongoDB está configurado, por padrão, para rodar em ambiente local.

--------

## Instruções para executar o aplicativo

Para este aplicativo funcionar, é preciso configurar as variáveis de ambiente abaixo em um arquivo **.env**:

* [CLOUDINARY_SECRET](https://cloudinary.com/documentation/node_integration)
* [MAPBOX_TOKEN](https://docs.mapbox.com/)
* [SENDGRID_API_KEY](https://github.com/sendgrid/sendgrid-nodejs/)
* [MONGODB_ACCESS](https://docs.mongodb.com/drivers/node/)

Após configurar as variáveis de ambiente, configure 

```javascript 
npm install
```

Para executar a aplicação, execute

```javascript 
npm start
```

--------

### Futuros objetivos

- [ ] Finalizar o layout
- [ ] Fazer uma versão 100% TypeScript
- [ ] Fazer uma versão React
