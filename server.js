
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import cors from 'cors';
import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
const s3 = new aws.S3();
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'cyclic-calm-gold-lizard-wig-us-west-1',
    acl: 'public-read', // Set the appropriate ACL for your use case
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + '-' + file.originalname);
    },
  }),
})

// import fs from 'fs';


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

app.post('/upload-image', upload.single('image'), async (req, res, next) => {

  if (!req.file) {
    res.status(400).send('No file uploaded');
    return;
  }
  // Access the uploaded file via req.file
  const { originalname, path: filePath } = req.file;

  // await s3.putObject({
  //   Body: JSON.stringify(req.body),
  //   Bucket: process.env.CYCLIC_BUCKET_NAME,
  //   Key: filename,
  // }).promise()

  // res.set('Content-type', 'text/plain')
  res.send({status: 'File uploaded', path: `cyclic-calm-gold-lizard-wig-us-west-1/${originalname}`}).end()

  // // Move the uploaded file to the desired folder (e.g., "public/images")
  // const targetFolder = path.join(__dirname, 'public', 'images');
  // const newFilePath = path.join(targetFolder, originalname);

  // fs.rename(filePath, newFilePath, (err) => {
  //   if (err) {
  //     console.error(err);
  //     res.status(500).send('Error occurred while moving file');
  //     return;
  //   }

  //   // File upload successful
  //   res.send({status: 'File uploaded', path: `/images/${originalname}`});
  // });
})

// app.post('/upload-image', async (req,res) => {
//   let filename = req.path.slice(1)

//   console.log(typeof req.body)

//   await s3.putObject({
//     Body: JSON.stringify(req.body),
//     Bucket: process.env.BUCKET,
//     Key: filename,
//   }).promise()

//   res.set('Content-type', 'text/plain')
//   res.send('ok').end()
// })

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/dist/index.html'));
});

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`React app listening at http://localhost:${port}`)
})