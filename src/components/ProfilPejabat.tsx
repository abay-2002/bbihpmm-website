import rahmank from '../assets/images/pejabat/rk.png'
import erwin from '../assets/images/pejabat/erwin.png'
import idham from '../assets/images/pejabat/idham.png'
import hari from '../assets/images/pejabat/hari.png'
import mamang from '../assets/images/pejabat/mamang.png'
import shinta from '../assets/images/pejabat/shinta.png'
import ainun from '../assets/images/pejabat/ainun.png'
import yulis from '../assets/images/pejabat/yulis.png'
import asma from '../assets/images/pejabat/asma.png'

export default function ProfilPejabat() {
   return (
      <div className="bg-slate-50 max-w-full px-4 mb-16">
         <div className="px-7 py-5 h-72 flex flex-wrap gap-4 justify-center">

            <div className="w-2/3 group relative overflow-hidden rounded-lg transform transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-lg gap-4 flex flex-wrap justify-center p-4">
               <div className="w-auto rounded-b-lg px-1 py-auto content-center">
                  <h1 className="text-center text-black font-bold">Dr. Shinta Virdhian, S.T., MS.C</h1>
                  <h1 className="text-center text-black font-light">Kepala BBSPJIHPMM</h1>
               </div>
               <div className="h-48 overflow-hidden flex justify-center">
                  <img src={shinta} alt="" className="max-w-md rounded-t-lg h-48" />
               </div>
               {/* Hover effect */}
               <div className="absolute inset-0 bg-slate-50 bg-opacity-95 flex flex-col justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out p-9">
                  <h1 className="text-blue-950 font-bold text-2xl leading-7">Dr. Shinta Virdhian, S.T., MS.C</h1>
                  <p className="text-blue-600 font-semibold">Kepala BBSPJIHPMM</p>
                  <p className="text-slate-500 font-normal  text-sm">Jl. Perintis Kemerdekaan No. 28 A Kota Makassar</p>
                  <button className="bg-slate-200 px-4 py-1 text-lg text-blue-950 font-semibold rounded-full hover:text-white hover:bg-blue-950 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2">Lihat Lebih Detail</button>
               </div>
            </div>

         </div>

         <div className="bg-slate-50 mx-auto px-7 py-2 w-[95%] flex flex-wrap gap-7 justify-center">
            <div className="w-96 group relative overflow-hidden rounded-lg transform transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-lg">
               <div className="w-auto h-48 overflow-hidden flex justify-center">
                  <img src={rahmank} alt="" className="max-w-md rounded-t-lg h-48" />
               </div>
               <div className="shadow-md w-auto rounded-b-lg px-1 py-auto content-center">
                  <h1 className="text-center text-black font-bold">Abdul Rahman, S.Kom</h1>
                  <h1 className="text-center text-black font-light">Kepala Bagian Tata Usaha</h1>
               </div>
               {/* Hover effect */}
               <div className="absolute inset-0 bg-slate-50 bg-opacity-95 flex flex-col justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out p-9">
                  <h1 className="text-blue-950 font-bold text-2xl leading-7">Abdul Rahman, S.Kom</h1>
                  <p className="text-blue-600 font-semibold">Kepala Bagian Tata Usaha</p>
                  <p className="text-slate-500 font-normal  text-sm">Jl. Perintis Kemerdekaan No. 28 A Kota Makassar</p>
                  <button className="bg-slate-200 px-4 py-1 text-lg text-blue-950 font-semibold rounded-full hover:text-white hover:bg-blue-950 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2">Lihat Lebih Detail</button>
               </div>
            </div>

            <div className="w-96 group relative overflow-hidden rounded-lg transform transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-lg">
               <div className="w-auto h-48 overflow-hidden flex justify-center">
                  <img src={ainun} alt="" className="max-w-md rounded-t-lg h-48" />
               </div>
               <div className="shadow-md w-auto rounded-b-lg px-1 py-auto content-center">
                  <h1 className="text-center text-black font-bold">Ainun Berliani, S.Sos., M.I.Kom</h1>
                  <h1 className="text-center text-black font-light">Ketua Tim Kemitraan</h1>
               </div>
               {/* Hover effect */}
               <div className="absolute inset-0 bg-slate-50 bg-opacity-95 flex flex-col justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out p-9">
                  <h1 className="text-blue-950 font-bold text-2xl leading-7">Ainun Berliani, S.Sos., M.I.Kom</h1>
                  <p className="text-blue-600 font-semibold">Ketua Tim Kemitraan</p>
                  <p className="text-slate-500 font-normal  text-sm">Jl. Perintis Kemerdekaan No. 28 A Kota Makassar</p>
                  <button className="bg-slate-200 px-4 py-1 text-lg text-blue-950 font-semibold rounded-full hover:text-white hover:bg-blue-950 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2">Lihat Lebih Detail</button>
               </div>
            </div>

            <div className="w-96 group relative overflow-hidden rounded-lg transform transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-lg">
               <div className="w-auto h-48 overflow-hidden flex justify-center">
                  <img src={idham} alt="" className="max-w-md rounded-t-lg h-48" />
               </div>
               <div className="shadow-md w-auto rounded-b-lg px-1 py-auto content-center">
                  <h1 className="text-center text-black font-bold">Drs. Muh. Idham, M.M</h1>
                  <h1 className="text-center text-black font-light">Ketua Tim Promosi dan Kerjasama</h1>
               </div>
               {/* Hover effect */}
               <div className="absolute inset-0 bg-slate-50 bg-opacity-95 flex flex-col justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out p-9">
                  <h1 className="text-blue-950 font-bold text-2xl leading-7">Drs. Muh. Idham, M.M</h1>
                  <p className="text-blue-600 font-semibold">Ketua Tim Promosi dan Kerjasama</p>
                  <p className="text-slate-500 font-normal  text-sm">Jl. Perintis Kemerdekaan No. 28 A Kota Makassar</p>
                  <button className="bg-slate-200 px-4 py-1 text-lg text-blue-950 font-semibold rounded-full hover:text-white hover:bg-blue-950 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2">Lihat Lebih Detail</button>
               </div>
            </div>

            <div className="w-96 group relative overflow-hidden rounded-lg transform transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-lg">
               <div className="w-auto h-48 overflow-hidden flex justify-center">
                  <img src={erwin} alt="" className="max-w-md rounded-t-lg h-48" />
               </div>
               <div className="shadow-md w-auto rounded-b-lg px-1 py-auto content-center">
                  <h1 className="text-center text-black font-bold">Erwin Adinata, M.Si</h1>
                  <h1 className="text-center text-black font-light">Ketua Tim Data dan Informasi</h1>
               </div>
               {/* Hover effect */}
               <div className="absolute inset-0 bg-slate-50 bg-opacity-95 flex flex-col justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out p-9">
                  <h1 className="text-blue-950 font-bold text-2xl leading-7">Erwin Adinata, M.Si</h1>
                  <p className="text-blue-600 font-semibold">Ketua Tim Data dan Informasi</p>
                  <p className="text-slate-500 font-normal  text-sm">Jl. Perintis Kemerdekaan No. 28 A Kota Makassar</p>
                  <button className="bg-slate-200 px-4 py-1 text-lg text-blue-950 font-semibold rounded-full hover:text-white hover:bg-blue-950 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2">Lihat Lebih Detail</button>
               </div>
            </div>

            <div className="w-96 group relative overflow-hidden rounded-lg transform transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-lg">
               <div className="w-auto h-48 overflow-hidden flex justify-center">
                  <img src={mamang} alt="" className="max-w-md rounded-t-lg h-48" />
               </div>
               <div className="shadow-md w-auto rounded-b-lg px-1 py-auto content-center">
                  <h1 className="text-center text-black font-bold">Mamang,S.TP., M.Si</h1>
                  <h1 className="text-center text-black font-light">Ketua Tim Pengujian, Kalibrasi, dan Verifikasi</h1>
               </div>
               {/* Hover effect */}
               <div className="absolute inset-0 bg-slate-50 bg-opacity-95 flex flex-col justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out p-9">
                  <h1 className="text-blue-950 font-bold text-2xl leading-7">Mamang,S.TP., M.Si</h1>
                  <p className="text-blue-600 font-semibold">Ketua Tim Pengujian, Kalibrasi, dan Verifikasi</p>
                  <p className="text-slate-500 font-normal  text-sm">Jl. Perintis Kemerdekaan No. 28 A Kota Makassar</p>
                  <button className="bg-slate-200 px-4 py-1 text-lg text-blue-950 font-semibold rounded-full hover:text-white hover:bg-blue-950 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2">Lihat Lebih Detail</button>
               </div>
            </div>

            <div className="w-96 group relative overflow-hidden rounded-lg transform transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-lg">
               <div className="w-auto h-48 overflow-hidden flex justify-center">
                  <img src={hari} alt="" className="max-w-md rounded-t-lg h-48" />
               </div>
               <div className="shadow-md w-auto rounded-b-lg px-1 py-auto content-center">
                  <h1 className="text-center text-black font-bold">Hari Purwanto, M.Si</h1>
                  <h1 className="text-center text-black font-light">Ketua Tim Sertifikasi</h1>
               </div>
               {/* Hover effect */}
               <div className="absolute inset-0 bg-slate-50 bg-opacity-95 flex flex-col justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out p-9">
                  <h1 className="text-blue-950 font-bold text-2xl leading-7">Hari Purwanto, M.Si</h1>
                  <p className="text-blue-600 font-semibold">Ketua Tim Sertifikasi</p>
                  <p className="text-slate-500 font-normal  text-sm">Jl. Perintis Kemerdekaan No. 28 A Kota Makassar</p>
                  <button className="bg-slate-200 px-4 py-1 text-lg text-blue-950 font-semibold rounded-full hover:text-white hover:bg-blue-950 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2">Lihat Lebih Detail</button>
               </div>
            </div>

            <div className="w-96 group relative overflow-hidden rounded-lg transform transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-lg">
               <div className="w-auto h-48 overflow-hidden flex justify-center">
                  <img src={asma} alt="" className="max-w-md rounded-t-lg h-48" />
               </div>
               <div className="shadow-md w-auto rounded-b-lg px-1 py-auto content-center">
                  <h1 className="text-center text-black font-bold">Dr. Asma Assa, M.Si</h1>
                  <h1 className="text-center text-black font-light">Ketua Tim Optimalisasi Pemanfaatan Teknologi Industri</h1>
               </div>
               {/* Hover effect */}
               <div className="absolute inset-0 bg-slate-50 bg-opacity-95 flex flex-col justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out p-9">
                  <h1 className="text-blue-950 font-bold text-2xl leading-7">Dr. Asma Assa, M.Si</h1>
                  <p className="text-blue-600 font-semibold">Ketua Tim Optimalisasi Pemanfaatan Teknologi Industri</p>
                  <p className="text-slate-500 font-normal  text-sm">Jl. Perintis Kemerdekaan No. 28 A Kota Makassar</p>
                  <button className="bg-slate-200 px-4 py-1 text-lg text-blue-950 font-semibold rounded-full hover:text-white hover:bg-blue-950 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2">Lihat Lebih Detail</button>
               </div>
            </div>

            <div className="w-96 group relative overflow-hidden rounded-lg transform transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-lg">
               <div className="w-auto h-48 overflow-hidden flex justify-center">
                  <img src={yulis} alt="" className="max-w-md rounded-t-lg h-48" />
               </div>
               <div className="shadow-md w-auto rounded-b-lg px-1 py-auto content-center">
                  <h1 className="text-center text-black font-bold">Yulismulianti, M.Si</h1>
                  <h1 className="text-center text-black font-light">Ketua Tim Halal</h1>
               </div>
               {/* Hover effect */}
               <div className="absolute inset-0 bg-slate-50 bg-opacity-95 flex flex-col justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out p-9">
                  <h1 className="text-blue-950 font-bold text-2xl leading-7">Yulismulianti, M.Si</h1>
                  <p className="text-blue-600 font-semibold">Ketua Tim Halal</p>
                  <p className="text-slate-500 font-normal  text-sm">Jl. Perintis Kemerdekaan No. 28 A Kota Makassar</p>
                  <button className="bg-slate-200 px-4 py-1 text-lg text-blue-950 font-semibold rounded-full hover:text-white hover:bg-blue-950 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2">Lihat Lebih Detail</button>
               </div>
            </div>

         </div>
      </div>
   )
}