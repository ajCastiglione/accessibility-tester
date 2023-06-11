import pa11y from "pa11y";
import express from "express";
import validator from "validator";

const PORT = process.env.PORT || 5000;

const app = express();
app.disable("x-powered-by");

app.use(express.static("dist"));

app.get("/api/test", async (req, res) => {
  if (!req.query.url) return res.status(400).send({ error: "No URL provided" });
  // Check that the URL is a URL.
  if (!validator.isURL(req.query.url))
    return res.status(400).send({ error: "Invalid URL" });

  const url = req.query.url;

  const results = await pa11y(url);

  res.status(200).send(results);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
