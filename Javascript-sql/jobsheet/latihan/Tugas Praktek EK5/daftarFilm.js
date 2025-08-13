const fs = require("fs")

let data = fs.readFileSync("film.json", "utf8")
let filmArray = JSON.parse(data)


const filePath = "film.json";
let daftar = [];

// Cek apakah file sudah ada
if (fs.existsSync(filePath)) {
  const content = fs.readFileSync(filePath, "utf8");
  daftar = JSON.parse(content);
}

// Data siswa baru
let filmBaru1 = {
  nama: "Agak Laen (2024)",
  genre: "Horror, Komedi",
};

let filmBaru2 = {
  nama: "Habibie & Ainun (2012)",
  genre: "Drama, Romantis",
};

let filmBaru3 = {
  nama: "Dilan 1990 (2018)",
  genre: "Romantis",
};

// Tambahkan ke array
daftar.push(filmBaru1);
daftar.push(filmBaru2);
daftar.push(filmBaru3);

// Simpan kembali ke file
fs.writeFileSync(filePath, JSON.stringify(daftar, null, 2));

console.log("Daftar Film: ")
filmArray.forEach((film,i) => {
    console.log(`${i + 1}. Nama : ${film.nama}`)
})