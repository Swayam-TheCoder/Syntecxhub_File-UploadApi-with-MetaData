const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploads');
const { createUser, uploadProfile, getProfileImage, deleteProfileImage } = require('../controllers/userController');

router.post('/', createUser);
router.post('/:id/upload', upload.single("image"), uploadProfile);
router.get('/:id/image', getProfileImage);
router.delete('/:id/image', deleteProfileImage);

module.exports = router;