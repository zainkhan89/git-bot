const jsonfile = require("jsonfile");
const moment = require("moment");
const simpleGit = require("simple-git");
const fs = require("fs");

const FILE_PATH = "./data.json";

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const makeCommit = (n) => {
  if (n === 0) return simpleGit().push();

  const DATE = moment()
    .subtract(getRandomInt(0, 730), "days")
    .startOf("day")
    .format();

  const data = {
    date: DATE,
  };

  console.log(n);
  console.log(data);
  console.log(DATE);

  fs.appendFile(FILE_PATH, JSON.stringify(data) + "\n", () => {
    simpleGit()
      .add([FILE_PATH])
      .commit(DATE, { "--date": DATE }, makeCommit.bind(this, --n));
  });
};

makeCommit(1500);
