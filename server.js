
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import cors from 'cors';

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

app.get('/jwt', cors(), async (req, res) => {
  try {
    const decoded = jwt.verify(req.query.tkn, process.env.JWT_SECRET)    
    res.send(decoded)  
  } catch (error) {
    console.log(error)
  }
})

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/dist/index.html'));
});

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`React app listening at http://localhost:${port}`)
})