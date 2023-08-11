const MovieService = require('../services/movieService.js');

const getAllMovies = async (req, res, next) => {
  try {
    const result = await MovieService.findAll(req.query);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const selectMovie = async (req, res, next) => {
  try {
    const movie = await MovieService.findOne(req.params);
    if (!movie) {
      throw { name: "NotFound" };
    }
    res.status(200).json(movie);
  } catch (err) {
    next(err);
  }
};

const addMovie = async (req, res, next) => {
  try {
    const movie = await MovieService.create(req.file, req.body);
    res.status(201).json({ message: "Movie Added" });
  } catch (err) {
    next(err);
  }
};

const updateMovie = async (req, res, next) => {
  try {
    const movie = await MovieService.update(req.params, req.file, req.body);
    if (!movie) {
      throw { name: "ErrorNotFound" };
    } else {
      res.status(201).json({ message: "Movie Updated" });
    }
  } catch (err) {
    next(err);
  }
};

const deleteMovie = async (req, res, next) => {
  try {
    const movie = MovieService.destroy(req.params);
    if (!movie) {
      throw { name: "NotFound" };
    }
    res.status(201).json({ message: "Movie Deleted" });
  } catch (err) {
    next(err);
  }
};


module.exports = {
  getAllMovies,
  selectMovie,
  addMovie,
  updateMovie,
  deleteMovie,
};
