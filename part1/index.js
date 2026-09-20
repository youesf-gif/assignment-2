// Q-1
// function currentFileAndDir() {
//     console.log({ File: __filename,Dir:__dirname });
// }
// currentFileAndDir();

// Q-2
// const path = require("node:path");

// function fileName(p) {
//     return path.basename(p);
// }

// console.log(fileName("/user/files/report.pdf"));

// Q-3

// const path = require("node:path");

// function buildPath(obj) {
//     console.log(path.join(obj.dir, `${obj.name}${obj.ext}`));
// }
// buildPath({ dir: "/folder", name: "app", ext: ".js" });

// Q-4
// const path = require("node:path");

// function fileExten(p) {
//     console.log(path.extname(p));
// }

// fileExten("/docs/readme.md");

// Q-5
// const path = require("node:path");

// function fileExten(p) {
//     const obj = path.parse(p);
//     return { Name: obj.name, Ext: obj.ext };
// }

// console.log(fileExten("/home/app/main.js"));

// Q-6
// const path = require("node:path");

// function checkAbs(p) {
//     console.log(path.isAbsolute(p));
// }

// checkAbs("/home/user/file.txt");

// Q-7
// const path = require("node:path");

// function joinMultiSegments(...p) {
//     console.log(path.join(...p));
// }

// joinMultiSegments("src", "components", "App.js");

// Q-8
// const path = require("node:path");

// function relativeToAbs(p) {
//     console.log(path.resolve(p));
// }

// relativeToAbs('./index.js');

// Q-9
// const path = require("node:path");

// function joinTwoPaths(...p) {
//     console.log(path.join(...p));
// }

// joinTwoPaths("/folder1", "folder2/file.txt");

// Q-10
// const fs = require("node:fs");

// Q-12
// const EventEmitter = require("node:events");

// const event = new EventEmitter();

// event.on("start", () => {
//     console.log("Welcome event triggered!");
// });

// event.emit("start");

// Q-13
// const EventEmitter = require("node:events");

// const event = new EventEmitter();

// event.on("login", (username) => {
//     console.log(`User logged in: ${username}`);
// });

// event.emit("login", "Ahmed");

// Q-14
// const fs = require("node:fs");

// const content = fs.readFileSync("./notes.txt");
// console.log(content.toString());

// Q-15
// const fs = require("node:fs");

// fs.writeFile("./async.txt", "Async save", (err) => {
//     if (err) console.log(err.message);
// });

// Q-16
// const fs = require("node:fs");

// console.log(fs.existsSync("./notes.txt"));

// Q-17
// const os = require("node:os");

// function OSAndCPU() {
//     return { Platform: os.platform(), Arch: os.arch() };
// }

// console.log(OSAndCPU());
