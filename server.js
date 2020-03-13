const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.use(express.static(__dirname + "/dist"));

app.get('/about',  (req, res) => 
      res.sendFile(__dirname + '/dist/about.html') 
);
app.get('/contact',  (req, res) => 
      res.sendFile(__dirname + '/dist/contact.html') 
);
app.get('/work',  (req, res) => 
      res.sendFile(__dirname + '/dist/work.html') 
);
app.get('/',  (req, res) => 
      res.sendFile(__dirname + '/dist/index.html') 
);

app.get('*',  (req, res) => 
      res.redirect("back") 
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))