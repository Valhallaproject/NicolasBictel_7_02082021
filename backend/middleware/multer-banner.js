const multer = require('multer');    //import multer package
const db = require('../config/sequelize-config');

const MIME_TYPES = {    //accepted types of images
    'image.jpg' : 'jpg',
    'image/jpeg' : 'jpg',
    'image/png' : 'png'
}
//Save location and file name
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images');
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension)
    }
});

module.exports = multer({storage : storage}).single('banner');