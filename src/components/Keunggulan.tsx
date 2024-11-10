import character from "../assets/character/character.svg"
import innovation from "../assets/icon/inovation.png"
import sarpras from "../assets/icon/sarpras.png"
import support from "../assets/icon/support.png"
import wbbm from "../assets/icon/wbbm.png"
import KeunggulanCard from "./KeunggulanCard"

function Keunggulan() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 items-center  bg-slate-200w-full h-auto p-10 md:p-5'>
            
            <div className='flex flex-col sm:ps-10 '>

                <div className="flex flex-col">
                    <h1 className='flex flex-row bg-gray-100 p-2 rounded-md font-medium mb-5 md:justify-start sm:justify-center'>Keunggulan Kami</h1>
                    <h1 className='flex font-bold text-4xl mb-5 md:justify-start sm:justify-center'>Solusi Untuk Industri</h1>
                    <p className='md:justify-start sm:justify-center'> <b>Balai Besar Standardisasi dan Pelayanan Jasa Industri Hasil Perkebunan, Mineral Logam, dan Maritim</b> menyediakan berbagai solusi untuk pertumbuhan dan pengembangan industri.</p>
                </div>

                <div className='pt-5 lg:w-full md:h-1/2'>

                    <KeunggulanCard
                    title="Menuju WBBM"
                    desc="BBIHPMM telah mendapatkan predikat WBK (Wilayah Bebas Korupsi) pada tahun 2018. Sekarang sedang mempersiapkan diri menuju WBBM (Wilayah Birokrasi Bersih Melayani)"
                    icon={wbbm}
                    />

                    <KeunggulanCard
                    title="Dukungan Terbaik"
                    desc="Menerapkan prinsip-prinsip Pelayanan Prima"
                    icon={support}
                    />

                    <KeunggulanCard
                    title="Budaya Inovasi"
                    desc="Setiap insan BBIHPMM selalu dituntut untuk memberikan inovasi-inovasi terbaru dalam memberikan pelayanan"
                    icon={innovation}
                    />

                    <KeunggulanCard
                    title="Sarana Prasana"
                    desc="Memiliki sarana dan prasarana yang sangat baik untuk menunjang semua aktivitas yang dilakukan"
                    icon={sarpras}
                    />

                </div>

            </div>

            <div className='flex flex-wrap place-content-end ms-10 self-end'>
                <img className='relative sm:pt-10 md:flex-col p-10 ' src={character} alt="character" />
            </div>

        </div>
    )
}

export default Keunggulan