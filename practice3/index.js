import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import todoModel from "./todoModel.js";

// const express = require("express");
const app = express();
app.use(cors("*"));
app.use(express.json());

// Middleware to parse URL-encoded bodies (e.g., from HTML forms)
// The `extended: true` option allows for rich objects and arrays to be encoded into the URL-encoded format.
app.use(express.urlencoded({ extended: true }));

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mydatabase");
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("MongoDB Connection Failed:", error);
  }
};

connectDB();

app.get("/", (req, res) => {
  res.send("setup done");
});

// -------------------  get --------------------

app.get("/todo", async (req, res) => {
  try {
    const todos = await todoModel.find();
    console.log(todos, "to...........");
    res.status(200).json({ todos });
  } catch (error) {
    console.log(error, "err.");
    res.status(500).json({ error });
  }
});

// -------------------  get by Id --------------------

app.get("/todo/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const todo = await todoModel.findById(req.params.id);
    console.log(todo, "to...........");
    res.status(200).json({ todo });
  } catch (error) {
    console.log(error, "err.");
    res.status(500).json({ error });
  }
});

// -------------------  Post - Create --------------------

app.post("/todopost", async (req, res) => {
  try {
    const todoPost = await todoModel.create(req.body);
    console.log(req.body);
    res.status(201).json({ todoPost });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// -------------------  Post - Edit --------------------

app.put("/todoEdit/:todoId", async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.params.todoId);
    const updatedTodo = await todoModel.findByIdAndUpdate(
      req.params.todoId,
      req.body
    );
    res.status(200).json({ updatedTodo, message: "Data succesfully Fathed" });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// -------------------  Post - Delete --------------------

app.delete("/todoEdit/:todoId", (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.listen("4000", () => {
  console.log("server statred");
});
