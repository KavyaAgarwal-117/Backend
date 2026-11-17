const express = require('express');
const ProductRouter = require('./routers/ProductRouter');
const ContactRouter = require('./routers/ContactRouter');
const UserRouter = require('./routers/UserRouter');


const cors=require('cors')
require('./connection');

const app = express();

const port = 5000;

app.use(cors({
    origin: 'http://localhost:3000'
}));

//middleware
app.use(express.json());
app.use('/product', ProductRouter);
app.use('/contact', ContactRouter);
app.use('/user', UserRouter);


//endpoint or route
app.get('/', (req, res) => {
    res.send('response from express');
});

app.get('/add', (req, res) => {
    res.send('response from add');
});

app.get('/getall', (req, res) =>{
    res.send('response from getall');
});

app.get('/update', (req, res) =>{
    res.send('response from update');
});

app.get('/delete', (req, res) =>{
    res.send('response from delete');
});

app.listen(port, () => {
    console.log('server started');
});