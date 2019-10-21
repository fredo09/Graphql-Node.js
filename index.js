/**
 *  Servidor 
 */

const express = require ('express'); 
const express_graphql = require ('express-graphql'); 
const {buildSchema} = require ('graphql'); 

// GraphQL schema
const schema = buildSchema(`
    type Query {
        message: String
    }
`);
// Root resolver
const root = {
    message: () => 'Hello World!'
};
// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.get('/hola', (req,res) => {
    res.status(200).send({
        "Message" : "Hola!! XD"
    });
});

app.listen(3000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));