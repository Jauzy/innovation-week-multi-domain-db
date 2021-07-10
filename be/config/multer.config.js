const multer = require('multer')
const path = require('path')

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads/' + req.file_info.REFERENCE)
    },
    filename: (req, file, cb) => {
        cb(null, req.file_info.REFERENCE + '-' + req.file_info.FILE_ID + path.extname(file.originalname))
    }
});

module.exports = multer({ storage: storage })