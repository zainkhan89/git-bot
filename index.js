const jsonfile = require("jsonfile");
const moment = require("moment");
const simpleGit = require("simple-git");

const FILE_PATH = "./data.json";

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.floor()*(max-min+1)) + min;
};

const makeCommit = n => {
    if (n===0) return simpleGit().push();
    const DATE = moment ()
    .subtract(getRandomInt(0, 365), "days")
    .format();

    const data = {
        date: DATE
    };
    console.log(n);
    console.log(data);
    console.log(DATE);

    jsonfile.writeFile( FILE_PATH, data, ()=>{
        simpleGit()
        .add([FILE_PATH])
        .commit( DATE, {"--date":DATE}, makeCommit.bind(this, --n) )
    })
}

makeCommit(100);


// const DATE = moment().subtract(5, 'd').format();
// const data = {
//     date: DATE
// }

// console.log(data);
// console.log(DATE);

// jsonfile.writeFile(FILE_PATH, data);
// simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE}).push();