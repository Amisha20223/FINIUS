// assistant.tsx
import React from 'react';
import NextLink from 'next/link';

export function Assistant() {
  // Component logic here
//   return <div>Assistant component</div>;
  return (
    <div className="relative">
      {/* Other content of your assistant page */}
      {/* <img
        src="/robot.png"
        alt="Doubts? Ask me!"
        className="absolute bottom-40 right-10 w-50 animate-bounce"
      /> */}
      /* <NextLink href="/" className="truncate">
                  FINIUS 
                </NextLink> */
                <NextLink href="/robo"
      className=" text-secondary absolute bottom-40 right-10 w-50 animate-bounce">  
       🤖 Doubts? Ask me!
       </NextLink>
    </div>
  );
}





















// AssistantPage.jsx
// import React from 'react';

// const AssistantPage = () => {
//   return (
//     <div className="relative">
//       {/* Other content of your assistant page */}
//       <img
//         src="/robot.png"
//         alt="Robot"
//         className="absolute bottom-10 right-10 w-20 animate-bounce"
//       />
//     </div>
//   );
// };

// export default AssistantPage;
