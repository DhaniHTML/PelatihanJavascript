function bagiAngka(a, b) {
    try {
        if (b === 0) {
            throw new Error("Tidak bisa membagi dengan nol");
        }
        let hasil = a / b;
        console.log("Hasil pembagian :", hasil);
    } catch (error) {
        if (error.message === "Tidak bisa membagi dengan nol") {
            console.log("Error: " + error.message);
        } else {
            console.log("Terjadi kesalahan lain: " + error.message);
        }
    }
}

let angka1 = 10;
let angka2 = 0;

try {
    // Ganti angka2 jadi angka22 untuk contoh kasus error variabel tidak dikenali
    bagiAngka(angka1, angka2);
} catch (error) {
    console.log("Error: Variabel tidak dikenali");
}

console.log("Program selesai.");