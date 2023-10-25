const express = require("express");
const cors = require("cors");
const urlRouter = require("./routes/url");

const app = express();
const PORT = 7777;

const corsOptions = {
  origin: "http://localhost:5173",
  allowedHeaders: ["Content-Type", "Authorization"],
  methods: ["GET", "POST", "PATCH", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.originalUrl}`);
  res.on("finish", () => {
    console.log(`Response Status: ${res.statusCode}`);
  });
  next();
});

app.get("/", (req, res) => {
  res.send("Server is up.");
});

app.use("/api/url", urlRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
