require("dotenv").config();

const port = process.env.PORT ?? 3001;

const express = require("express");
const hbs = require("hbs");
const app = express();

// Template engine
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// servir contenido estático
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    name: "Miqueas Ledesma",
    title: "Curso de node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    name: "Miqueas Ledesma",
    title: "Curso de node",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    name: "Miqueas Ledesma",
    title: "Curso de node",
  });
});

app.get("*", (req, res) => res.sendFile(__dirname + "/public/404.html"));

app.listen(3001, () => console.log(`Server escuchando en ${port}`));
