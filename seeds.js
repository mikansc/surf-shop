const faker = require("faker");
const Post = require("./models/post");

async function seedPosts() {
  await Post.remove({});
  for (const i of new Array(40)) {
    const post = {
      title: faker.commerce.productName(),
      description: faker.lorem.paragraph(),
      coordinates: [
        Number(faker.address.latitude()),
        Number(faker.address.longitude())
      ],
      author: {
        _id: "5e429175222d2522ec8312c1",
        username: "mika"
      },
      price: faker.random.number()
    };
    await Post.create(post);
  }
  console.log("40 new posts created");
}

module.exports = seedPosts;
