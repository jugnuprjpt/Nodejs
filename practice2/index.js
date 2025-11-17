// const express = require("express");
import express from "express"; //// you can use import insted of variable when you define module on package json
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies (e.g., from HTML forms)
// The `extended: true` option allows for rich objects and arrays to be encoded into the URL-encoded format.
app.use(express.urlencoded({ extended: true }));

const todoList = [
  {
    id: "1",
    name: "Jugnu",
    age: "32",
    hobby: "cricket",
    occu: "Engineer",
  },
  {
    id: "2",
    name: "Arjun",
    age: "28",
    hobby: "listen music",
    occu: "Engineer",
  },
  {
    id: "3",
    name: "Pihu",
    age: "7",
    hobby: "Watching Tv",
    occu: "Student",
  },
  {
    id: "4",
    name: "Rekha",
    age: "30",
    hobby: "Beauti Parlor",
    occu: "House wife",
  },
  {
    id: "5",
    name: "Chinki",
    age: "27",
    hobby: "Marketing",
    occu: "MBA",
  },
];

/////// Routing Redirect ///////////

app.get("/", (req, res) => {
  res.redirect("/health");
});

app.get("/health", (req, res) => {
  res.send("Health is ok");
});

app.get("/todo", (req, res) => {
  res.status(200).json(todoList);
});

app.post("/todo", (req, res) => {
  const inputData = req.body;

  const idFind = todoList.findIndex((item) => item.id === inputData.id);

  todoList[idFind] = inputData;

  res.status(200).json({
    status: "ok",
    message: "Updated Succeessfully",
    todoList,
  });
});

app.listen(8000, () => console.log(8000));
