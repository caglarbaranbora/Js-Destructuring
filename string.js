function seperate(str) {
  let str1 = str.toLowerCase();
  let word = str1.split(" ").reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, "");

  console.log(word);
}

seperate("merHaba dunyanaber ben caglar");
