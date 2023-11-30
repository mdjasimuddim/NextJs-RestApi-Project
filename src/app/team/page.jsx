import React from 'react'
import Image from 'next/image'
import Script from 'next/script'
import Team from '@/components/Team'
import Contacts from '@/components/Contacts'
import Brands from '@/components/Brands'

const page = () => {
  return (
    <div>
      <Team />
      <Contacts />
      <Brands />
    </div>
  )
}

export default page