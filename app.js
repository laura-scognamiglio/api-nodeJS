const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send(' World!'));
app.get("/users", (req,res) => {
    const users = [
    {
      id: 1,
      name: "lolo",
    },
    {
      id: 2,
      name: "loloya",
    },
    {
      id: 3,
      name: "dodo",
    },
   ];
  
   res.json(users);
  });
app.listen(port, () => console.log(`Example app listening on port ${port}!`));