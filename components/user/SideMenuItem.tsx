'use client'

import type { Route } from 'next'
import NextImage from 'next/image'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

type SideMenuInnerItemProps = {
  label: string
  icon: string
  href: Route
  hideLabel?: boolean
  modulename:string
}
type SideMenuItemProps = {
  label: string
  icon: string
  href: Route
  hideLabel?: boolean
}
export function SideMenuItem({ href, icon, label, hideLabel }: SideMenuItemProps) {
  const pathname = usePathname()
  const isActive = pathname === href
  return (
    <div>
      <Button
        variant={isActive ? 'active' : 'ghost'}
        className={`h-auto w-full justify-start py-2 sm:max-lg:w-auto sm:max-lg:px-2 ${isActive ? 'border-b-2' : ''}`}
        asChild
      >
        <NextLink href={href} title={label} {...(hideLabel && { 'aria-label': label })}>
          <span className="relative block size-10">
            <NextImage
              className="object-cover"
              src={`/img/icons/${icon}.svg`}
              alt={`${label} icon`}
              fill
            />
          </span>
          {!hideLabel && <span className="ml-5 truncate sm:max-lg:sr-only">{label}</span>}
        </NextLink>
      </Button>
    </div>
  )
}


export function SideMenuInnerItem({ href, icon, label, hideLabel,modulename }: SideMenuInnerItemProps) {
  const pathname = usePathname()
  const isActive = pathname === href
  console.log(modulename == "budget")
  return (
    <div className='w-96 h-96 rounded-full'>
      <Button
        variant={isActive ? 'active' : 'ghost'}
        className={`flex flex-col h-full w-full py-2 sm:max-lg:w-auto sm:max-lg:px-2 ${isActive ? 'border-b-2' : ''}`}
        asChild
      >
        <NextLink href={href} title={label} {...(hideLabel && { 'aria-label': label })}>
          <div className="relative block size-24 mb-5">
            <NextImage
              className="object-cover"
              src={`/img/icons/${icon}.svg`}
              alt={`${label} icon`}
              fill
            />
          </div>
          {!hideLabel && <div className="ml-5 truncate sm:max-lg:sr-only">{label}</div>}
        </NextLink>
      </Button>
    </div>
  )
}



