
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import cors from 'cors';
import multer from 'multer';
import fs from 'fs';

const upload = multer({ dest: 'uploads/' })

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express()
dotenv.config()

// #############################################################################
// This configures static hosting for files in /public that have the extensions
// listed in the array.
var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html','css','js','ico','jpg','jpeg','png','svg',"tsx"],
  index: ['index.html'],
  maxAge: '1m',
  redirect: false
}
app.use(express.static('dist', options))
app.use(cors())

app.get('/jwt', cors(), async (req, res) => {
  try {
    const decoded = jwt.verify(req.query.tkn, process.env.JWT_SECRET)    
    res.send(decoded)  
  } catch (error) {
    res.status(401).send({ error: 'Not authorized to access this resource' })
  }
})

app.post('/upload-image', upload.single('image'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  if (!req.file) {
    res.status(400).send('No file uploaded');
    return;
  }
  // Access the uploaded file via req.file
  const { originalname, path: filePath } = req.file;

  // Move the uploaded file to the desired folder (e.g., "public/images")
  const targetFolder = path.join(__dirname, 'public', 'images');
  const newFilePath = path.join(targetFolder, originalname);

  fs.rename(filePath, newFilePath, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error occurred while moving file');
      return;
    }

    // File upload successful
    res.send({status: 'File uploaded', path: `/images/${originalname}`});
  });
})

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/dist/index.html'));
});

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`React app listening at http://localhost:${port}`)
})