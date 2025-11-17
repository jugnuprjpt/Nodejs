///// import express package ////////

const express = require("express");
// const htmlFile = require("./hello.html");
const path = require("path");

//// createing express server ///
const app = express();

const users = [
  {
    name: "jugnu",
    age: 32,
    occu: "engineer",
  },
  {
    name: "Arjun",
    age: 30,
    occu: "engineer",
  },
  {
    name: "Chinki",
    age: 26,
    occu: "maker",
  },
];

////---- get method -----//

app.get("/jugnu", (req, res) => {
  //   res.send("<h1>Hello Jugnu</h1>");
  res.sendFile(path.join(__dirname, "hello.html"));
});

app.get("/pihu", (jugnu, arjun) => {
  arjun.json({
    number: 1,
    name: "abc",
  });
});

app.get("/arjun", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Succesuffully fetched",
    data: users,
  });
});

/////----port defined ------//

app.listen(8000, () => console.log("app...."));
