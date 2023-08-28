//Importing necessary modules
const express = require('express');
const multer = require('multer');
const mime = require('mime-types');

//Creating express application
const app = express();0
const port = process.env.PORT || 3000;

// Configure for file storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


// Enables CORS for any origin
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Handling file upload route
app.post('/upload', upload.single('file'), (req, res) => {
  const uploadedFile = req.file;

  if (!uploadedFile) {
    return res.status(400).send('No file uploaded.');
  }

  const fileInfo = {
    originalName: uploadedFile.originalname,
    size: uploadedFile.size,
    mimeType: uploadedFile.mimetype
  };

  res.json({ message: 'File uploaded successfully.', fileInfo });
});

//This is to set default route
app.get('/', (req, res) => {
  res.send('Welcome to backend');
});

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});