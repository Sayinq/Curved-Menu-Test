'use client'
import styles from './style.module.css'
import { useEffect, useState } from 'react';
import Nav from './nav';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Home() {

  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect( () => {
    if(isActive) setIsActive(false)
  }, [pathname])

  return (
    <>
    <div className={styles.main}>

      <div className="fixed top-0 right-0 p-[30px] z-[1]">
        <div onClick={() => {setIsActive(!isActive)}} className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-[#148CEE] cursor-pointer">
          <div className={`${isActive ? styles.burgerActive : ""}`}></div>
        </div>
      </div>

    </div>
    <AnimatePresence mode="wait">
      {isActive && <Nav />}
    </AnimatePresence>
    </>
  )
}