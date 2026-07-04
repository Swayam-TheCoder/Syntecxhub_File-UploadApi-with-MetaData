const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploads');
const { createUser, uploadProfile } = require('../controllers/userController');

router.post('/', createUser);
router.post('/:id/upload', upload.single("image"), uploadProfile);

module.exports = router;