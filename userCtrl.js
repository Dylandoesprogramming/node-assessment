const userData = require('./userData.json');

module.exports = {
    getUsers: function(req, res, next) {
        let newArr = [];
        if (req.query.age) {
            for (var i = 0; i < userData.length; i++) {
                if (userData[i].age < req.query.age) {
                    newArr.push(userData[i])
                }
            }
            res.status(200).json(newArr);
        }

        if (req.query.lastname) {
            for (var i = 0; i < userData.length; i++) {
                if (userData[i].last_name == req.query.lastname) {
                    newArr.push(userData[i]);
                }
            }
            res.status(200).json(newArr);
        }

        if (req.query.email) {
            for (var i = 0; i < userData.length; i++) {
                if (userData[i].email == req.query.email) {
                    newArr.push(userData[i])

                }
            }
            res.status(200).json(newArr);
        }

        if (req.query.favorites) {
            for (var i = 0; i < userData.length; i++) {
                for (var j = 0; j < userData[i].favorites.length; j++) {
                    if (userData[i].favorites[j] == req.query.favorites) {
                        newArr.push(userData[i]);
                    }
                }
            }
            res.status(200).json(newArr);
        } else {
            res.status(200).json(userData);
        }

    },
    getById: function(req, res, next) {
        console.log(req.params.userId);
        for (var i = 0; i < userData.length; i++) {
            // console.log(userData[i].id)
            if (userData[i].id === Number(req.params.userId)) {
                res.status(200).json(userData[i]);
            }
        }

        res.status(404).json(null);
    },

    getAdmins: function(req, res, next) {
        let newArr = []
        for (var i = 0; i < userData.length; i++) {
            if (userData[i].type === 'admin') {
                newArr.push(userData[i]);
            }
        }
        res.status(200).json(newArr);
    },
    getNonAdmins: function(req, res, next) {
        let newArr = []
        for (var i = 0; i < userData.length; i++) {
            if (userData[i].type != 'admin') {
                newArr.push(userData[i]);
            }
        }
        res.status(200).json(newArr);
    },
    getByType: function(req, res, next) {
        let newArr = []
        for (var i = 0; i < userData.length; i++) {
            if (userData[i].type === req.params.userType) {
                newArr.push(userData[i]);
            }
        }
        res.status(200).json(newArr);
    },
    editUser: function(req, res, next) {

        for (var i = 0; i < userData.length; i++) {
            if (userData[i].id === Number(req.params.userId)) {
                if (req.body.id) {
                    userData[i].id = req.body.id;
                }
                if (req.body.first_name) {
                    userData[i].first_name = req.body.first_name;
                }

                if (req.body.last_name) {
                    userData[i].last_name = req.body.last_name;
                }

                if (req.body.email) {
                    userData[i].email = req.body.email;
                }

                if (req.body.gender) {
                    userData[i].gender = req.body.gender;
                }

                if (req.body.language) {
                    userData[i].language = req.body.language;
                }

                if (req.body.age) {
                    userData[i].age = req.body.age;
                }

                if (req.body.city) {
                    userData[i].city = req.body.city;
                }

                if (req.body.state) {
                    userData[i].state = req.body.state;
                }
                if (req.body.type) {
                    userData[i].type = req.body.type;
                }

                if (req.body.favorites) {
                    userData[i].favorites = req.body.favorites;
                }
            }
        }
        res.status(200).json(userData);
    },
    addUser: function(req, res, next) {
        let curId = userData.length + 1;
        req.body.id = curId;
        userData.push(req.body);
        res.status(200).json(userData);
    },

    deleteUser: function(req, res, next) {
        let removeId = Number(req.params.userId);
        for (var i = 0; i < userData.length; i++) {
            if (removeId === userData[i].id) {
                userData.splice(i, 1);
            }
        }
        res.status(200).json(userData);
    }
}