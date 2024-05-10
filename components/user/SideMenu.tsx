// SideMenu.tsx
import React from 'react';
import NextLink from 'next/link';
import { SideMenuItem } from '@/components/user/SideMenuItem';
import { SideMenuThemeButton } from '@/components/user/SideMenuThemeButton';
import { SideMenuUserButton } from '@/components/user/SideMenuUserButton';
import LogoSVG from '@/public/logo.svg';
// import page from '@\app\(landing)\page.tsx';


export function SideMenu() {
  const handleItemClick = (item: string) => {
    // Handle click logic here
    console.log(`Clicked on ${item}`);
  };

  return (
    <div className="flex h-full flex-col justify-between pt-6">
      <nav className="flex flex-col gap-6 px-4 sm:max-lg:px-2">
        <NextLink
          href="/"
          className="focus-visible self-start rounded-xl max-sm:ml-4 sm:max-lg:self-center lg:ml-4"
        >
          <span className="hidden sm:max-lg:block">
            <LogoSVG className="w-10 hover:animate-bounce" />
          </span>
          <span className="sm:max-lg:hidden">
            <span  className="font-display text-3xl font-bold -tracking-wide text-primary">
              {/* <a href="/" >FINIUS</a> */}
              <NextLink href="/" className="truncate">
                  FINIUS 
                </NextLink>
            </span>
          </span>
        </NextLink>
        <ul className="flex flex-col gap-y-2">
          <SideMenuItem href="/learn" icon="budget" label="Budget" />
          <SideMenuItem href="/leaderboard" icon="savings" label="Tax/Savings" />
          <SideMenuItem href="/quests" icon="investments" label="Investment" />
          <SideMenuItem href="/shop" icon="planning" label="Planning" />
          <SideMenuItem  href="/robo" icon="heart" label="Chatbot"/>
          
        </ul>
      </nav>
      <div className="space-y-2 border-t-2 px-4 pb-2 pt-2 sm:max-lg:px-2">
        <SideMenuThemeButton />
        <SideMenuUserButton />
      </div>
      {/* Add the MainBody component */}
    
    </div>
  );
}
