import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from './anim';
import Link from './Link';
import Curve from './Curve';
import Footer from './Footer';

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export default function index() {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className="fixed right-0 top-0 text-white h-screen bg-[#292929]">
       <div className="flex flex-col justify-between box-border h-screen sm:p-[100px] p-[85px]">
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className="flex flex-col text-[56px] gap-[12px] mt-[80px]">
                    <div className="text-[#999999] text-[11px] mb-[40px] border-b-[1px] border-[#999999] uppercase">
                        <p>Where to?</p>
                    </div>
                    {
                      navItems.map( (data, index) => {
                        return <Link key={index} data={{...data, index}} isActive={selectedIndicator == data.href} setSelectedIndicator={setSelectedIndicator}></Link>
                      })
                    }
            </div>
            <Footer />
        </div>
        <Curve />
    </motion.div>
  )
}
