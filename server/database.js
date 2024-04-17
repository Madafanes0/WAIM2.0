const { PrismaClient }= require('@prisma/client')

const prisma = new PrismaClient();

async function syncUserWithDatabase(userEmail, userPassword) {
  // Check if the user exists in our database "postgres"
  let existingUser = await prisma.user.findUnique({
    where: {
      email: userEmail,
      password: userPassword
    },
  });

  if (!existingUser) {
    // User doesn't exist, create a new 
    existingUser = await prisma.user.create({
      data: {
        email: userEmail,
        password: userPassword
      },
    });
  }
  

  return existingUser;
}

// Example usage when a user logs in via Auth0 and receives the user information
async function handleAuth0Login(userEmail, userPassword) {
  // Sync user with the database
  const user = await syncUserWithDatabase(userEmail, userPassword);
  console.log('User synced:', user);
}

// This function is called when a user logs in via Auth0 and receives the user information
handleAuth0Login('sadrac.aramburo@gmail.com', '123456789');
