/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { CaseColor } from '@prisma/client'

import { AspectRatio } from './ui/aspect-ratio'
import { cn } from '@/lib/utils'

export function PhonePreview({
  croppedImageUrl,
  color,
}: {
  croppedImageUrl: string
  color: CaseColor
}) {
  const ref = useRef<HTMLDivElement>(null)

  const [renderedDimensions, setRenderedDimensions] = useState({
    height: 0,
    width: 0,
  })

  function handleResize() {
    if (!ref.current) return

    const { width, height } = ref.current.getBoundingClientRect()
    setRenderedDimensions({ width, height })
  }

  useEffect(() => {
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  let caseBackgroundColor = 'bg-zinc-950'
  if (color === 'blue') caseBackgroundColor = 'bg-blue-950'
  if (color === 'rose') caseBackgroundColor = 'bg-rose-950'

  return (
    <AspectRatio ref={ref} ratio={3000 / 2001} className="relative">
      <div
        className="absolute z-20 scale-[1.0352]"
        style={{
          left:
            renderedDimensions.width / 2 -
            renderedDimensions.width / (1216 / 121),
          top: renderedDimensions.height / 6.22,
        }}
      >
        <img
          src={croppedImageUrl}
          className={cn(
            'phone-skew relative z-20 rounded-b-[10px] rounded-t-[15px] md:rounded-b-[20px] md:rounded-t-[30px]',
            caseBackgroundColor,
          )}
          width={renderedDimensions.width / (3000 / 637)}
          alt=""
        />
      </div>

      <div className="relative z-40 h-full w-full">
        <Image
          src="/clearphone.png"
          alt="phone"
          className="pointer-events-none h-full w-full rounded-md antialiased"
          fill
        />
      </div>
    </AspectRatio>
  )
}
