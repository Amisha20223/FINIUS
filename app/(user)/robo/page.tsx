// export default function Learn() {
//     return (
//       <div className="h-[200vh]">
//         <SideMenu />
//       </div>
//     );
//   }
  
//   export function SideMenu() {
//     return (
//       <div className="flex h-full flex-col justify-between pt-6">
       
//       </div>
//     )
//   };
import React from 'react';

const LearningPage: React.FC = () => {
  return (
   
     <div>
      <h2 className="text-xl font-bold mb-4">Chatbot</h2>
      <iframe
        src="https://chat.vercel.ai/" // This path should point to your Unity WebGL build's index.html
        title="ChatBot"
        width="900"
        height="800"
      />
    </div>
  );
};
export default LearningPage;