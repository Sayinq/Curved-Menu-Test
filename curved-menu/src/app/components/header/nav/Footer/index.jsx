import githubLogo from '../../../../svg/logo-git.svg';
import linkedinLogo from '../../../../svg/logo-linkedin.svg';
import twitterLogo from '../../../../svg/logo-twitter.svg';

import Image from 'next/image';

export default function index() {
  return (
    <div className="flex flex-col gap-y-4 w-full justify-startw items-start text-[12px] gap-[10px]">
        <p className="uppercase">
          <a href="mailto:mylesmcghee1999@yahoo.com" 
            className="relative sm:text-xl text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right">
              Shoot me an email
          </a>
        </p>
        <div className="flex flex-row gap-x-4">
          <Image src={githubLogo} className="w-8 h-8 cursor-pointer" />
          <Image src={linkedinLogo} className="w-8 h-8 cursor-pointer" />
          <Image src={twitterLogo} className="w-8 h-8 cursor-pointer" />
        </div>
    </div>
  )
}