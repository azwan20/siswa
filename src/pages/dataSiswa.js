import Navbar from "./navbar";

export default function DataSiswa() {
    return (
        <>
            <div className="home">
                <Navbar />
                <div className="halLog">
                    <div className="dataSiswa">
                        <section className="navbar">
                            <button>Edit</button>
                            <button>Cetak</button>
                        </section>
                        <hr />
                        <section className="d-flex">
                            <span>
                                <p>Foto</p>
                            </span>
                            <span>
                                <p>Nama Lengkap</p>
                                <input type="text" />
                                <p>Jenis Kelamin</p>
                                <select>
                                    <option>Laki laki</option>
                                    <option>Perempuan</option>
                                </select>
                                <p>Status</p>
                                <input type="text" />
                            </span>
                            <span>
                                <p>Tempat Lahir</p>
                                <input type="text" />
                                <p>Tanggal Lahir</p>
                                <input type="date" />
                            </span>
                            <span>
                                <p>Kewarganegaraan</p>
                                <input type="text" />
                                <p>Agama</p>
                                <input type="text" />
                            </span>
                        </section>
                        <hr />
                    </div>
                </div>
            </div>
        </>
    )
}