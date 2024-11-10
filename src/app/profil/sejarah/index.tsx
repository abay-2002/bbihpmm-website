import SejarahCard from "../../../components/SejarahCard";
import gedung1947 from "../../../assets/gedung/1947.jpg";
import gedung1951 from "../../../assets/gedung/1951.jpg";
import gedung1961 from "../../../assets/gedung/1961.jpg";
import gedung1980 from "../../../assets/gedung/1980.jpg";
import gedung2002 from "../../../assets/gedung/2002.jpg";
import gedung2004 from "../../../assets/gedung/2004.jpg";
import gedung2006 from "../../../assets/gedung/2006.jpg";
import gedung2022 from "../../../assets/gedung/2022.jpg";
import history from "../../../assets/icon/history.png";

export default function index() {
    return (
        
    <div className="flex flex-wrap w-full h-full bg-slate-50 place-content-center place-items-center">

            <div className="flex flex-col  w-full items-center">

                <div className="flex flex-col w-full items-center shadow-md p-20">
                    <p className="flex flex-wrap bg-blue-500 w-1/6 gap-3 p-2 rounded-full text-center text-white"> 
                        <img className=" ms-6 w-5 items-center" src={history} alt=""/>
                        Sejarah
                    </p>
                    <h1 className="font-bold text-5xl text-center text-blue-600 mt-5">Sejarah BBIHPMM</h1>
                    <p className="text-xl mt-5 font-light text-center">Transformasi Perjalanan Balai Besar Standardisasi dan Pelayanan Jasa Industri, Hasil Perkebunan, Mineral Logam, dan Maritim</p>
                </div>

                <div className="flex flex-wrap w-full h-1/2 p-20 gap-10 sm:align-middle">

                        <SejarahCard
                        title="1947"
                        desc="Balai Besar Standardisasi dan Pelayanan Jasa Industri Hasil Perkebunan, Mineral Logam, dan Maritim (BBSPJIHPMM) didirikan pada tahun 1947 dengan nama “Laboratorium Voor Scheikunding Onderzoek” sebagai cabang dari Laboratorium Pusat Bogor"
                        image={gedung1947}
                        />
                        
                        <SejarahCard
                        title="1951"
                        desc="Pada tahun 1951 perubahan nama institusi kemudian diubah menjadi “Balai Penyelidikan Kimia Makassar filial Bogor" 
                        image={gedung1951}
                        />

                        <SejarahCard
                        title="1961"
                        desc="Pada tahun 1961 terhitung 1 dekade dari perubahan di tahun 1951 institusi ini mengalami perubahan nama instansi menjadi “Balai Penelitian Kimia”"
                        image={gedung1961}
                        />

                        <SejarahCard
                        title="1980"
                        desc="Pada tahun 1980 institusi ini direorganisasi, dan sejak saat itu namanya menjadi “Balai Penelitian dan Pengembangan Industri Ujung Pandang yang lebih dikenal dengan Balai Industri Ujung Pandang (BIUP)"
                        image={gedung1980}
                        />

                        <SejarahCard
                        title="2002"
                        desc="Selanjutnya, tahun 2002 berubah menjadi Balai Riset dan Standardisasi Industri dan Perdagangan Makassar (Baristand Indag Makassar)"
                        image={gedung2002}
                        />

                        <SejarahCard
                        title="2004"
                        desc="Pada tahun 2004 saat Departemen Perindustrian dan Perdagangan dipecah menjadi dua yaitu Departemen Perindustrian dan Departemen Perdagangan, kembali berganti nama menjadi <b>Baristand Industri Makassar"
                        image={gedung2004}
                        />

                        <SejarahCard
                        title="2006"
                        desc="Pada Tahun 2006 Nama Institusi diubah menjadi “Balai Besar Industri Hasil Perkebunan” (BBIHP)"
                        image={gedung2006}
                        />

                        <SejarahCard
                        title="2022"
                        desc="Pada Tahun 2022 Nama Institusi diubah menjadi “Balai Besar Standardisasi dan Pelayanan Jasa Industri Hasil Perkebunan, Mineral Logam, dan Maritim” (BBIHPMM)"
                        image={gedung2022}
                        />

                </div>
            </div>
            
    </div>

    )
}