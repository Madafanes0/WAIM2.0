import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function syncUserWithDatabase(userEmail, userName) {
  // Check if the user exists in our database "postgres"
  let existingUser = await prisma.user.findUnique({
    where: {
      email: userEmail,
    },
  });

  if (!existingUser) {
    // User doesn't exist, create a new 
    existingUser = await prisma.user.create({
      data: {
        email: userEmail,
        name: userName,
      },
    });
  } else {
    // User exists, update user information
    existingUser = await prisma.user.update({
      where: {
        email: userEmail,
      },
      data: {
        name: userName,
      },
    });
  }

  return existingUser;
}

// Example usage when a user logs in via Auth0 and receives the user information
async function handleAuth0Login(userEmail, userName) {
  // Sync user with the database
  const user = await syncUserWithDatabase(userEmail, userName);
  console.log('User synced:', user);
}

// This function is called when a user logs in via Auth0 and receives the user information
handleAuth0Login('user@example.com', 'John Doe');
