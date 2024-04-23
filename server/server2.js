const express= require('express');
const app= express();
const tryRoutes= require('./try/routes');

app.use(express.json());

const PORT= process.env.PORT || 3050;

app.get('/', (req, res)=>{
    res.send('Hello World');
});

app.use('/api', tryRoutes);

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});