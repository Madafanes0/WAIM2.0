const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


async function main(){
    //const user=  await prisma.user.create({data:{ name: 'Alice',email: 'bjvcfd@gmail.com', password: '123456'}})
    const users= await prisma.user.findMany()
    console.log(users)   
}

main()

.catch(e =>{
    console.log("An error has ocurred" , e.message)
})
.finally(async ()=>{
    await prisma.$disconnect()
}) 