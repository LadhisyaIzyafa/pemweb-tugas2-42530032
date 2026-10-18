const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const itemRoutes = require('./routes/item.routes');

// Path view dan folder public dikunci dengan path absolut
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Router
app.use('/', itemRoutes);

// Fallback 404
app.use((req, res) => {
  res.status(404).render('pages/notfound', {
    pageTitle: 'Halaman Tidak Ditemukan',
    pesan: 'Halaman yang kamu cari tidak ada.'
  });
});

app.listen(PORT, () => {
  console.log(`[SERVER] Aktif di http://localhost:${PORT}`);
});