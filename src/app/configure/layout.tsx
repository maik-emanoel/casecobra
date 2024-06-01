import { ReactNode } from 'react'

import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import { Steps } from '@/components/steps'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <MaxWidthWrapper className="flex flex-1 flex-col">
      <Steps />
      {children}
    </MaxWidthWrapper>
  )
}
