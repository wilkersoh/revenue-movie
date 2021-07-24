import React from 'react'
import Header from "@/components/modules/Header/index";
import Footer from "@/components/modules/Footer/index";


const index: React.FC = ({children}) => {
  return (
    <div className='flex flex-col min-h-screen bg-main'>
      <Header />
      <main className="flex-1">
      {children}
      </main>
      <Footer />
    </div>
  );
}

export default index
