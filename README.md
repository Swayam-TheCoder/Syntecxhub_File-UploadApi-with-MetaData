<h1>File Upload API with Metadata</h1>

A RESTful File Upload API built using Express.js, Node.js, MongoDB, Mongoose, and Multer. This project allows users to upload profile images, associate them with user profiles, retrieve uploaded image metadata, and delete profile images.

Features:
- Create a new user
- Upload profile image
- Associate uploaded image with a user
- Retrieve uploaded profile image information
- Delete profile image
- Image-only validation (JPG, JPEG, PNG)
- File size validation
- Static file serving
- MongoDB database integration
- Proper HTTP status codes and error handling

Tech Stack:
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Multer
- Postman

API Endpoints:

### Create User

POST /api/files

Request Body:

```json
{
  "name": "Swayam",
  "email": "swayam@gmail.com"
}
```

---

### Upload Profile Image

POST /api/files/:id/upload

Body (form-data):

| Key | Type |
|-----|------|
| image | File |

Supported Formats:
- JPG
- JPEG
- PNG

Maximum File Size:
- 2 MB

---

### Get Profile Image

GET /api/files/:id/image

---

### Delete Profile Image

DELETE /api/files/:id/image

---

Status Codes:

200 - Success

201 - User Created Successfully

400 - Bad Request

404 - User or Image Not Found

500 - Internal Server Error

Testing:

All API endpoints were tested using Postman.

Author:

Created as part of the Syntecxhub Backend Development Internship.

<br>
<br>

## Postman Testing Screenshots

### Create User
<img width="1433" height="552" alt="Screenshot 2026-07-04 143905" src="https://github.com/user-attachments/assets/647a3505-ebb4-4de3-a54c-95b5a823deaf" />


### Upload Profile Image
<img width="1438" height="382" alt="Screenshot 2026-07-04 144448" src="https://github.com/user-attachments/assets/4c02e1f3-0f0a-478a-96c8-e90cf467abf5" />


### Get Profile Image
<img width="1433" height="356" alt="Screenshot 2026-07-04 145827" src="https://github.com/user-attachments/assets/1c37e544-be25-42ea-bc9f-d6ace2d18d03" />


### Delete Profile Image
<img width="1432" height="227" alt="Screenshot 2026-07-04 145934" src="https://github.com/user-attachments/assets/5be400c2-83f6-4140-857f-877a6a17fd48" />


### Uploaded Image in Browser
<img width="1917" height="902" alt="Screenshot 2026-07-04 182722" src="https://github.com/user-attachments/assets/74078164-6cac-45a5-af10-45d1811cdd81" />


### MongoDB Document
<img src="YOUR_SCREENSHOT_LINK_HERE" alt="MongoDB Document" />
