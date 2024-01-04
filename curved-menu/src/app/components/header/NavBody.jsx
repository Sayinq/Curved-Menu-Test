'use client'
import styles from './style.module.css'
import { useEffect, useState } from 'react';
import Nav from './nav';
import Magnetic from '../magnetic';
import { AnimatePresence, motion } from 'framer-motion';
import { Spiral as Hamburger } from 'hamburger-react';
import { usePathname } from 'next/navigation';

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false)
  }, [pathname])

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className={styles.main}>

        <div className="fixed top-0 right-0 p-4 z-[2]">
          <Magnetic>
            <div
              onClick={() => { setIsActive(!isActive) }}
              className={`flex items-center justify-center w-[50px] h-[50px] rounded-full cursor-pointer pointer-events-auto hover:scale-[1.15] transition-all duration-75 ease-in-out ${
                isHovered ? 'bg-[#148CEE]' : ''
              }`}
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverEnd}
            >
              <motion.div
                className={styles.burgerActive}
                initial={false}
                animate={isActive ? 'open' : 'closed'}
                exit="closed"
              >
                <Hamburger
                  toggled={isActive}
                  toggle={() => { setIsActive(!isActive) }}
                  color={isActive ? '#ffffff' : (isHovered ? '#ffffff' : '#292929')}
                />
              </motion.div>
            </div>
          </Magnetic>
        </div>

      </div>
      <AnimatePresence mode="wait">
        {isActive && <Nav />}
      </AnimatePresence>
    </>
  )
}


