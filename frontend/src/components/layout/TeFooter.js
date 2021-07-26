import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Fragment>
            <footer className="footer nav-bg  relative pt-1 border-b-2 border-blue-700">
                <div className="container mx-auto px-6 text-center lg:text-left">

                    <div className="sm:flex sm:mt-8 md:flex-col">
                        <div className="flex flex-wrap overflow-hidden lg:-mx-8 xl:-mx-3">
                            <div className=" text-grey-600 flex flex-col my-4 px-4 w-full overflow-hidden sm:w-1/3 md:w-1/2 lg:my-8 lg:px-8 lg:w-1/5 xl:my-3 xl:px-3 xl:w-1/2">
                             <a
                            className="text-sm font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase"
                            href="#pablo"
                            >
                            <Link to="/">
                            <img src="/images/GrowTechFarms.svg" alt="logo"
                            width="300"
                            height="200" />
                        </Link>
            </a>
                                <p className="">GrowTech Farms - Neopolitan Business Park, Lot 11 Block 2, Novaliches, Quezon City, Metro Manila </p>
                            </div>


                            <div className="flex flex-col my-3 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:my-8 lg:px-8 lg:w-1/3 xl:my-3 xl:px-3 xl:w-1/2">
                                <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">Follow us</span>
                                <span className="my-2"><Link to="#" className="text-blue-700 text-md hover:text-blue-500">link 1</Link></span>
                                <span className="my-2"><Link to="#" className="text-blue-700  text-md hover:text-blue-500">link 1</Link></span>
                                <span className="my-2"><Link href="#" className="text-blue-700 text-md hover:text-blue-500">link 1</Link></span>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-6">
                    <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
                        <div className="sm:w-2/3 text-center py-6">
                            <p className="text-sm text-blue-700 font-bold">
                                © 2020 by Pavlove BIOKOU
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
};

export default Footer
