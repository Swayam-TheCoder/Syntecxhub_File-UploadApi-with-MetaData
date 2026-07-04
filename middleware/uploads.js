const multer = require('multer');
const path = require('path');

// Storage configuration for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// File Validation
const filefilter = (req, file, cb) => {
  const allowedFileTypes = /jpeg|jpg|png|gif/;
  const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());

  const mimetype = allowedFileTypes.test(file.mimetype);

  if(extname && mimetype){
    return cb(null, true);
  } else{
    cb(new Error("Only JPG, JPEG, PNG, and GIF files are allowed"));
  }
}

// Upload Middleware
const upload = multer({
  storage: storage,
  fileFilter: filefilter,
  limits: { fileSize: 1024 * 1024 * 2 } // Limit file size to 2MB
})

module.exports = upload;