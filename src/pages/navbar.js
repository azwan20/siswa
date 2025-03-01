import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid d-flex justify-content-between">
                    <Link class="navbar-brand ps-5 text-uppercase" href="/form">TK Tunas Talenta Tanjung Tobaku</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end pe-5" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" href="/form">Pendaftaran Siswa Baru</Link>
                            </li>
                            <li>
                                <Link class="nav-link active" aria-current="page" href="/dataSiswa">Edit Data</Link>
                            </li>
                            <li>
                                <Link class="nav-link bg-danger rounded" aria-current="page" href="/">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}