const path = require("path");
const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send("I likes bagels and butter.");
});

app.get("/todo", (req, res) => {
  res.send("Go here: https://medium.com/pan-labs/dynamic-web-apps-on-github-pages-for-free-ffac2b776d45");
});

app.listen(3000, () => {
    console.log('Listening on port 3000...')
});