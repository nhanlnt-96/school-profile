const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

//set origin
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

//set origin
app.use(cors(corsOptions));
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'school_profile'
});

app.post('/create-user', (req, res) => {
    const date = req.body.date;
    const fullname = req.body.fullname;
    const gender = req.body.gender;
    const username = req.body.username;
    const password = req.body.password;

    db.query('INSERT INTO user_account (date_time,fullname,gender,user_name,user_password) VALUES (?,?,?,?,?)', [date, fullname, gender, username, password], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send('username created');
        }
    });
})

app.listen(3001, () => {
    console.log('connected to port 3001');
});

