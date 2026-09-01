const express = require('express');
const path = require('path');
const app = express()

const PORT = 3000;
//configurar ejs
app.set('view engine', 'ejs');



//archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));


//rutas
app.get('/', (req, res) => {
  res.render('index');
})

app.get('/servicios', (req, res) => {
  res.render('servicios');
})

app.get('/nosotros', (req, res) => {
  res.render('nosotros');
})
app.get('/contacto', (req, res) => {
  res.render('contacto');
})

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:3000')
})