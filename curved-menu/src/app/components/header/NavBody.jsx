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

      <div className="fixed top-0 right-0 p-4 z-[2]">
        <div onClick={() => {setIsActive(!isActive)}} className="flex items-center justify-center w-fit h-fit rounded-full cursor-pointer">
          <div className={`${isActive ? styles.burgerActive : ""}`}>
            <div>
              <button class="relative group">
                <div class="relative flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 duration-200 shadow-md">
                  <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 group-focus:-rotate-[45deg] origin-center">
                    <div class="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-right delay-75 group-focus:-translate-y-[1px]"></div>
                    <div class="bg-white h-[1px] rounded"></div>
                    <div class="bg-white h-[2px] w-1/2 rounded self-end transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-left delay-75 group-focus:translate-y-[1px]"></div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
    <AnimatePresence mode="wait">
      {isActive && <Nav />}
    </AnimatePresence>
    </>
  )
}