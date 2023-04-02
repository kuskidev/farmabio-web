import { TypographyKind } from '@/types/componentTypes'
import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import SearchInput from '../form/searchInput/SearchInput'
import Typography from '../typography/Typography'

type NavbarProps = {
  logoSrc: string
  options: {
    label: string
    href: string
  }[]
}

const Navbar: FunctionComponent<NavbarProps> = ({ logoSrc, options }) => {
  return (
    <nav  className='w-11/12 mx-auto flex flex-row justify-between items-center h-32 mt-5'>
        <div style={{width: '411px', height: '105px'}}>
            <Image src={logoSrc} alt='Farmbio' width={411} height={105}/>
        </div>

        <div className='flex flex-row justify-between items-center ' style={{width: '551px'}}>
            {
                options.map((option, key: number) => (
                    <Link 
                        href={option.href} 
                        key={key}
                        className='text-neutral-400'
                    > 
                        <Typography text={option.label} kind={TypographyKind.H3} />
                    </Link>
                ))
            }
        </div>

        <div>
            <SearchInput placeholder='Buscar'/>
        </div>
    </nav>

    // <nav className="flex flex-row items-center justify-between flex-wrap bg-blue-500 p-6">
    //   <div className="flex items-center flex-shrink-0 text-white mr-6">
    //     <Image 
    //         src={logoSrc} 
    //         alt="Logo" 
    //         className="w-10 mr-2" 
    //         width={100}
    //         height={24}
    //     />
    //     <span className="font-semibold text-xl tracking-tight">My Website</span>
    //   </div>
    //   <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    //     <div className="text-sm lg:flex-grow flex">
    //       {options.map(({ label, href }) => (
    //         <Link href={href} key={href} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
    //             {label}
    //         </Link>
    //       ))}
    //     </div>
    //      <div>
    //       <select className="block appearance-none bg-blue-500 border border-white rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
    //         <option>English</option>
    //         <option>French</option>
    //         <option>Spanish</option>
    //       </select>
    //     </div> 
    //   </div>
    // </nav>
  )
}

export default Navbar
