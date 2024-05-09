import Link from 'next/link'
import React, { FC, useState } from 'react'

type FooterProps = {

}

const Footer:FC<FooterProps> = ({}) => {
  return (
    <footer className='py-8 container mx-auto'>
      <Link href={"/"} className="text-2xl font-medium">
				Otaku<span className="font-bold text-red-500">HUB</span>
			</Link>
      <p>
      Footer
      </p>
      <p>Зроблено в Україні 💙💛</p>
    </footer>
  )
}

export default Footer
