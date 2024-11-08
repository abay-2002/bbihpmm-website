import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

import logoBBIHP from "../assets/images/logo@2x.png";
import logoKemenperinRI from "../assets/images/kementrian-perindustrian-logo.png";
import Sidenav from "./Sidenav";

export default function Navbar() {

    const navigate = useNavigate();

    const [isSidenavOpen, setIsSidenavOpen] = useState(false);

    const toggleSidenav = () => {
        setIsSidenavOpen(!isSidenavOpen);
    };

    const pathProfil = [
        {
            path: '/profil',
            name: 'Tentang BBIHPMM'
        },
        {
            path: '/profil/sejarah',
            name: 'Sejarah BBIHPMM'
        },
        {
            path: '/profil/visi-misi',
            name: 'Visi & Misi'
        },
        {
            path: '/profil/tugas-fungsi',
            name: 'Tugas Pokok & Fungsi'
        },
        {
            path: '/profil/motto',
            name: 'Motto BBIHPMM'
        },
        {
            path: '/profil/struktur-organisasi',
            name: 'Struktur Organisasi'
        },
        {
            path: '/profil/profil-pejabat',
            name: 'Profil Pejabat'
        },
        {
            path: '/profil/kebijakan-mutu',
            name: 'Kebijakan Mutu'
        },
    ]

    return (
        <>
            <nav className="sticky top-0 bg-white z-40">
                <div className="flex flex-row gap-4 items-center px-4 py-4 mx-auto max-w-6xl">
                    <button
                        onClick={toggleSidenav}
                        className="h-fit px-3 py-2 rounded-md md:hidden"
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <div className="flex flex-row gap-4 items-center">
                        <img
                            src={logoKemenperinRI}
                            className="h-12 w-auto hidden md:block cursor-pointer"
                            alt="Kemenperin RI logo"
                            onClick={() => navigate('/')}
                        />
                        <img
                            src={logoBBIHP}
                            className="h-14 w-auto cursor-pointer"
                            alt="BBIHP logo"
                            onClick={() => navigate('/')}
                        />
                    </div>
                </div>
                <div className="border-y-[1px] shadow-sm hidden md:flex md:px-28 relative items-center">
                    <ul className="flex flex-wrap justify-between items-center relative w-full max-w-6xl m-auto">

                        <li className="group relative font-semibold cursor-pointer text-sm text-gray-900 p-4">
                            Profil
                            <ul
                                className="hidden group-hover:block absolute top-[52px] w-64 flex-col border-t-0 border-[1px] rounded-b-md bg-white shadow-md"
                            >
                                {pathProfil.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <Link to={item.path} className="inline-block p-4 font-semibold cursor-pointer text-sm text-gray-900 hover:text-blue-600">
                                                {item.name}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                        <li className="group relative font-semibold cursor-pointer text-sm text-gray-900 p-4">
                            Informasi Publik
                            <ul
                                className="hidden group-hover:block absolute top-[52px] w-64 flex-col border-t-0 border-[1px] rounded-b-md bg-white shadow-md"
                            >
                                <li className="p-4 font-semibold cursor-pointer text-sm text-gray-900 hover:text-blue-600">
                                    PPID
                                </li>
                                <li className="p-4 font-semibold cursor-pointer text-sm text-gray-900 hover:text-blue-600">
                                    Tarif Layanan Jasa
                                </li>
                                <li className="p-4 font-semibold cursor-pointer text-sm text-gray-900 hover:text-blue-600">
                                    Kode Etik Pelayanan Publik
                                </li>
                            </ul>
                        </li>
                        <li className="group relative font-semibold cursor-pointer text-sm text-gray-900 p-4">
                            Layanan Publik
                            <ul
                                className="hidden group-hover:block absolute top-[52px] w-64 flex-col border-t-0 border-[1px] rounded-b-md bg-white shadow-md"
                            >
                                <li className="p-4 font-semibold cursor-pointer text-sm text-gray-900 hover:text-blue-600">
                                    Survey Indeks Kepuasan Rakyat
                                </li>
                                <li className="p-4 font-semibold cursor-pointer text-sm text-gray-900 hover:text-blue-600">
                                    Survey Indeks Persepsi Korupsi
                                </li>
                                <li className="p-4 font-semibold cursor-pointer text-sm text-gray-900 hover:text-blue-600">
                                    Laporan Periodik Unit Pelayanan Publik
                                </li>
                                <li className="p-4 font-semibold cursor-pointer text-sm text-gray-900 hover:text-blue-600">
                                    Simulasi Tarif Pengujian
                                </li>
                                <li className="p-4 font-semibold cursor-pointer text-sm text-gray-900 hover:text-blue-600">
                                    Tracking Order
                                </li>
                                <li className="p-4 font-semibold cursor-pointer text-sm text-gray-900 hover:text-blue-600">
                                    Pengaduan Pelanggan
                                </li>
                            </ul>
                        </li>
                        <li className="group relative font-semibold cursor-pointer text-sm text-gray-900 p-4">
                            Layanan Jasa
                            <ul
                                className="hidden group-hover:block absolute top-[52px] w-64 flex-col border-t-0 border-[1px] rounded-b-md bg-white shadow-md"
                            >
                                <li className="p-4 font-semibold cursor-pointer text-sm text-gray-900 hover:text-blue-600">
                                    Industri Hijau
                                </li>
                                <li className="p-4 font-semibold cursor-pointer text-sm text-gray-900 hover:text-blue-600">
                                    Inkubator Bisnis Teknologi
                                </li>
                                <li className="p-4 font-semibold cursor-pointer text-sm text-gray-900 hover:text-blue-600">
                                    Optimalisasi Pemanfaatan Teknologi & Digitalisasi
                                </li>
                                <li className="p-4 font-semibold cursor-pointer text-sm text-gray-900 hover:text-blue-600">
                                    Pelatihan Teknis Industri & Peningkatan SDM
                                </li>
                                <li className="p-4 font-semibold cursor-pointer text-sm text-gray-900 hover:text-blue-600">
                                    Verifikasi TKDN
                                </li>
                                <li className="p-4 font-semibold cursor-pointer text-sm text-gray-900 hover:text-blue-600">
                                    Lembaga Sertifikasi Profesi
                                </li>
                                <li className="p-4 font-semibold cursor-pointer text-sm text-gray-900 hover:text-blue-600">
                                    Pengujian Produk
                                </li>
                                <li className="p-4 font-semibold cursor-pointer text-sm text-gray-900 hover:text-blue-600">
                                    Kalibrasi Alat
                                </li>
                                <li className="p-4 font-semibold cursor-pointer text-sm text-gray-900 hover:text-blue-600">
                                    Sertifikasi
                                </li>
                                <li className="p-4 font-semibold cursor-pointer text-sm text-gray-900 hover:text-blue-600">
                                    Inspeksi Teknis
                                </li>
                                <li
                                    data-dropdown-toggle="layananHalalDropdown"
                                    data-dropdown-placement="right-start"
                                    data-dropdown-trigger="hover"
                                    className="relative p-4 font-semibold cursor-pointer text-sm text-gray-900 hover:text-blue-600"
                                >
                                    Layanan Halal
                                    <ul
                                        id="layananHalalDropdown"
                                        className="hidden w-64 absolute flex-col border-[1px] rounded-md border-gray-200 bg-white"
                                    >
                                        <li className="p-4 text-sm font-semibold cursor-pointer hover:text-blue-600">
                                            Lembaga Pemeriksaan Halal
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="group relative font-semibold cursor-pointer text-sm text-gray-900 p-4">
                            Berita
                        </li>
                        <li className="group relative font-semibold cursor-pointer text-sm text-gray-900 p-4">
                            Kontak BBIHPMM
                        </li>
                    </ul>
                    <div className="flex-1 absolute right-0 px-4">
                        <Link to="/authentication/login" className="font-medium text-blue-600 hover:underline">Login</Link>
                    </div>
                </div>
            </nav>
            <Sidenav isOpen={isSidenavOpen} onClose={() => setIsSidenavOpen(false)} />
        </>
    );
}
