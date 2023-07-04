// console.log(global);

// setTimeout(() => {
//   console.log("Timer");
// }, 3000);

// console.log(__dirname);
// console.log(__filename);
// console.log(process.env);
// console.log(process.argv);
//current working derictory
// console.log(process.cwd());
// console.log(process.exit());

const fs = require("fs").promises;
const path = require("path");

/**
 * Read and Write opretaion example
 *@returns {Promise<void>}
 */
const readWriteExpample = async () => {
  try {
    //===================read file===============
    const pathToFile = path.join("files", "books", "book.txt");
    // передаємо аргументом шлях до файлу
    const readResult = await fs.readFile(pathToFile);
    // робимо наш текст читабельним
    const txt = readResult.toString();
    // console.log(pathToFile);
    // повертається Buffer
    // console.log(readResult);
    // console.log(txt);

    const dir = "files";

    //передаємо шлях до файлу
    // const dirStat = await fs.lstat(pathToFile);
    //взнаємо чи це файл, чи директорія
    // console.log(dirStat.isDirectory());
    // console.log(pathToFile);
    //===================== read json===================
    const pathToJson = path.join("files", "sample.json");
    const jsonResult = await fs.readFile(pathToJson);

    const json = JSON.parse(jsonResult);
    // console.log(json);
    //додаємо зміни в джейсон
    json.location = "Ukraine";
    //перезаписуємо в новий файл
    await fs.writeFile("contacts.json", JSON.stringify(json));
  } catch (error) {
    console.log(error);
  }
};

readWriteExpample();
