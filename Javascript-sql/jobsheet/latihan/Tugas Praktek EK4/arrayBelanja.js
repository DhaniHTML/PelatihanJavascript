let barang = [
    {nama:"New Balance NB530", harga:390000},
    {nama:"Nike Vomero 5", harga:350000},
    {nama:"Adidas Samba", harga:180000},
    {nama:"Onitsuka Tier Mexico", harga:420000},
]
let total = 0


console.log("===== Rincian Belanja sepatu ====")
for(i = 0; i < barang.length; i++){
    console.log(i+". "+barang[i].nama+" - Rp. "+barang[i].harga)
    total += barang[i].harga
    }

let setelahDiskon = total *0.85
let pembayaran = 1200000
let kembalian = pembayaran - setelahDiskon

console.log("")
console.log("Total Belanja = Rp. "+total)
console.log("Diskon = 15%")
console.log("Total Setelah Diskon = Rp. "+setelahDiskon)
console.log("Pembayaran - Rp. "+ pembayaran)
console.log("Kembalian = Rp. "+kembalian)
