// Luas Persegi
function hitungLuas(sisi){
    return sisi * sisi;
}

function tampilkanPersegi(sisi) {
    console.log(">> Luas Bangun Datar <<")
    console.log("Luas persegi dengan sisi",sisi + " adalah ",hitungLuas(sisi))
}

tampilkanPersegi(8);

// Luas Persegi Panjang
function luasPersegiPanjang(panjang, lebar){
    let luasPersegiPanjang = panjang * lebar
    console.log("Luas persegi panjang dengan panjang",panjang+" Dan lebar",lebar+" adalah",luasPersegiPanjang)
}

luasPersegiPanjang(9, 3)

// Luas Lingkaran
function luasLingkaran(p, r){
    let luasLingkaran = p*r*r
    console.log("Luas lingkaran dengan Jari - jari ",r+" Adalah", luasLingkaran)
}

luasLingkaran(3.14, 6)

// Luas Segitiga
function luasSegitiga(a, t){
    let luasSegitiga = 1/2*a*t
    console.log("Luas segitiga dengan alas", a+" Dan tinggi",t+" Adalah", luasSegitiga)
}

luasSegitiga(6, 4)

// Keliling persegi
function kelilingPersegi(s){
    let kelilingPersegi = 4*s
    console.log("")
    console.log(">> Keliling Bangun Datar <<")
    console.log("keliling persegi dengan sisi", s+" Adalah", kelilingPersegi)
}

kelilingPersegi(8)

// Keliling Persegi Panjang
function kelilingPersegiPanjang(pp, lp){
    let pptambahlp = pp+lp
    let kelilingPersegiPanjang = 2*pptambahlp
    console.log("Keliling Persegi Panjang dengan panjang", pp+" dan Lebar", lp+" Adalah", kelilingPersegiPanjang)
}

kelilingPersegiPanjang(9, 3)

// Keliling lingkaran
function kelilingLingkaran(p, j){
    let kelilingLingkaran = 2*p*j
    console.log("Keliling lingkaran dengan jari - jari", j+" Adalah", kelilingLingkaran)
}

kelilingLingkaran(3.14, 6)

// keliling Segitiga
function kelilingSegitiga(s){
    let kelilingSegitiga = s + s + s
    console.log("Keliling Segitiga dengan sisi", s+" Adalah ",kelilingSegitiga)
}

kelilingSegitiga(6)