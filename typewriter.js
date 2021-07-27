const sentence = "hello there from lighthouse labs";

[...sentence].forEach((char, index) => {
  setTimeout(() => {
    process.stdout.write(char);
  }, 50 * index);
});
setTimeout(() => {
  console.log("\n");
}, 2500);
