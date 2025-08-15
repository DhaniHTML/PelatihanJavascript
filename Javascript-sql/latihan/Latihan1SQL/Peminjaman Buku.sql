create database latihan_1;

use latihan_1;

create table buku (
Kode_Buku char(4) primary key,
Judul_Buku varchar(30) not null,
Pengarang varchar(20) not null,
Penerbit varchar(20) not null);

create table pengembalian (
Kode_Pinjam char(4),
Kode_Buku varchar(4),
Tgl_Kembali date not null,
Denda numeric(9,0) not null,
primary key(kode_pinjam,kode_buku),
foreign key(kode_pinjam)references peminjaman(kode_pinjam),
foreign key(kode_buku)references buku(kode_buku));

create table Peminjaman (
Kode_Pinjam char(4) primary key,
NIK char(18),
NIM char(8),
Tgl_Pinjam date not null,
foreign key(nik)references karyawan(nik),
foreign key(nim)references mahasiswa(nim));

create table mahasiswa (
NIM char(8) primary key,
Nama_Mhs varchar(30),
Alamat_Mhs varchar(30) not null,
NoHP_Mhs varchar(15) not null);

create table karyawan (
NIK char(18) primary key,
Nama_Karyawan varchar(30) not null,
Alamat_Karyawan varchar(30) not null,
NoHP_Karyawan varchar(15) not null,
Jabatan varchar(25) not null);
