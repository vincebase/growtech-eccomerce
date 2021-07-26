import React, { Fragment } from 'react'
import ContactMap from '../components/contactUs/contactMap'
import ContactInquiry from '../components/contactUs/contactInquiry'

const ContactUs = () => {
    
    return (

            <Fragment>
            
            <div className="text-center text-gray-600">
            <div className="flex justify-center py-10">
                    <span className="inline-block h-1 w-20 rounded bg-green-500 mt-6 mb-4 md:w-40"></span>
                    <h1 className="pt-3 text-3xl font-bold mx-4 md:text-6xl md:pt-1">CONTACT US</h1>
                    <span className="inline-block h-1 w-20 rounded bg-green-500 mt-6 mb-4 md:w-40"></span>
                </div>
            <section className="text-gray-600 body-font relative">
                <div className="px-2 mb-10 py-2 md:py-10 row">
                 <ContactMap/>
                <ContactInquiry/>
                </div>
                </section>


                
            </div>
      
           
          
         </Fragment>
    )
}

export default ContactUs
