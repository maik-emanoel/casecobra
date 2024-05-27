import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'
import Image, { StaticImageData } from 'next/image'

import phoneTemplateDarkEdges from '../../public/phone-template-dark-edges.png'
import phoneTemplateWhiteEdges from '../../public/phone-template-white-edges.png'

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string | StaticImageData
  dark?: boolean
}

export function Phone({
  imgSrc,
  className,
  dark = false,
  ...props
}: PhoneProps) {
  return (
    <div
      className={cn(
        'pointer-events-none relative z-50 overflow-hidden',
        className,
      )}
      {...props}
    >
      <Image
        src={dark ? phoneTemplateDarkEdges : phoneTemplateWhiteEdges}
        alt="Phone image"
        className="pointer-events-none z-50 select-none"
      />

      <div className="absolute inset-0 -z-10">
        <Image
          src={imgSrc}
          alt="Overlaying phone image"
          className="object-cover"
        />
      </div>
    </div>
  )
}
