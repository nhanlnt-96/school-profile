const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./models');
const {Users} = require('./models');
const bcrypt = require('bcrypt');


app.use(express.json());
app.use(cors());

app.post('/register', (req, res) => {
    const {username, password} = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            username: username,
            password: hash
        }).then(() => {
            res.json('USER REGISTERED');
        }).catch((error)=>{

        })
    });
})

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('connected to port 3001');
    });
});
