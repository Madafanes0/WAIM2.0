const express = require('express')

const {PrismaClient, Prisma} = require('@prisma/client')

const prisma= new PrismaClient();
const app = express();

const PORT= process.env.PORT || 3000;

app.use(express.json());

app.get('idk/idk', async(req, res) => {

    try{
        const {filtro} = req.query;
        let query ={};

        if(filtro){
            query={nombre : filtro}
        }
        const aiInfo = await prisma.aI.findMany({where: 'rojo'});

        res.json(aiInfo);
        
    }
    catch(error){
        console.log('Error fetch ai:', error);
    }
    res.status(500).json({error: 'server error'});
    res.status(404).json({error: 'Not Found'})
});

app.post('idk/idk', async (req, res)=>{
    try{
        const {newAI}= req.body;

        const createdAI= await prisma.aI.create({data: newAI});
        res.status(201).json(createdAI);
    }
    catch(error){
        console.log(Error, 'Error creating new AI')
        res.status(500).json({error: 'internal server error'});
    }
});


app.listen(PORT, ()=>{
    console.log('Server listening in port: ', PORT);
    console.log(`server listening on port ${PORT}`);
})


