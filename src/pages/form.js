import Navbar from "./navbar";

export default function Form() {
    return (
        <>
            <div className="home">
                <Navbar />
                <div className="halLog">
                    <div className="formulir">
                        <section className="mb-5">
                            <h3>Registrasi Peserta Didik</h3>
                            <p>Jenis Pendaftaran</p>
                            <select>
                                <option>Baru</option>
                                <option></option>
                                <option></option>
                            </select>
                            <p>Jalur Pendaftaran</p>
                            <select>
                                <option>Umum</option>
                                <option></option>
                                <option></option>
                            </select>
                            <p>Nama Sekolah Asal</p>
                            <input type="text" />
                            <p>Alamat Sekolah Asal</p>
                            <input type="text" />
                            <p>Apakah Pernah PAUD</p>
                            <select>
                                <option>Pernah</option>
                                <option>Tidak Pernah</option>
                            </select>
                            <p>Apakah Pernah TK</p>
                            <select>
                                <option>Pernah</option>
                                <option>Tidak Pernah</option>
                            </select>
                            <p>Hobi</p>
                            <input type="text" />
                            <p>Cita Cita</p>
                            <input type="text" />
                        </section>
                        <section>
                            <h3>Data Pribadi</h3>
                            <p>Nama Lengkap</p>
                            <input type="text" />
                            <p>Jenis Kelamin</p>
                            <select>
                                <option>Laki-laki</option>
                                <option>Perempuan</option>
                            </select>
                            <p>NISN</p>
                            <input type="text" />
                            <p>NIK</p>
                            <input type="text" />
                            <p>Tempat Lahir</p>
                            <input type="text" />
                            <p>Tanggal Lahir</p>
                            <input type="date" />
                            <p>Agama</p>
                            <input type="text" />
                            <p>Kebutuhan Khusus</p>
                            <input type="text" />
                        </section>
                        <section className="d-flex justify-content-around">
                            <button className="bg-danger">Batal</button>
                            <button>Submit</button>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}