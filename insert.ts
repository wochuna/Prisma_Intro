import { PrismaClient } from './generated/prisma/index.js';

const prisma = new PrismaClient();

async function main() {
   // Insert a new user
  /*const user1 = await prisma.user.create({
    data: {
      name: 'Joy',
      email: 'joymueni@gmail.com',
    },
  });*/
  
  /*const user2 = await prisma.user.create({
    data: {
      name: 'Mark',
      email: 'markkemboi@gmail.com', 
    },
  });
  
  const user3 = await prisma.user.create({
    data: {
      name: 'Feo',
      email: 'feokerich@gmail.com', 
    },
  });*/

   const user5 = await prisma.user.create({
      data: {
         name: 'Marc',
         email:'duomarc@gmail.com',
      },
   });
      

  // Insert a new study record with associated residence
  /*const study1 = await prisma.studies.create({
    data: {
      program: 'Computer Science',
      year: 3,
      sem: '1',
      residence: {
        create: {
          house: 'Sote A',
          period: '2023-2024',
        },
      },
    },
  });*/
  /*const study2 = await prisma.studies.create({
    data: {
      program: 'Law',
      year: 2,
      sem: '2',
      residence: {
        create: {
          house: 'Sote B',
          period: '2023-2024',
        },
      },
    },
  });

  const study3 = await prisma.studies.create({
    data: {
      program: 'IT',
      year: 4,
      sem: '2',
      residence: {
        create: {
          house: 'Lena Moi',
          period: '2023-2024',
        },
      },
    },
  });*/


   const study5 = await prisma.studies.create({
    data: {
      program: 'LAW',
      year: 4,
      sem: '2',
      residence: {
        create: {
          house: 'Ndovu',
          period: '2019-2020',
        },
      },
    },
  });

  console.log({user5, study5});
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
