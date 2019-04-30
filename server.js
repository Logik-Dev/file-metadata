const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer({ dest: 'uploads/'});
const bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.sendFile(__dirname+"/public/index.html");
})

app.post("/submit", upload.single('upfile'), (req, res, next) => {
    console.log(req.file)
    res.json({
        name: req.file.originalname,
        type: req.file.mimetype,
        size: req.file.size
    })
})
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`)
})