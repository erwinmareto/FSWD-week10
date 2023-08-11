const { User } = require("../models");

class UserRepository {

    static findAll = async (params = {}) => {
        try {
            const users = await User.findAll(params);
            return users;
        } catch (err) {
            console.log(err);
        }
    }

    static findOne = async (id) => {
        try {
            const user = await User.findOne({
                where: {
                    id
                }
            })
            return user;
        } catch (err) {
            console.log(err);
        }
    }

    static create = async (payload) => {
        try {
            const user = await User.create(payload);
            return user;
        } catch (err) {
            console.log(err);
        }
    }

    static update = async (id, payload) => {
        try {
            const user = User.update(payload, {where: {
                id
            }})
            return user;
        } catch (err) {
            console.log(err);
        }
    }

    static destroy = async (id) => {
        try {
            const user = await User.destroy({where: {
                id
            }})
            return user;
        } catch (err) {
            console.log(err);
        }
    } 
    
}


module.exports = UserRepository;
