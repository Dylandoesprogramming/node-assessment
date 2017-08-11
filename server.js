const express = require('express');
const bodyParser = require('body-parser')
const userCtrl = require('./userCtrl');
const userData = require('./userData.json');
const port = 3000;
const app = express();
app.use(bodyParser.json());
app.get('/api/users/', userCtrl.getUsers);
app.get('/api/users/:userId', userCtrl.getById);
app.get('/api/admins', userCtrl.getAdmins);
app.get('/api/nonadmins', userCtrl.getNonAdmins);
app.get('/api/user_type/:userType', userCtrl.getByType);
app.put('/api/users/:userId', userCtrl.editUser);
app.post('/api/users', userCtrl.addUser);
app.delete('/api/users/:userId', userCtrl.deleteUser);
// console.log(userData) //tests if json is working
app.listen(port, function() {
    console.log('listening on port 3000')
})