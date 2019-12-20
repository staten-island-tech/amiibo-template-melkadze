const path = require("path");
const hbs = require("hbs");
const express = require("express");
const app = express();

//define paths for express
const publicDirectoryPath = path.join(__dirname, "../public");
const partialsPath = path.join(__dirname, "../templates/partials");
const viewsPath = path.join(__dirname, "../templates/views");


//setup handlebars engine and views location
app.set("view engine", "hbs"); //telling express/node to use handlebars for templates
app.set("views", viewsPath) //telling express to get templates from templates/views folder
hbs.registerPartials(partialsPath);
//set up static asset directory (aquire css)
app.use(express.static(publicDirectoryPath))
app.get("", async (req, res) => {
  try {
    res.render("index", {
      title: "Main paige"
    });
  } catch {
    res.status(500).send();
  }
});

app.get("/about/:id", async (req, res) => {
  const name = req.params.id;
  try {
    res.render("index", {
      title: `${name}`
    });
  } catch {
    res.status(500).send();
  }
});

app.get("/new", async (req, res) => {
  const name = req.params.id;
  try {
    res.render("new", {
      title: name
    });
  } catch {
    res.status(500).send();
  }
});

app.get("/todo", (req, res) => {
  res.send("Go here: https://medium.com/pan-labs/dynamic-web-apps-on-github-pages-for-free-ffac2b776d45");
});

app.listen(3000, () => {
    console.log("Listening on port 3000...");
    console.log(__dirname);
});