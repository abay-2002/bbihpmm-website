import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/images/logo.png'

export default function FormRegister() {
   return (
      <>
         <div className="flex w-11/12 md:w-10/12 lg:w-11/12 xl:w-9/12 mx-auto my-10 rounded-2xl border" style={{ boxShadow: '1px 1px 30px 1px rgba(0, 0, 0, 0.419)' }}>
            <div className="w-1/2 hidden lg:flex min-h-full bg-sky-200/80 rounded-2xl overflow-hidden p-8">
               <div className='w-11/12 space-y-5 flex flex-col'>
                  <h1 className='font-bold text-lg'>Single Sign On</h1>
                  <p className='text-sm text-gray-500/90'>Hi, Insan Kemenperin, Sekarang akun-mu dapat digunakan untuk berbagai platform. Nikmati berbagai kemudahan akses platform dalam satu akun.</p>
                  <div className='space-y-1'>
                     <a href='#' className='flex gap-8 px-3 py-2 rounded-lg hover:bg-sky-100 hover:-translate-x-4 transition-all duration-300'>
                        <div className='w-[100px]'>
                           <img src={Logo} alt="" className='mx-auto' />
                        </div>
                        <div className='text-sm leading-4'>
                           <h1 className='font-bold'>SIL BBIHP</h1>
                           <p className='text-gray-500/90'>Platform Sistem Informasi Layanan</p>
                        </div>
                     </a>
                     <a href='#' className='flex gap-8 px-3 py-2 rounded-lg hover:bg-sky-100 hover:-translate-x-4 transition-all duration-300'>
                        <div className='w-[100px]'>
                           <img src='http://192.168.0.144:1001/assets/logo_bbihp-CKi818oC.png' alt="" className='w-[50px] mx-auto' />
                        </div>
                        <div className='text-sm leading-4'>
                           <h1 className='font-bold'>SIL BBIHP</h1>
                           <p className='text-gray-500/90'>Platform Sistem Informasi Layanan</p>
                        </div>
                     </a>
                     <a href='#' className='flex gap-8 px-3 py-2 rounded-lg hover:bg-sky-100 hover:-translate-x-4 transition-all duration-300'>
                        <div className='w-[100px]'>
                           <img src='https://bumninc.com/wp-content/uploads/2021/02/Pendaftaran-CPNS-Kemenperin.png' alt="" className='w-[70px] mx-auto' />
                        </div>
                        <div className='text-sm leading-4'>
                           <h1 className='font-bold'>SIL BBIHP</h1>
                           <p className='text-gray-500/90'>Platform Sistem Informasi Layanan</p>
                        </div>
                     </a>
                     <a href='#' className='flex gap-8 px-3 py-2 rounded-lg hover:bg-sky-100 hover:-translate-x-4 transition-all duration-300'>
                        <div className='w-[100px]'>
                           <img src={Logo} alt="" />
                        </div>
                        <div className='text-sm leading-4'>
                           <h1 className='font-bold'>SIL BBIHP</h1>
                           <p className='text-gray-500/90'>Platform Sistem Informasi Layanan</p>
                        </div>
                     </a>
                     <a href='#' className='flex gap-8 px-3 py-2 rounded-lg hover:bg-sky-100 hover:-translate-x-4 transition-all duration-300'>
                        <div className='w-[100px]'>
                           <img src={Logo} alt="" />
                        </div>
                        <div className='text-sm leading-4'>
                           <h1 className='font-bold'>SIL BBIHP</h1>
                           <p className='text-gray-500/90'>Platform Sistem Informasi Layanan</p>
                        </div>
                     </a>
                  </div>
               </div>
            </div>
            <div className="flex-1 flex flex-col h-full bg-slate-100 rounded-2xl lg:-ml-7 space-y-8 p-8">
               <div className='w-11/12 mx-auto'>
                  <div className='text-blue-600 flex items-center w-fit hover:underline mb-5'>
                     <Link to="/" className='flex items-center w-fit hover:underline font-medium'>
                        <FontAwesomeIcon icon={faAngleLeft} className='mr-2' />
                        Beranda
                     </Link>
                  </div>
                  <img src={Logo} alt="" className='w-[150px] mb-4' />
                  <h1 className='md:text-xl font-bold'>Registrasi Akun Web BBIHPMM</h1>
                  <h1 className='text-gray-500'>Hi, Selamat Datang <span className='text-blue-600 tracking-wider font-bold'>#InsanOke👍</span></h1>
               </div>
               <form action="" className="w-full">
                  <div className="flex-1 flex flex-col h-full items-center space-y-4">
                     <div className="w-11/12 text-sm space-y-4">
                        <div className="space-y-1">
                           <p className='font-medium tracking-wide'>Email <span className='text-red-600'>*</span></p>
                           <input type="text" placeholder='admin@admin.com' className="p-3 text-xs w-full rounded-lg bg-slate-200/50 border border-slate-300 focus:outline-blue-200" />
                           <p className='italic text-xs text-gray-400'>Masukkan email yang valid</p>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-4 md:gap-y-1">
                           <div className='col-span-2 md:col-span-1'>
                              <p className='font-medium tracking-wide'>Password <span className='text-red-600'>*</span></p>
                              <input type="password" placeholder='********' className="p-3 w-full text-xs rounded-lg bg-slate-200/50 border border-slate-300 focus:outline-blue-200" />
                           </div>
                           <div className='col-span-2 md:col-span-1'>
                              <p className='font-medium tracking-wide'>Konfirmasi Password <span className='text-red-600'>*</span></p>
                              <input type="password" placeholder='********' className="p-3 text-xs w-full rounded-lg bg-slate-200/50 border border-slate-300 focus:outline-blue-200" />
                           </div>
                           <p className='text-xs text-gray-400 italic col-span-2'>Minimal 8 Karakter kombinasi huruf kapital, huruf kecil, angka dan simbol.</p>
                        </div>
                        <div className='flex space-x-2 items-start font-medium'>
                           <input type="checkbox" id="remember" />
                           <p className='text-gray-600 items-start leading-4 text-justify'>Saya setuju dengan <a href='#' className='text-blue-600'> Syarat dan Ketentuan </a>dan <a href='#' className='text-blue-600'>Pemberitahuan Privasi </a>yang berlaku</p>
                        </div>
                     </div>
                     <button className="bg-blue-600 text-white font-medium p-3 rounded-full mb-2 w-11/12">Daftar</button>
                     <div className="w-11/12 flex justify-center text-sm">
                        <span className='text-gray-500'>Sudah Punya Akun? <Link to="/authentication/login" className='text-blue-700 font-medium underline'>Login</Link></span>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </>
   )
}
