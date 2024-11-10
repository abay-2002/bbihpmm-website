interface KeunggulanCardProps {
    title: string,
    desc: string,
    icon: string,

};
function KeunggulanCard({title, desc, icon}: KeunggulanCardProps) {
  return (
    
    <div className='pt-5 lg:w-full md:h-1/2'>
    
        <div className='flex flex-row items-center bg-slate-50 p-5 rounded-xl shadow-lg mb-2 space-x-4'>
            <img className='w-10 h-10' src={icon} alt="Icon WBBM" />

            <div className="flex flex-col">
                <h1 className='font-bold'>{title}</h1>
                <span>{desc}</span>
            </div>
        </div>
    
    </div>
  )
}

export default KeunggulanCard