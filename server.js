const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoute');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use('/api/files', userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});