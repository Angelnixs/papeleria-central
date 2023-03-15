
import express from 'express'
import path from 'path'

const app = express()

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

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`React app listening at http://localhost:${port}`)
})