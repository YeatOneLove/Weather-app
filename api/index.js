import express from "express";
import axios from "axios";

const app = express();
app.use(express.static("public"));

const PORT = 3000;
const apikey = "4bcce9588c51e9d74c0a70d6a0f1dacb";

app.get("/weather", async (req, res) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${req.query.address}&units=metric&appid=${apikey}`;
  try {
    const response = await axios.get(url);
    if (response) res.send(response.data);
  } catch (error) {
    res.send("Unable to fetch data, please try again. " + error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
