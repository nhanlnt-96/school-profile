const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./models');
const {Users} = require('./models');
const bcrypt = require('bcrypt');


app.use(express.json());
app.use(cors());

app.post('/register', (req, res) => {
  const {adminId, fullname, gender, username, password} = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      adminId: adminId,
      fullname: fullname,
      gender: gender,
      username: username,
      password: hash
    }).then(() => {
      res.json('USER REGISTERED');
    }).catch((error) => {
      error && res.status(400).json({err: error});
    });
  });
});

app.post('/login', async (req, res) => {
  const {username, password} = req.body;

  const user = await Users.findOne({where: {username: username}});
  !user && res.status(400).json({err: 'User doesn\'t exist'});

  const dbPassword = user.password;
  bcrypt.compare(password, dbPassword).then((match) => {
    !match ? res.status(400).json({err: 'Wrong username or password !'}) : res.json('LOGGED IN');
  });
});

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('connected to port 3001');
  });
});