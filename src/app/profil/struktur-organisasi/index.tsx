import CardStrukturOrganisasi from "../../../components/CardStrukturOrganisasi"

export default function index() {
   return (
      <>
         <div className="w-full">
            <h1 className="font-bold text-center text-xl my-10">STRUKTUR ORGANISASI BBIHPMM</h1>
            <div className="w-fit bg-gray-50 border border-gray-200 shadow-md rounded-xl my-10 overflow-x-scroll">
               <div className="w-full p-1 md:p-2 lg:p-4 xl:p-8 mx-auto">
                  <CardStrukturOrganisasi
                     isVisible={false}
                     tim="Kepala Balai"
                     url="https://img.freepik.com/free-vector/muslim-girl-safari-outfit-cartoon-character-sticker_1308-80004.jpg?t=st=1730963645~exp=1730967245~hmac=3f66c4da8e9742027e8ed13cfeed3d33cff029175279f5c954d55709ddbf620b&w=740" />
                  <div className="flex justify-center">
                     <div className="flex w-72 h-36 relative translate-x-36">
                        <div className="flex w-1 h-full bg-black absolute top-0 left-0"></div>
                        <div className="flex w-36 h-1 bg-black absolute top-1/2 left-0"></div>
                        <div className="absolute right-0">
                           <CardStrukturOrganisasi
                              isVisible={false}
                              tim="Kepala Bagian Tata Usaha"
                              url="https://static.vecteezy.com/system/resources/thumbnails/040/502/197/small_2x/3d-avatar-character-illustration-male-lawyer-png.png" />
                        </div>
                     </div>
                  </div>
                  {/* <CardStrukturOrganisasi /> */}
                  <div className="flex w-fit p-2 border rounded-lg bg-slate-100 mx-auto shadow-md hover:border-gray-300 hover:rotate-12 transition-all duration-300">
                     <h1>Kelompok Jabatan Fungsional</h1>
                  </div>
                  <div className="flex h-16 w-full mx-auto">
                     <div className="w-full flex items-center justify-center relative">
                        <div className="flex h-full w-1 bg-black"></div>
                        <div className="absolute bottom-0 h-1 bg-black w-[1000px]"></div>
                     </div>
                  </div>
                  <div className="flex gap-5 items-center justify-center">
                     <CardStrukturOrganisasi
                        tim="OPTKPT"
                        url="https://img.freepik.com/premium-vector/girl-wearing-hijab-fashion_62106-145.jpg?w=740" />

                     <CardStrukturOrganisasi
                        tim="Standardisasi dan Sertifikasi"
                        url="https://img.freepik.com/premium-vector/portrait-chinese-handsome-boy_684058-2109.jpg?w=740" />

                     <CardStrukturOrganisasi
                        tim="Verifikasi dan Validasi"
                        url="https://cdn3d.iconscout.com/3d/premium/thumb/woman-with-hijab-3d-icon-download-in-png-blend-fbx-gltf-file-formats--wanita-jilbab-girl-stylized-avatar-pack-people-icons-5823040.png?f=webp" />

                     <CardStrukturOrganisasi
                        tim="Inspeksi, Pengujian, dan Kalibrasi"
                        url="https://img.freepik.com/premium-vector/portrait-male-student-with-glasses-suit_684058-916.jpg" />

                     <CardStrukturOrganisasi
                        tim="Pengembangan Jasa Industri"
                        url="https://thumbs.dreamstime.com/z/vector-cartoon-business-avatar-blond-hair-young-man-suit-glasses-male-character-portrait-132341708.jpg" />

                     <CardStrukturOrganisasi
                        tim="Kemitraan Layanan Industri"
                        url="https://img.freepik.com/premium-vector/muslim-womans-character-is-cheerful-with-simple-flat-design-style_995281-5010.jpg" />

                     <CardStrukturOrganisasi
                        tim="Analisa Data dan Informasi"
                        url="https://img.freepik.com/premium-photo/icon-button-man_665280-69545.jpg?w=740" />
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
