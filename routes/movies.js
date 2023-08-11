const express = require("express");
const router = express.Router();
const upload = require('../middlewares/multer.js');
const movieController = require('../controllers/movieController.js');


router.get('/', movieController.getAllMovies);
router.get('/:title', movieController.selectMovie);
router.post('/', upload.single("image"), movieController.addMovie);
router.put('/:id',  upload.single("image"), movieController.updateMovie);
router.delete('/:id', movieController.deleteMovie);

module.exports = router;
