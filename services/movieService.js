const MovieRepository = require('../repositories/movieRepository.js');

class MovieService {

    static findAll = async (params) => {
        try {
            const {page, size} = params;
            // Added pagination from req.query
            const movies = await MovieRepository.findAll({offset: page, limit: size});
            return movies;
        } catch (err) {
            console.log(err);
        }
    }

    static findOne = async (params) => {
        try {
            const { title } = params;
            const movie = await MovieRepository.findOne(title);
            return movie;
        } catch (err) {
            console.log(err);;
        }
    }

    static create = async (file, params) => {
        try {
            const { title, genres, year } = params;
            let payload = {
                title,
                genres,
                year
            }

            if (file) {
                payload['photo'] = `http:/localhost:3000/${file.filename}`
            }
            
            const movie = await MovieRepository.create(payload);
            return movie;
        } catch (err) {
            console.log(err);
        }
    }

    static update = async (pathParams, file, params) => {
        const { id } = pathParams;
        const { title, genres, year } = params;
        let payload = {
            title,
            genres,
            year
        }

        if (file) {
            const link = `http:/localhost:3000/${file.filename}`;
            payload['photo'] = link;
        }
        
        const movie = await MovieRepository.update(id, payload);
        return movie;
    }

    static destroy =  async (params) => {
        try {
            const { id } = params;
            const movie = await MovieRepository.destroy(id);
            return movie;
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = MovieService;