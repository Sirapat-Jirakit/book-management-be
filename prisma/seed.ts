import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const roundsOfHashing = 10;

async function main() {
  const passwordSabin = await bcrypt.hash('password-alice', roundsOfHashing);
  const passwordAlex = await bcrypt.hash('password-bob', roundsOfHashing);
  // Create Users
  const user1 = await prisma.user.upsert({
    where: { email: 'sabin@adams.com' },
    update: {
      password: passwordSabin,
    },
    create: {
      email: 'sabin@adams.com',
      name: 'Sabin Adams',
      password: passwordSabin,
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'alex@ruheni.com' },
    update: {
      password: passwordAlex,
    },
    create: {
      email: 'alex@ruheni.com',
      name: 'Alex Ruheni',
      password: passwordAlex,
    },
  });

  // Create Books
  const book1 = await prisma.book.create({
    data: {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt & David Thomas',
      published_year: 1999,
      genre: 'Programming',
    },
  });

  const book2 = await prisma.book.create({
    data: {
      title: 'Clean Code',
      author: 'Robert C. Martin',
      published_year: 2008,
      genre: 'Programming',
    },
  });

  const book3 = await prisma.book.create({
    data: {
      title: 'Atomic Habits',
      author: 'James Clear',
      published_year: 2018,
      genre: 'Self-Help',
    },
  });

  // Create Branches
  const branch1 = await prisma.branch.create({
    data: {
      name: 'Central Warehouse',
      address: '123 Main Street, Bangkok',
    },
  });

  const branch2 = await prisma.branch.create({
    data: {
      name: 'Chiang Mai Store',
      address: '456 North Ave, Chiang Mai',
    },
  });

  // Create Inventory Records
  await prisma.inventory.createMany({
    data: [
      {
        bookId: book1.id,
        branchId: branch1.id,
        quantity: 20,
      },
      {
        bookId: book2.id,
        branchId: branch1.id,
        quantity: 15,
      },
      {
        bookId: book3.id,
        branchId: branch2.id,
        quantity: 30,
      },
      {
        bookId: book1.id,
        branchId: branch2.id,
        quantity: 5,
      },
    ],
  });

  console.log('✅ Seed data created successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
