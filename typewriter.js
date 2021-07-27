const sentence = "hello there from lighthouse labs";

const typewriter = (message) => {
  [...message].forEach((char, index) => {
    setTimeout(() => {
      process.stdout.write(char);
    }, 50 * index);
  });
  setTimeout(() => {
    console.log("\n");
  }, 2500);
};

typewriter(sentence);
