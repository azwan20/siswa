import Navbar from "./navbar";
import { db } from "../../public/firebaseConfig";
import { getDocs, collection, updateDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

async function fetchDataFromFirestore() {
    const querySnapshot = await getDocs(collection(db, "data_siswa"));
    const data = [];
    querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
    });
    return data;
}

export default function DataSiswa() {
    const router = useRouter();
    const { id } = router.query;
    const [dataSurat, setDataSurat] = useState([]);
    const [selectedNama, setSelectedNama] = useState('');
    const [isEditMode, setIsEditMode] = useState(false);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        async function fetchData() {
            const data = await fetchDataFromFirestore();
            setDataSurat(data);
        }
        fetchData();
    }, []);

    // const handleNamaChange = (event) => {
    //     setSelectedNama(event.target.value);
    // };

    const selectedItem = dataSurat.find(item => item.nama_lengkap === selectedNama);

    const handleNamaChange = (event) => {
        const selectedName = event.target.value;
        setSelectedNama(selectedName);
        const selectedItem = dataSurat.find(item => item.nama_lengkap === selectedName);
        setFormData(selectedItem || {});
    };

    const handleEditClick = () => {
        setIsEditMode(true);
        alert("Edit bisa dilakukan, Silakan mengisi kolom yang ingin di Edit");
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSaveClick = async () => {
        if (formData.id) {
            const docRef = doc(db, "data_siswa", formData.id);
            await updateDoc(docRef, formData);
            setIsEditMode(false);
            const updatedData = await fetchDataFromFirestore();
            setDataSurat(updatedData);
        }
        alert("Data berhasil di Update");
    };

    const handleDetailTransaksi = (id) => {
        router.push(`/print/${id}`);
    };


    return (
        <>
            <div className="home">
                <Navbar />
                <div className="halLog">
                    <div className="dataSiswa">
                        <section className="navbar align-items-center">
                            <button onClick={handleEditClick}>Edit</button>
                            <select
                                style={{ width: '20%', margin: 'auto' }}
                                value={selectedNama}
                                onChange={handleNamaChange}
                            >
                                <option value="">Pilih Nama</option>
                                {dataSurat.map((item, index) => (
                                    <option key={index} value={item.nama_lengkap}>{item.nama_lengkap}</option>
                                ))}
                            </select>
                            {isEditMode ? (
                                <button onClick={handleSaveClick}>Simpan</button>
                            ) : (
                                    <button className="buatSurat" onClick={() => handleDetailTransaksi(formData.id)}>Cetak</button>
                            )}
                        </section>
                        <hr />
                        {selectedItem ? (
                            <section className="d-flex flex-column">
                                <h5>IDENTITAS</h5>
                                <section className="d-flex mb-5">
                                    <span>
                                        <p>Nama Lengkap</p>
                                        <input
                                            type="text"
                                            name="nama_lengkap"
                                            value={formData.nama_lengkap || ''}
                                            onChange={handleInputChange}
                                            readOnly={!isEditMode}
                                        />
                                        <p>Jenis Kelamin</p>
                                        <select
                                            name="jenis_kelamin"
                                            value={formData.jenis_kelamin || ''}
                                            onChange={handleInputChange}
                                            disabled={!isEditMode}
                                        >
                                            <option value="Laki laki">Laki laki</option>
                                            <option value="Perempuan">Perempuan</option>
                                        </select>
                                        <p>NIK</p>
                                        <input
                                            type="text"
                                            name="nik"
                                            value={formData.nik || ''}
                                            onChange={handleInputChange}
                                            readOnly={!isEditMode}
                                        />
                                    </span>
                                    <span>
                                        <p>Tempat Lahir</p>
                                        <input
                                            type="text"
                                            name="tempat_lahir"
                                            value={formData.tempat_lahir || ''}
                                            onChange={handleInputChange}
                                            readOnly={!isEditMode}
                                        />
                                        <p>Tanggal Lahir</p>
                                        <input
                                            type="date"
                                            name="tanggal_lahir"
                                            value={formData.tanggal_lahir || ''}
                                            onChange={handleInputChange}
                                            readOnly={!isEditMode}
                                        />
                                        <p>Agama</p>
                                        <input
                                            type="text"
                                            name="agama"
                                            value={formData.agama || ''}
                                            onChange={handleInputChange}
                                            readOnly={!isEditMode}
                                        />
                                    </span>
                                    <span>
                                        <p>Kewarganegaraan</p>
                                        <input
                                            type="text"
                                            name="kewarganegaraan"
                                            value={formData.kewarganegaraan || ''}
                                            onChange={handleInputChange}
                                            readOnly={!isEditMode}
                                        />
                                        <p>Alamat</p>
                                        <input
                                            type="text"
                                            name="alamat"
                                            value={formData.alamat || ''}
                                            onChange={handleInputChange}
                                            readOnly={!isEditMode}
                                        />
                                        <p>Tinggal Bersama</p>
                                        <input
                                            type="text"
                                            name="tinggal_bersama"
                                            value={formData.tinggal_bersama || ''}
                                            onChange={handleInputChange}
                                            readOnly={!isEditMode}
                                        />
                                    </span>
                                    <span>
                                        <p>Anak Ke</p>
                                        <input
                                            type="text"
                                            name="anakKe"
                                            value={formData.anakKe || ''}
                                            onChange={handleInputChange}
                                            readOnly={!isEditMode}
                                        />
                                        <p>Usia</p>
                                        <input
                                            type="text"
                                            name="usia"
                                            value={formData.usia || ''}
                                            onChange={handleInputChange}
                                            readOnly={!isEditMode}
                                        />
                                        <p>NO HP</p>
                                        <input
                                            type="text"
                                            name="no_hp"
                                            value={formData.no_hp || ''}
                                            onChange={handleInputChange}
                                            readOnly={!isEditMode}
                                        />
                                    </span>
                                </section>

                                <h5>ORANG TUA</h5>
                                <section className="d-flex mb-5">
                                    <span>
                                        <b>Ayah</b>
                                        <p>Nama Ayah</p>
                                        <input
                                            type="text"
                                            name="nama_ayah"
                                            value={formData.nama_ayah || ''}
                                            onChange={handleInputChange}
                                            readOnly={!isEditMode}
                                        />
                                        <p>NIK</p>
                                        <input
                                            type="text"
                                            name="nik_ayah"
                                            value={formData.nik_ayah || ''}
                                            onChange={handleInputChange}
                                            readOnly={!isEditMode}
                                        />
                                        <p>Tahun Lahir</p>
                                        <input
                                            type="text"
                                            name="tahun_lahir"
                                            value={formData.tahun_lahir || ''}
                                            onChange={handleInputChange}
                                            readOnly={!isEditMode}
                                        />
                                    </span>
                                    <span>
                                        <b className="invisible">coba</b>
                                        <p>Pendidikan</p>
                                        <input
                                            type="text"
                                            name="pendidikan"
                                            value={formData.pendidikan || ''}
                                            onChange={handleInputChange}
                                            readOnly={!isEditMode}
                                        />
                                        <p>Pekerjaan</p>
                                        <input
                                            type="text"
                                            name="pekerjaan"
                                            value={formData.pekerjaan || ''}
                                            onChange={handleInputChange}
                                            readOnly={!isEditMode}
                                        />
                                    </span>
                                    <span>
                                        <b>Ibu</b>
                                        <p>Nama Ibu</p>
                                        <input
                                            type="text"
                                            name="nama_ibu"
                                            value={formData.nama_ibu || ''}
                                            onChange={handleInputChange}
                                            readOnly={!isEditMode}
                                        />
                                        <p>NIK</p>
                                        <input
                                            type="text"
                                            name="nik_ibu"
                                            value={formData.nik_ibu || ''}
                                            onChange={handleInputChange}
                                            readOnly={!isEditMode}
                                        />
                                        <p>Tahun Lahir</p>
                                        <input
                                            type="text"
                                            name="tahun_lahir_ibu"
                                            value={formData.tahun_lahir_ibu || ''}
                                            onChange={handleInputChange}
                                            readOnly={!isEditMode}
                                        />
                                    </span>
                                    <span>
                                        <b className="invisible">coba</b>
                                        <p>Pendidikan</p>
                                        <input
                                            type="text"
                                            name="pendidikan_ibu"
                                            value={formData.pendidikan_ibu || ''}
                                            onChange={handleInputChange}
                                            readOnly={!isEditMode}
                                        />
                                        <p>Pekerjaan</p>
                                        <input
                                            type="text"
                                            name="pekerjaan_ibu"
                                            value={formData.pekerjaan_ibu || ''}
                                            onChange={handleInputChange}
                                            readOnly={!isEditMode}
                                        />
                                    </span>
                                </section>
                                <h5>PERIODIK</h5>
                                <section className="d-flex mb-5">
                                    <span>
                                        <p>Tinggi Badan</p>
                                        <input
                                            type="text"
                                            name="tb"
                                            value={formData.tb || ''}
                                            onChange={handleInputChange}
                                            readOnly={!isEditMode}
                                        />
                                    </span>
                                    <span>
                                        <p>Berat Badan</p>
                                        <input
                                            type="text"
                                            name="bb"
                                            value={formData.bb || ''}
                                            onChange={handleInputChange}
                                            readOnly={!isEditMode}
                                        />
                                    </span>
                                    <span>
                                        <p>Jarak Tempuh</p>
                                        <input
                                            type="text"
                                            name="jarak_tempuh"
                                            value={formData.jarak_tempuh || ''}
                                            onChange={handleInputChange}
                                            readOnly={!isEditMode}
                                        />
                                    </span>
                                    <span>
                                        <p>Jumlah Saudara</p>
                                        <input
                                            type="text"
                                            name="saudara"
                                            value={formData.saudara || ''}
                                            onChange={handleInputChange}
                                            readOnly={!isEditMode}
                                        />
                                    </span>
                                </section>
                                <h5>REGISTRASI</h5>
                                <section className="d-flex mb-5">
                                    <span>
                                        <p>Jenis Pendaftaran</p>
                                        <input
                                            type="text"
                                            name="jenis_pendaftaran"
                                            value={formData.jenis_pendaftaran || ''}
                                            onChange={handleInputChange}
                                            readOnly={!isEditMode}
                                        />
                                    </span>
                                    <span>
                                        <p>Tanggal Masuk Sekolah</p>
                                        <input
                                            type="date"
                                            name="tanggal_masuk"
                                            value={formData.tanggal_masuk || ''}
                                            onChange={handleInputChange}
                                            readOnly={!isEditMode}
                                        />
                                    </span>
                                    <span>
                                        <p>No Induk Siswa</p>
                                        <input
                                            type="text"
                                            name="nis"
                                            value={formData.nis || ''}
                                            onChange={handleInputChange}
                                            readOnly={!isEditMode}
                                        />
                                    </span>
                                    <span>
                                        <p>Masuk rombel</p>
                                        <input
                                            type="text"
                                            name="rombel"
                                            value={formData.rombel || ''}
                                            onChange={handleInputChange}
                                            readOnly={!isEditMode}
                                        />
                                    </span>
                                </section>
                            </section>
                        ) : (
                            <div className="text-center">
                            <h5>Selamat datang pada halaman data siswa</h5>
                            <p>Silakan pilih nama untuk melihat detailnya</p>
                            </div>
                        )}
                        <hr />
                    </div>
                </div>
            </div>
        </>
    );
}
