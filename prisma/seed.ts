import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create Users
  const user1 = await prisma.user.create({
    data: {
      name: 'Alice Admin',
      email: 'alice@example.com',
      password: 'hashed_password_1', // Normally you'd hash this!
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: 'Bob Librarian',
      email: 'bob@example.com',
      password: 'hashed_password_2',
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
