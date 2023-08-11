const {Movie} = require('../models')

class MovieRepository {

    static findAll = async (params = {}) => {
        try {
            console.log(params);
            const movies = await Movie.findAll(params);
            return movies;
        } catch (err) {
            console.log(err);
        }
    }

    static findOne = async (title) => {
        try {
            const movie = await Movie.findOne({
                where: {
                    title
                }
            })
            return movie;
        } catch (err) {
            console.log(err);
        }
    }

    static create = async (payload) => {
        try {
            const movie = Movie.create(payload)
            return movie;
        } catch (err) {
            console.log(err);
        }
    }

    static update = async (id, payload) => {
        try {
            const movie = await Movie.update(payload, {
                where: {
                    id
                }
            })
            return movie;
        } catch (err) {
            console.log(err);
        }
    }

    static destroy = async (id) => {
        try {
            const movie = await Movie.destroy({
                where:{
                    id
                }
            })
            return movie;
        } catch (err) {
            console.log(err);
        }
    }

}

module.exports = MovieRepository;