const express = require("express");
const app = express();
const PORT = 8080; // default port 8080

app.set("view engine", "ejs");

const urlDatabase = {
  // Key/value pairs : shortUrl : longUrl
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};
// Generic routes

// If we have a GET request asking for the path of '/', do the callback
app.get("/", (req, res) => {
  res.send("Hello!");
});

// In the event of a GET request, asking for /hello, we send back hello world in HTML in the callback
app.get("/hello", (req, res) => {
  res.send("<html><body>Hello <b>World</b></body></html>\n");
});



// URL specific routes


// In the event of a GET request asking for /urls, do the callback
app.get("/urls", (req, res) => {
  // Declare an object called templateVars, and we assign to the key urls, the value of the variable urlDatabase
  let templateVars = { urls: urlDatabase };
  // Render the template (or complete the template) with the values provided by the object called templateVars
  res.render("urls_index", templateVars);
});

// If we have a GET request, asking for /urls.json, we do the callback
app.get("/urls.json", (req, res) => {
  // WTF is res.json
  // res.json stringifies the object then sends it back
  res.json(urlDatabase);
});

app.get("/urls/new", (req, res) => {
  res.render("urls_new");
});
// In the event of a GET request, asking for /urls/somethingIDontKnowYet, do the callback
// :shortURL is a route parameter, accessible in req.params (like a wildcard)
app.get("/urls/:shortURL", (req, res) => {
  // Declare an object called templateVars
  // Populate the object with : the value of req.params.shortURL, in the key called shortURL
  // Populate the object with : the value of the urlDatabse, at the key of req.params.shortURL, in the key called longURL
  let templateVars = { shortURL: req.params.shortURL, longURL: urlDatabase[req.params.shortURL] };
  // Render the template called urls_show, with the values of the object called templateVars
  res.render("urls_show", templateVars);
});

app.post('/urls/:shortURL/delete', () => {

})

// User routes

// ...



// Trigger a listen action, on a specific port (8080) and do a callback if it worked
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});






