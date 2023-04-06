const zl = require("zip-lib");

zl.archiveFolder("./dist", "./build.zip").then(
  function () {
    console.log("Create Build Zip");
  },
  function (err) {
    console.log(err);
  }
);
