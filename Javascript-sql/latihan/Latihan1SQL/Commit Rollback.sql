use pegawai;

-- COMMIT - tidak bisa rollback
START TRANSACTION;
insert into hobi (id, nama_hobi)
values (5, 'Bersepeda');
commit;
rollback;

select * from hobi;

-- Tanpa Commit
start transaction;
insert into hobi (id, nama_hobi)
values (0, 'Menulis');
rollback;
