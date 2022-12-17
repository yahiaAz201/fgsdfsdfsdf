const express = require("express");
const app = express();
const axios = require("axios");

const port = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  const response = await axios.get(
    "https://sso.godaddy.com/?realm=pass&app=o365",
    {
      headers: {
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
    }
  );
  res.json({
    server: "hello world",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
