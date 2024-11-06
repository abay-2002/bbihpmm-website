import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faXmark } from "@fortawesome/free-solid-svg-icons";
import { initFlowbite } from "flowbite";

import logoBBIHP from "../assets/images/logo@2x.png";

type SidenavProps = {
    isOpen: boolean
    onClose: () => void
}

export default function Sidenav({ isOpen, onClose  }: SidenavProps) {

    useEffect(() => {
        initFlowbite();
    });

    return (
        <aside className="z-50">
            <div 
                className={`fixed h-screen overflow-y-scroll w-full bg-gray-900 transition duration-200 md:hidden ${isOpen ? 'opacity-50 z-40 top-0 left-0' : 'opacity-0 -z-10 top-0 left-0'}`}
                onClick={onClose}
            ></div>
            <div className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} transition duration-200 flex flex-col gap-8 p-4 h-screen w-80 fixed top-0 left-0 z-50 border-r-[1px] bg-white border-gray-200 md:hidden`}>
                <div className="flex justify-between items-center border-b-[1px] border-gray-200 pb-4">
                    <img src={logoBBIHP} className="h-14 w-auto" alt="BBIHP logo" />
                    <button 
                        onClick={onClose} 
                        className="h-fit px-3 py-2 rounded-md"
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <ul className="flex flex-col justify-between gap-4 overflow-y-scroll">
                    <li>
                        <button 
                            type="button" 
                            className="flex items-center p-2 w-full text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 font-semibold cursor-pointer text-sm" 
                            aria-controls="dropdown-profil" 
                            data-collapse-toggle="dropdown-profil"
                        >
                            <span className="flex-1 text-left whitespace-nowrap">Profil</span>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                        <ul id="dropdown-profil" className="hidden py-2">
                            <li className="p-4 font-semibold cursor-pointer text-sm text-gray-900 hover:text-blue-600">
                                Tentang BBIHPMM
                            </li>
                            <li className="p-4 font-semibold cursor-pointer text-sm text-gray-900 hover:text-blue-600">
                                Sejarah BBIHPMM
                            </li>
                            <li className="p-4 font-semibold cursor-pointer text-sm text-gray-900 hover:text-blue-600">
                                Visi & Misi untuk masa depan
                            </li>
                            <li className="p-4 font-semibold cursor-pointer text-sm text-gray-900 hover:text-blue-600">
                                Tugas Pokok & Fungsi
                            </li>
                            <li className="p-4 font-semibold cursor-pointer text-sm text-gray-900 hover:text-blue-600">
                                Motto
                            </li>
                            <li className="p-4 font-semibold cursor-pointer text-sm text-gray-900 hover:text-blue-600">
                                Struktur Organisasi
                            </li>
                            <li className="p-4 font-semibold cursor-pointer text-sm text-gray-900 hover:text-blue-600">
                                Profil Pejabat
                            </li>
                            <li className="p-4 font-semibold cursor-pointer text-sm text-gray-900 hover:text-blue-600">
                                Kebijakan Mutu
                            </li>
                        </ul>
                    </li>                  
                    <li>
                        <button 
                            type="button" 
                            className="flex items-center p-2 w-full text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 font-semibold cursor-pointer text-sm" 
                            aria-controls="dropdown-informasi-publik" 
                            data-collapse-toggle="dropdown-informasi-publik"
                        >
                            <span className="flex-1 text-left whitespace-nowrap">Informasi Publik</span>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                        <ul id="dropdown-informasi-publik" className="hidden py-2">
                            <li className="p-4 font-semibold cursor-pointer text-sm text-gray-900 hover:text-blue-600">
                                PPID
                            </li>
                            <li className="p-4 font-semibold cursor-pointer text-sm text-gray-900 hover:text-blue-600">
                                Tarif Layanan Publik
                            </li>
                            <li className="p-4 font-semibold cursor-pointer text-sm text-gray-900 hover:text-blue-600">
                                Kode Etik Pelayanan Publik
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button 
                            type="button" 
                            className="flex items-center p-2 w-full text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 font-semibold cursor-pointer text-sm" 
                            aria-controls="dropdown-layanan-publik" 
                            data-collapse-toggle="dropdown-layanan-publik"
                        >
                            <span className="flex-1 text-left whitespace-nowrap">Layanan Publik</span>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                        <ul id="dropdown-layanan-publik" className="hidden py-2">
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
                    <li>
                        <button 
                            type="button" 
                            className="flex items-center p-2 w-full text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 font-semibold cursor-pointer text-sm" 
                            aria-controls="dropdown-layanan-jasa" 
                            data-collapse-toggle="dropdown-layanan-jasa"
                        >
                            <span className="flex-1 text-left whitespace-nowrap">Layanan Jasa</span>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                        <ul id="dropdown-layanan-jasa" className="hidden py-2">
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
                            <li className="p-4 font-semibold cursor-pointer text-sm text-gray-900 hover:text-blue-600">
                                <button 
                                    type="button" 
                                    className="flex items-center p-2 w-full text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 font-semibold cursor-pointer text-sm" 
                                    aria-controls="dropdown-layanan-halal" 
                                    data-collapse-toggle="dropdown-layanan-halal"
                                >
                                    <span className="flex-1 text-left whitespace-nowrap">
                                        Layanan Halal
                                    </span>
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </button>
                                <ul id="dropdown-layanan-halal" className="hidden py-2">
                                    <li className="p-4 font-semibold cursor-pointer text-sm text-gray-900 hover:text-blue-600">
                                        Lembaga Pemeriksaan Halal
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button 
                            type="button" 
                            className="flex items-center p-2 w-full text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 font-semibold cursor-pointer text-sm" 
                        >
                            <span className="flex-1 text-left whitespace-nowrap">Berita</span>
                        </button>
                    </li>
                    <li>
                        <button 
                            type="button" 
                            className="flex items-center p-2 w-full text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 font-semibold cursor-pointer text-sm" 
                        >
                            <span className="flex-1 text-left whitespace-nowrap">Kontak</span>
                        </button>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
