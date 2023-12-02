require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routes  = require("./routes");
const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// route utama
app.get("/", (req, res, next) => {
  res.send("Welcome to CULINARYNDO!");
});

// Handling error 404
app.use((req, res, next) => {
  res.status(404).json({
    status: false,
    message: "request not found",
    data: null,
  });
});

// Handling error 500
app.use((err, req, res, next) => {
  res.status(404).json({
    status: false,
    message: err.message,
    data: null,
  });
});

app.listen(PORT, () => {
  console.log(`running on http://localhost:${PORT}`);
});
