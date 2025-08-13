let daftarBelanja = ["Sayur", "Telur", "Buah"]
daftarBelanja.push("Beras", "Minyak", "Gula",)
let index = daftarBelanja.indexOf("Minyak")

if(index !== 4){
    daftarBelanja.splice(index,1)
}

daftarBelanja.sort()
console.log("Daftar Belanja Ibu Lily :")

for(i = 0; i < daftarBelanja.length; i++){
    console.log(i+1+". "+daftarBelanja[i])
}
