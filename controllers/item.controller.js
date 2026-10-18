const films = require('../data/films');

// Halaman daftar + filter lewat query parameter (?genre=action)
exports.getDaftar = (req, res) => {
  const genreDipilih = req.query.genre; // dibaca dari req.query
  let hasil = films;

  if (typeof genreDipilih === 'string' && genreDipilih !== '') {
    hasil = films.filter(f => f.genre.toLowerCase() === genreDipilih.toLowerCase());
  }

  // Daftar genre unik untuk tombol filter
  const daftarGenre = [...new Set(films.map(f => f.genre))];

  res.render('pages/katalog', {
    pageTitle: 'Disha\'s Cozy Corner',
    films: hasil,
    daftarGenre: daftarGenre,
    genreDipilih: typeof genreDipilih === 'string' ? genreDipilih : ''
  });
};

// Halaman detail lewat route parameter (/item/:id)
exports.getDetail = (req, res) => {
  const id = Number(req.params.id); // dibaca dari req.params
  const film = films.find(f => f.id === id);

  if (!film) {
    return res.status(404).render('pages/notfound', {
      pageTitle: 'Data Tidak Ditemukan',
      pesan: 'Film dengan ID tersebut tidak ditemukan.'
    });
  }

  res.render('pages/detail', {
    pageTitle: film.judul,
    film: film
  });
};