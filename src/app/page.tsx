import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Typography from '@/components/typography/Typography'
import { TypographyKind } from '@/types/componentTypes'
import Navbar from '@/components/navbar/Navbar'
import { mainNavOptions } from '@/data/mainNavOptions'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-full bg-white'>
      <section className='pt-5'>
          <Navbar 
              logoSrc='https://res.cloudinary.com/da7ov8jyp/image/upload/v1680366038/farmbio/FARMABIO_LOGO_1_fnttbb.png' 
              options={mainNavOptions} 
            />
            <div className='w-4/5 mx-auto flex flex-col justify-evenly items-center mt-28 gap-24'>
              <Typography 
                text={'tu solución para medicamentos genéricos al mejor precio"'}
                kind={TypographyKind.MAIN}
                customClass="text-dark-green"
                span={{text: '"Farma Bio: ', customClass: 'text-main-color'}}
              />
              <div className='w-full mx-auto flex flex-row justify-between'>
                <div className='h-fit flex flex-row items-end justify-start' style={{width: '490px'}}>
                  <Image 
                    src='https://res.cloudinary.com/da7ov8jyp/image/upload/v1680411346/farmbio/vista-cerca-mano-farmaceutico-tomando-caja-medicina-estante-farmacia_1_ap5p7a.png'
                    alt='FarmaBio medicinas'
                    width={227}
                    height={283}
                    className='h-72'
                  />      
                  <Image 
                    src='https://res.cloudinary.com/da7ov8jyp/image/upload/v1680411346/farmbio/9312_1_pz7ccm.png'
                    alt='FarmaBio Limpieza'
                    width={227}
                    height={184}
                    className='h-44'
                  />      
                </div>
                <div className='h-fit flex flex-row items-end justify-end' style={{width: '490px'}}>
                  <Image 
                      src='https://res.cloudinary.com/da7ov8jyp/image/upload/v1680411346/farmbio/9312_1_pz7ccm.png'
                      alt='FarmaBio Limpieza'
                      width={227}
                      height={184}
                      className='h-44'
                  />     
                  <Image 
                    src='https://res.cloudinary.com/da7ov8jyp/image/upload/v1680411346/farmbio/vista-cerca-mano-farmaceutico-tomando-caja-medicina-estante-farmacia_1_ap5p7a.png'
                    alt='FarmaBio medicinas'
                    width={227}
                    height={283}
                    className='h-72'
                  />       
                </div>
              </div>
            </div>
            <div className='w-4/5 mx-auto flex flex-row justify-around items-start h-fit mt-28'>
              <div className='max-w-lg flex flex-col gap-8 pt-6'>
                  <Typography 
                    text='Sobre nosotros' 
                    customClass='text-main-color' 
                    kind={TypographyKind.H1}
                  />
                  <Typography 
                    text='Nuestra misión es ofrecer medicamentos genéricos de alta calidad a precios asequibles.
                    Somos conscientes de que el acceso a los medicamentos es un factor clave para el bienestar de 
                    las personas, y en Farma Bio estamos dedicados a brindarte la mejor calidad a 
                    un precio justo.'
                    kind={TypographyKind.H3}
                    customClass='text-dark-green'
                  />
              </div>
              <div className='flex justify-center items-start relative' style={{width: '452px', height: '429px'}}>
                  <Image 
                    src='https://res.cloudinary.com/da7ov8jyp/image/upload/v1680411346/farmbio/Rectangle_325_nkfub5.png'
                    width={357}
                    height={352}
                    alt='Pending to client'
                  />              
      
                  <Image 
                    src='https://res.cloudinary.com/da7ov8jyp/image/upload/v1680411346/farmbio/Rectangle_326_ayht5u.png'
                    width={204}
                    height={207}
                    alt='Pending to client'
                    className='absolute bottom-2 right-0'
                  />
              </div>
            </div>
            <div className='flex flex-col justify-center gap-8 items-center mt-7'>
              <Typography 
                text='Nuestros Servicios' 
                customClass='text-main-color' 
                kind={TypographyKind.H1}
              />
              <Typography 
                      text='Ofrecemos una amplia variedad de medicamentos genéricos para tratar diversas enfermedades y afecciones, como la hipertensión, la diabetes, la artritis, entre otros. Si no encuentras lo que buscas, estamos dispuestos a ayudarte a encontrar el medicamento adecuado para ti.'
                      kind={TypographyKind.H3}
                      customClass='text-dark-green text-center w-2/4'
              />
              <Image 
                src='https://res.cloudinary.com/da7ov8jyp/image/upload/v1680411346/farmbio/productos-cuidado-corporal-pretty-woman-elegir-productos-cuidado-cuerpo-farmacia_1_yabnfz.png'
                width={500}
                height={332}
                alt='Servicios Farmabio'
              />

            </div>
            <div className='flex flex-row justify-end w-4/5 mx-auto mt-36'>
              <div className='flex flex-col gap-5 items-end'>
                <Typography 
                  text='Ponte en contacto con nosotros' 
                  customClass='text-main-color text-right' 
                  kind={TypographyKind.H1}
                />
                  <Typography 
                      text='Si tienes alguna pregunta o necesitas ayuda para encontrar un medicamento específico, no dudes en contactarnos. '
                      kind={TypographyKind.H3}
                      customClass='text-dark-green text-right max-w-xl'
                    />
              </div>

            </div>
            <div className='flex flex-row justify-between mx-auto my-20' style={{width: '888px'}}>
                <Image
                  src='https://icongr.am/material/map-marker-outline.svg'
                  width={50}
                  height={50}
                  alt=''
                  className='color-main-color'
                />
                <Image
                  src='https://icongr.am/material/map-marker-outline.svg'
                  width={50}
                  height={50}
                  alt=''
                  className='color-main-color'
                />
                <Image
                  src='https://icongr.am/material/map-marker-outline.svg'
                  width={50}
                  height={50}
                  alt=''
                  className='color-main-color'
                />
                <Image
                  src='https://icongr.am/material/map-marker-outline.svg'
                  width={50}
                  height={50}
                  alt=''
                  className='color-main-color'
                />


            </div>
        </section>
        <footer className='flex flex-col gap-8 items-center mx-auto mt-20'>
          <Image 
            src='https://res.cloudinary.com/da7ov8jyp/image/upload/v1680366038/farmbio/FARMABIO_LOGO_1_fnttbb.png'
            alt=''
            className='w-80 h-20'
            width={313}
            height={80}
          /> 
          <div className='flex flex-row justify-center gap-5 w-2/3 border-b-2 text-center pb-16'>
            <Link href='/'>
              <Typography text='Inicio' kind={TypographyKind.H3} customClass='text-neutral-400'/>
            </Link>
            <Link href='/'>
              <Typography text='¿Quienes somos?' kind={TypographyKind.H3} customClass='text-neutral-400'/>
            </Link>
            <Link href='/'>
              <Typography text='Servicios' kind={TypographyKind.H3} customClass='text-neutral-400'/>
            </Link>
            <Link href='/'>
              <Typography text='Contáctanos' kind={TypographyKind.H3} customClass='text-neutral-400'/>
            </Link>
          </div>
          <Typography text='Copyright © 2023 Farma Bio SAC | Desarrollado por KusqiDev' kind={TypographyKind.H3} customClass='text-neutral-400 pb-4'/>

        </footer>
    </div>
    // <main className={styles.main}>
    //   <div className={styles.description}>
    //     <p>
    //       Get started by editing&nbsp;
    //       <code className={styles.code}>src/app/page.tsx</code>
    //     </p>
    //     <div>
    //       <a
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{' '}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className={styles.vercelLogo}
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className={styles.center}>
    //     <Image
    //       className={styles.logo}
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //     <div className={styles.thirteen}>
    //       <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
    //     </div>
    //   </div>
    //   <Typography text='EL TÍTULO PRINCIPAL' kind={TypographyKind.MAIN}/>
    //   <div className={styles.grid}>
    //     <a
    //       href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={inter.className}>
    //         Docs <span>-&gt;</span>
    //       </h2>
    //       <p className={inter.className}>
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={inter.className}>
    //         Templates <span>-&gt;</span>
    //       </h2>
    //       <p className={inter.className}>Explore the Next.js 13 playground.</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={inter.className}>
    //         Deploy <span>-&gt;</span>
    //       </h2>
    //       <p className={inter.className}>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
  )
}
