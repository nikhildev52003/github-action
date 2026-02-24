
const express = require("express");

const app = express();

const quotes = [
  "Success is practice",
  "Consistency wins",
  "Never give up"
];

app.get("/", (req, res) => {
  res.json({
    quote: quotes[Math.floor(Math.random() * quotes.length)]
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});