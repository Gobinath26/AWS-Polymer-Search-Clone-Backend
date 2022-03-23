const fs = require("fs");
//------------------------------------------------------
const quote = "All is well";
fs.writeFile("./awesome.html", quote, (error) => {
  console.log("completed writing!!!");
});
//-------------------Task-1------------------------------------
const quote2 = "Live more,worry less";

for (let i = 1; i <= 10; i++) {
  fs.writeFile(`./backup/text-${i}.html`, quote2, (error) => {
    console.log("completed writing!!!");
  });
}
//-----------------Task-2--------------------------------------
const quote3 = "Happy women's day";
const noOfFiles = process.argv[2];
for (let i = 1; i <= noOfFiles; i++) {
  fs.writeFile(`./backup/text-${i}.html`, quote3, (error) => {
    console.log("completed writing!!!", `text-${i}.html`);
  });
}
//------------Read file-------------------------------------
fs.readFile("./cool.txt", "utf-8", (err, content) => {
  if (err) {
    console.log(err);
  }
  console.log(content);
});
//--------------Append file--------------------------------

const niceQoute = "\nMake everyday a little less ordinarily";
fs.appendFile("./nice.txt", niceQoute, (err) => {
  console.log("Updated file!!!");
});
//------------------Delete file---------------------------
fs.unlink("./delete-file.css", (err) => {
  console.log("Deleted file!!!");
});
//------------------Read folder---------------------------
fs.readdir("./backup", (err, files) => {
  console.log(files);
});
//-----------Delete all files in folder-------------------
fs.readdir("./backup", (err, files) => {
  //console.log(files);
  files.forEach((fileName) =>
    fs.unlink(`./backup/${fileName}`, (err) => {
      console.log("Deleted file!!!");
    })
  );
});
//--------------------------------------------------------