use sekolah;

DELIMITER $$
CREATE PROCEDURE sp_cari_agama(
	IN m_nama_agama varchar(11)
    )
BEGIN
	SELECT nama, jumlah
    FROM vw_jml_agama_siswa
    WHERE Nama = m_nama_agama;
END $$
DELIMITER ;