interface SejarahCardProps {
    title: string,
    desc: string,
    image: string,
}

export default function SejarahCard({ title, desc,image }: SejarahCardProps) {
  return (
    <div className="relative items-center md:flex md:flex-row md:ps-5 sm:border-s-2  sm:ps-5 md:border-gray-300">
        <div className=" md:ps-5 sm:ps-8">
            <h1> Tahun
                <p className="font-bold text-4xl text-blue-600">{title}</p>
            </h1>
        </div>

        <div className="flex flex-col md:ps-10 mt-4">

            <div className="flex flex-wrap lg:flex-row md:ps-5 md:text-start sm:flex-col sm:text-center gap-y-5 md:gap-2 shadow-md sm:p-10 md:p-10 rounded-lg justify-start leading-8">
                <img className="md:w-40 sm:w-full sm:items-center" src={image} alt="" />

                {desc}
                
            </div>
        </div>
    </div>
  );
}
