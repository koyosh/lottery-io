const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(`${__dirname}/docs`));

app.get(':file', (req, res) => {
  const file = req.params.file;
  res.sendFile('/${file}');
  console.log(`${file}にアクセスがありました`);
})

app.listen(port, () => {
  console.log('サーバーを起動しました');
})