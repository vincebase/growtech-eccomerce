import MyMap from './mapFrame'


const ContactMap = () => {
  return (
  
        <div className="col-12 col-md-7 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <MyMap/>
                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                        <p className="mt-1">L-5 Belfast, Novaliches, Quezon City, 1118 Metro Manila</p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                        <a className="text-green-500 leading-relaxed">example@email.com</a>
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                        <p className="leading-relaxed">123-456-7890</p>
                        </div>
                    </div>
                    </div>
    
  )
}

export default ContactMap
