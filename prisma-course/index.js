import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const newUser = await prisma.user.create({
  //   data: {
  //     name: "Npc7",
  //     email: "npc71@mail.com",
  //   },
  // });
  // console.log(newUser);
  // const users = await prisma.user.findMany();
  // console.log(users);
  // users.forEach((user) => {
  //   console.log(`${user.id} - ${user.name}`);
  // });
  //   const user = await prisma.user.findFirst({
  //     where: {
  //       OR: [{ id: 1 }, { email: "npc@mail.com" }],
  //     },
  //   });
  //   console.log(user);
  // }
  // const user = await prisma.user.delete({
  //   where: {
  //     id: 1,
  //   },
  // });
  // console.log(user);
  // const user = await prisma.user.update({
  //   where: {
  //     id: 3,
  //   },
  //   data: {
  //     lastname: "LastName3",
  //   },
  // });
  // console.log(user);
  // const result = await prisma.user.updateMany({
  //   where: {
  //     name: "Npc7",
  //   },
  //   data: {
  //     lastname: "LastName7",
  //   },
  // });
  // console.log(result);

  // const user = await prisma.user.upsert({
  //   where: {
  //     email: "npc@mail.com",
  //   },
  //   create: {
  //     email: "npc@mail.com",
  //     name: "Npc",
  //   },
  //   update: {
  //     lastname: "LastName",
  //   },
  // });
  // console.log(user);

  // const newUser = await prisma.user.create({
  //   data: {
  //     name: "Npc8",
  //     email: "npc8@mail.com",
  //   },
  // });
  // console.log(newUser);

  // const newPost = await prisma.post.create({
  //   data: {
  //     title: "Titulo 1",
  //     content: "Descripción 1",
  //     author: {
  //       connect: {
  //         id: newUser.id,
  //       },
  //     },
  //   },
  // });
  // console.log(newPost);

  // const newUser = await prisma.user.create({
  //   data: {
  //     name: "Npc10",
  //     email: "npc10@mail.com",
  //     posts: {
  //       create: {
  //         title: "Titulo 3",
  //         content: "Descripción 3",
  //       },
  //     },
  //   },
  // });
  // console.log(newUser);

  // const posts = await prisma.post.findMany();
  // console.log(posts);

  const users = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });

  users.forEach((user) => {
    console.log("-----------------------");
    console.log(`User: ${user.name}`);
    console.log(`Email: ${user.email}`);

    user.posts.forEach((post, i) => {
      console.log(`${i}. ${post.title} ${post.content}`);
    });
  });
}

main();
