const Users = require("../models/User");

const { multipleMongooseToObject } = require("../../utils/mongoose");

class UserController {
    search(req, res) {
        res.render("users/register");
    }
    login(req, res) {
        res.render("users/login");
    }
}
module.exports = new UserController();
