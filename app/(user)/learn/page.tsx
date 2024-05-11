// export default function Learn() {
//   return <div className="h-[200vh]">LEARN</div>
// }
// import React from 'react';

// export default function Learn() {
//   return (
//     <div className="h-[200vh]">
//       <h1>LEARN</h1>
//       <div className="flex justify-around mt-8">
//         <ModuleButton title="Learning" />
//         <ModuleButton title="Quiz" />
//         <ModuleButton title="Chatbot" />
//         <ModuleButton title="Feedback" />
//       </div>
//     </div>
//   );
// }

// interface ModuleButtonProps {
//   title: string;
// }

// function ModuleButton({ title }: ModuleButtonProps) {
//   return (
//     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//       {title}
//     </button>
//   );
// }


// import React from 'react';
// import NextLink from 'next/link';
// import { SideMenuInnerItem, SideMenuItem } from '@/components/user/SideMenuItem';
// import { SideMenuThemeButton } from '@/components/user/SideMenuThemeButton';
// import { SideMenuUserButton } from '@/components/user/SideMenuUserButton';
// import LogoSVG from '@/public/logo.svg';

// export default function Learn() {
//   return (
//     <div className="h-[200vh]">
//       <SideMenu />
//     </div>
//   );
// }

// export function SideMenu() {
//   return (
//     <div className="flex h-screen flex-col justify-between pt-6">
//       <nav className="flex flex-col gap-6 px-4 sm:max-lg:px-2">
//         <NextLink href="/learn">
//           <button className="focus-visible self-start rounded-xl max-sm:ml-4 sm:max-lg:self-center lg:ml">
//             <span className="hidden sm:max-lg:block">
//               <LogoSVG className="w-10 hover:animate-bounce" />
//             </span>
//             <span className="sm:max-lg:hidden">
//               <span className="font-display text-1xl font-bold -tracking-wide text-primary">
//               Budget
//               </span>
//             </span>
//           </button>
//         </NextLink>
//         <div className="flex flex-col w-full h-screen justify-center items-center gap-y-10">
//           <div className='flex flex-row gap-x-10'>
//             <SideMenuInnerItem href="/learning"  modulename = "budget" icon="learn" label="Blogs/Articles " />
//              <SideMenuInnerItem href="/learn"  modulename = "budget" icon="leaderboard" label="Gamified Learning" /> 
//           </div>
//           <div className='flex flex-row gap-x-10'>
//             <SideMenuInnerItem href="/videos" modulename = "budget" icon="quests" label="Videos"/>
//             <SideMenuInnerItem href="/shop" icon="shop"  modulename = "budget" label="Performance Tracker" />
//           </div>
//         </div>
//       </nav>
//       {/* <div className="space-y-5 border-t-7 px-2 pb-2 pt-2 sm:max-lg:px-2">
//         <SideMenuThemeButton />
//         <SideMenuUserButton />
//       </div> */}
//     </div>
//   );
// }





import React from 'react';
import NextLink from 'next/link';
import { SideMenuInnerItem, SideMenuItem } from '@/components/user/SideMenuItem';
import { SideMenuThemeButton } from '@/components/user/SideMenuThemeButton';
import { SideMenuUserButton } from '@/components/user/SideMenuUserButton';
import { Assistant } from '@/components/user/Assistant';

import LogoSVG from '@/public/logo.svg';

export default function Learn() {
  return (
    <div className="h-[200vh]">
      <SideMenu />
    </div>
  );
}

export function SideMenu() {
  return (
    <div className="flex h-screen flex-col justify-between pt-6">
      <nav className="flex flex-col gap-6 px-4 sm:max-lg:px-2">
        <NextLink href="/learn">
          <button className="focus-visible self-start rounded-xl max-sm:ml sm:max-lg:self-center lg:ml">
            <span className="hidden sm:max-lg:block">
              <LogoSVG className="w-10 hover:animate-bounce" />
            </span>
            
            <span className="sm:max-lg:hidden">
              <span className="font-display  text-1xl font-normal -tracking-wide text-green-200 block mx-auto">
              Choose your learning Path!
              </span>
            </span>
          </button>
        </NextLink>
        <div className="flex flex-col w-full h-screen justify-center items-center gap-y-10">
          <div className='flex flex-row gap-x-10'>
            <SideMenuInnerItem href="/learning"  modulename = "budget" icon="article" label="Blogs/Articles " />
             <SideMenuInnerItem href="/game"  modulename = "budget" icon="leaderboard" label="Gamified Learning" /> 
          </div>
          <div className='flex flex-row gap-x-10'>
            <SideMenuInnerItem href="/videos" modulename = "budget" icon="video" label="Videos"/>
            <SideMenuInnerItem href="/shop" icon="shop"  modulename = "budget" label="Performance Tracker" />
          </div>
        </div>
      </nav>
      { <div className="space-y-5 border-t-7 px-2 pb-2 pt-2 sm:max-lg:px-2">
        <SideMenuThemeButton />
        <SideMenuUserButton />
        <Assistant/>
      </div> }
    </div>
  );
}
