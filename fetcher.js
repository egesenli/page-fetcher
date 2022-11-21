//use the request library of npm and use the fs with node.js to writing the files 
const request = require('request');
const fs = require("fs");

//take the domain and file path inputs from the user
const domain = process.argv[2];
const file = process.argv[3];

request(domain, (error, response, body) => {
//check if there is a error or not 
  if (error) {
    console.error(error);
  }
//receive the data and write it to a file in the local filesystem
  fs.writeFile(`${file}`, body, error => {
    if (error) {
      console.error(error);
    } else {
      console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${file}`);
    }
  });
});