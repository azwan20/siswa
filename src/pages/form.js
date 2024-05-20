import Navbar from "./navbar";
import { db } from "../../public/firebaseConfig";
import { getDocs, getDoc, collection, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

async function addDataToFirebase(nama_lengkap, jenis_kelamin, nik, tempat_lahir, tanggal_lahir, agama, kewarganegaraan, alamat, tinggalBersama, anakKe, usia, no_hp, nama_ayah,
    nik_ayah, tahun_lahir, pendidikan, pekerjaan, nama_ibu, nik_ibu, tahun_lahir_ibu, pendidikan_ibu, pekerjaan_ibu, tb, bb, jarak_tempuh, saudara, jenis_pendaftaran, tanggal_masuk, nis, rombel,
) {
    console.log("state 1")
    try {
        const docRefSurat = await addDoc(collection(db, "data_siswa"), {
            nama_lengkap: nama_lengkap,
            jenis_kelamin: jenis_kelamin,
            nik: nik,
            tempat_lahir: tempat_lahir,
            tanggal_lahir: tanggal_lahir,
            agama: agama,
            kewarganegaraan: kewarganegaraan,
            alamat: alamat,
            tinggalBersama: tinggalBersama,
            anakKe: anakKe,
            usia: usia,
            no_hp: no_hp,
            nama_ayah: nama_ayah,
            nik_ayah: nik_ayah,
            tahun_lahir: tahun_lahir,
            pendidikan: pendidikan,
            pekerjaan: pekerjaan,
            nama_ibu: nama_ibu,
            nik_ibu: nik_ibu,
            tahun_lahir_ibu: tahun_lahir_ibu,
            pendidikan_ibu: pendidikan_ibu,
            pekerjaan_ibu: pekerjaan_ibu,
            tb: tb,
            bb: bb,
            jarak_tempuh: jarak_tempuh,
            saudara: saudara,
            jenis_pendaftaran: jenis_pendaftaran,
            tanggal_masuk: tanggal_masuk,
            nis: nis,
            rombel: rombel,
        })
        console.log("Document input document ID : ", docRefSurat.id);
        return true;

    } catch (error) {
        console.error("error input document", error);
        return false;
    }
}


export default function Form() {
    //identitas
    const [nama_lengkap, setNama_lengkap] = useState("");
    const [jenis_kelamin, setJenis_kelamin] = useState("");
    const [nik, setNik] = useState("");
    const [tempat_lahir, setTempat_lahir] = useState("");
    const [tanggal_lahir, setTanggal_lahir] = useState("");
    const [agama, setAgama] = useState("");
    const [kewarganegaraan, setKewarganegaraan] = useState("");
    const [alamat, setAlamat] = useState("");
    const [tinggalBersama, setTinggalBersama] = useState("");
    const [anakKe, setAnakKe] = useState("");
    const [usia, setUsia] = useState("");
    const [no_hp, setNo_hp] = useState("");
    //ayah
    const [nama_ayah, setNama_ayah] = useState("");
    const [nik_ayah, setNik_ayah] = useState("");
    const [tahun_lahir, setTahun_lahir] = useState("");
    const [pendidikan, setPendidikan] = useState("");
    const [pekerjaan, setPekerjaan] = useState("");
    //ibu
    const [nama_ibu, setNama_ibu] = useState("");
    const [nik_ibu, setNik_ibu] = useState("");
    const [tahun_lahir_ibu, setTahun_lahir_ibu] = useState("");
    const [pendidikan_ibu, setPendidikan_ibu] = useState("");
    const [pekerjaan_ibu, setPekerjaan_ibu] = useState("");
    //periodik
    const [tb, setTb] = useState("");
    const [bb, setBb] = useState("");
    const [jarak_tempuh, setJarak_tempuh] = useState("");
    const [saudara, setSaudara] = useState("");
    //register
    const [jenis_pendaftaran, setJenis_pendaftaran] = useState("");
    const [tanggal_masuk, setTanggal_masuk] = useState("");
    const [nis, setNis] = useState("");
    const [rombel, setRombel] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        const added = await addDataToFirebase(nama_lengkap, jenis_kelamin, nik, tempat_lahir, tanggal_lahir, agama, kewarganegaraan, alamat, tinggalBersama, anakKe, usia, no_hp, nama_ayah,
            nik_ayah, tahun_lahir, pendidikan, pekerjaan, nama_ibu, nik_ibu, tahun_lahir_ibu, pendidikan_ibu, pekerjaan_ibu, tb, bb, jarak_tempuh, saudara, jenis_pendaftaran, tanggal_masuk, nis, rombel,
        );
        if (added) {
            setNama_lengkap("");
            setJenis_kelamin("");
            setNik("");
            setTempat_lahir("");
            setTanggal_lahir("");
            setAgama("");
            setKewarganegaraan("");
            setAlamat("");
            setTinggalBersama("");
            setAnakKe("");
            setUsia("");
            setNo_hp("");
            setNama_ayah("");
            setNik_ayah("");
            setTahun_lahir("");
            setPendidikan("");
            setPekerjaan("");
            setNama_ibu("");
            setNik_ibu("");
            setPekerjaan_ibu("");
            setPekerjaan_ibu("");
            setTb("");
            setBb("");
            setJarak_tempuh("");
            setSaudara("");
            setJenis_pendaftaran("");
            setTanggal_masuk("");
            setNis("");
            setRombel("");

            alert("Data berhasil di upload");
        } else {
            alert("Data tidak berhasil di upload");
        }
    }

    return (
        <>
            <div className="home">
                <Navbar />
                <div className="halLog">
                    <div className="formulir">
                        <h1 className="text-center mb-5 mt-3 pb-3">Penerimaan Peserta Didik Baru (PPDB)</h1>
                        <form onSubmit={handleSubmit} method="post" action="">
                            <section>
                                <h3>IDENTITAS</h3>
                                <p>Nama Lengkap</p>
                                <input type="text" onChange={(e) => setNama_lengkap(e.target.value)} />
                                <p>Jenis Kelamin</p>
                                <select onChange={(e) => setJenis_kelamin(e.target.value)}>
                                    <option>Pilih</option>
                                    <option value="Laki-laki">Laki-laki</option>
                                    <option value="Perempuan">Perempuan</option>
                                </select>
                                <p>NIK</p>
                                <input type="text" onChange={(e) => setNik(e.target.value)} />
                                <p>Tempat Lahir</p>
                                <input type="text" onChange={(e) => setTempat_lahir(e.target.value)} />
                                <p>Tanggal Lahir</p>
                                <input type="date" onChange={(e) => setTanggal_lahir(e.target.value)} />
                                <p>Agama</p>
                                <select onChange={(e) => setAgama(e.target.value)}>
                                    <option>Pilih</option>
                                    <option value="Islam">Islam</option>
                                    <option value="Kristen">Kristen</option>
                                    <option value="Katolik">Katolik</option>
                                    <option value="Hindu">Hindu</option>
                                    <option value="Buddha">Buddha</option>
                                    <option value="Khonghucu">Khonghucu</option>
                                </select>
                                <p>Kewarganegaraan</p>
                                <input type="text" onChange={(e) => setKewarganegaraan(e.target.value)} />
                                <p>Alamat Lengkap</p>
                                <input type="text" onChange={(e) => setAlamat(e.target.value)} />
                                <p>Tinggi Bersama</p>
                                <input type="text" onChange={(e) => setTinggalBersama(e.target.value)} />
                                <p>Anak Ke</p>
                                <input type="text" onChange={(e) => setAnakKe(e.target.value)} />
                                <p>Usia</p>
                                <input type="text" onChange={(e) => setUsia(e.target.value)} />
                                <p>NO HP</p>
                                <input type="text" onChange={(e) => setNo_hp(e.target.value)} />
                            </section>
                            <section className="mb-5">
                                <h3>ORANG TUA</h3>
                                <h5>Ayah</h5>
                                <p>Nama Ayah</p>
                                <input type="text" onChange={(e) => setNama_ayah(e.target.value)} />
                                <p>NIK</p>
                                <input type="text" onChange={(e) => setNik_ayah(e.target.value)} />
                                <p>Tahun Lahir</p>
                                <input type="text" onChange={(e) => setTahun_lahir(e.target.value)} />
                                <p>Pendidikan</p>
                                <select onChange={(e) => setPendidikan(e.target.value)}>
                                    <option>Pilih</option>
                                    <option value="SD/sederajat">SD/sederajat</option>
                                    <option value="SMP/sederajat">SMP/sederajat</option>
                                    <option value="SMA/sederajat">SMA/sederajat</option>
                                    <option value="S1/sederajat">S1/sederajat</option>
                                    <option value="S2/sederajat">S2/sederajat</option>
                                    <option value="S3/sederajat">S3/sederajat</option>
                                    <option value="Tidak Sekolah">Tidak Sekolah</option>
                                </select>
                                <p>Pekerjaan</p>
                                <input type="text" onChange={(e) => setPekerjaan(e.target.value)} />
                                <h5 className="mt-3">Ibu</h5>
                                <p>Nama Ibu</p>
                                <input type="text" onChange={(e) => setNama_ibu(e.target.value)} />
                                <p>NIK</p>
                                <input type="text" onChange={(e) => setNik_ibu(e.target.value)} />
                                <p>Tahun Lahir</p>
                                <input type="text" onChange={(e) => setTahun_lahir_ibu(e.target.value)} />
                                <p>Pendidikan</p>
                                <select onChange={(e) => setPendidikan_ibu(e.target.value)}>
                                    <option>Pilih</option>
                                    <option value="SD/sederajat">SD/sederajat</option>
                                    <option value="SMP/sederajat">SMP/sederajat</option>
                                    <option value="SMA/sederajat">SMA/sederajat</option>
                                    <option value="S1/sederajat">S1/sederajat</option>
                                    <option value="S2/sederajat">S2/sederajat</option>
                                    <option value="S3/sederajat">S3/sederajat</option>
                                    <option value="Tidak Sekolah">Tidak Sekolah</option>
                                </select>
                                <p>Pekerjaan</p>
                                <input type="text" onChange={(e) => setPekerjaan_ibu(e.target.value)} />
                            </section>
                            <section className="mb-5">
                                <h3>PERIODIK</h3>
                                <p>Tinggi Badan</p>
                                <input type="text" onChange={(e) => setTb(e.target.value)} />
                                <p>Berat Badan</p>
                                <input type="text" onChange={(e) => setBb(e.target.value)} />
                                <p>Jarak Tempuh</p>
                                <input type="text" onChange={(e) => setJarak_tempuh(e.target.value)} />
                                <p>Jumlah Saudara</p>
                                <input type="text" onChange={(e) => setSaudara(e.target.value)} />
                            </section>
                            <section className="mb-3">
                                <h3>REGISTRASI</h3>
                                <p>Jenis Pendaftaran</p>
                                <select onChange={(e) => setJenis_pendaftaran(e.target.value)}>
                                    <option>Pilih</option>
                                    <option value="Siswa Baru">Siswa Baru</option>
                                    <option value="Pindahan">Pindahan</option>
                                    <option value="Sekolah Lagi">Sekolah Lagi</option>
                                </select>
                                <p>Tanggal Masuk Sekolah</p>
                                <input type="date" onChange={(e) => setTanggal_masuk(e.target.value)} />
                                <p>No Induk Siswa</p>
                                <input type="text" onChange={(e) => setNis(e.target.value)} />
                                <p>Masuk Romberl</p>
                                <select onChange={(e) => setRombel(e.target.value)}>
                                    <option>Pilih</option>
                                    <option value="4-5 tahun">4-5 tahun</option>
                                    <option value="5-6 tahun">5-6 tahun</option>
                                </select>
                            </section>
                            <section className="d-flex justify-content-around">
                                <button className="bg-danger">Batal</button>
                                <button type="submit">Submit</button>
                            </section>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}