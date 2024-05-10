// assistant.tsx
import React from 'react';

export function Assistant() {
  // Component logic here
//   return <div>Assistant component</div>;
  return (
    <div className="relative">
      {/* Other content of your assistant page */}
      <img
        src="/robot.png"
        alt="Doubts? Ask me!"
        className="absolute bottom-40 right-10 w-50 animate-bounce"
      />
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
