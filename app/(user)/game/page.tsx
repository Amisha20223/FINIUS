// import React from 'react';
// import Link from 'next/link';

// const Game: React.FC = () => {
//   return (
//     <div>
//       <h1>Welcome to My Game</h1>
//       <Link ref="/unity.html" href={'/unity.html'}>
//         <a className="text-blue-500 hover:text-blue-700">Play Game</a>
//       </Link>
//     </div>
//   );
// }

// export default Game;
import React from 'react';

const Game: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Game Section</h2>
      <iframe
        src="/unity.html" // This path should point to your Unity WebGL build's index.html
        title="Unity Game"
        width="1000"
        height="1000"
      />
    </div>
  );
}

export default Game;
// import React from 'react';

// const LearningPage: React.FC = () => {
//   return (
//     <div className="bg-black text-white">
//       <div className="container mx-auto px-4 py-8">
//         <header>
//           <h1 className="text-center text-3xl font-bold mb-6 hover:text-red-500 transition duration-300 ease-in-out transform hover:scale-105">
//             <span className="text-red-500">Budget</span>: Your Key to Financial Freedom
//           </h1>
//         </header>

//         <article className="max-w-3xl mx-auto mb-8">
//           <p className="text-lg mb-4">
//             Budgeting is essential for achieving financial stability and success. It's not just about restricting your spending; instead, it's a powerful tool that helps you take control of your money and plan for your future.
//           </p>
//           <h2 className="text-lg text-3xl font-bold mb-6 text-green-200">
//             With a budget in place, you can:
//           </h2>
//           <ul className="list-disc pl-6 mb-4">
//             <li>Track your expenses and identify areas where you can save.</li>
//             <li>Set financial goals and work towards achieving them.</li>
//             <li>Reduce financial stress by knowing exactly where your money is going.</li>
//             <li>Build an emergency fund to cover unexpected expenses.</li>
//             <li>Invest wisely and grow your wealth over time.</li>
//           </ul>
//           <p className="text-lg">
//             In this section, we'll explore various aspects of budgeting, from basic budgeting tips to advanced investment strategies. Let's dive in!
//           </p>
//         </article>

//         <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Budgeting Articles */}
//           <div className="bg-pink-300 p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
//             <h3 className="text-xl font-semibold mb-2 text-pink-700">Budgeting: How do you start?</h3>
//             <p className="text-gray-700 mb-4">
//               Your budget needs to be something that you can look at and refer to frequently. There are multiple ways of building a budget, and you should pick the one you are most comfortable using.
//             </p>
//             <a href="#" className="text-blue-500 hover:underline">Read More</a>
//           </div>

//           <div className="bg-lime-300 p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
//             <h3 className="text-xl font-semibold mb-2 text-lime-700">Budgeting and the 50:30:20 rule</h3>
//             <p className="text-gray-700 mb-4">
//               The 50-30-20 rule is a suggested budgeting guideline that advises allocating 50% of your income to necessities, 30% to discretionary spending, and 20% to savings.
//             </p>
//             <a href="#" className="text-blue-500 hover:underline">Read More</a>
//           </div>

//           <div className="bg-indigo-300 p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
//             <h3 className="text-xl font-semibold mb-2 text-indigo-700">How do you build a budget?</h3>
//             <p className="text-gray-700 mb-4">
//               One way to build a budget is to use the 50/30/20 rule. This divides your money into three categories: needs, wants, and savings.
//             </p>
//             <a href="#" className="text-blue-500 hover:underline">Read More</a>
//           </div>
//         </section>

//         {/* Reference Links Section */}
//         {/* <section className="py-8">
//           <h3 className="text-2xl font-bold text-center mb-4">Learn More</h3>
//           <ul className="list-none text-center">
//             <li className="mb-2"><a href="https://www.mint.com/" className="text-blue-400 hover:text-blue-600 transition ease-in-out duration-300">Mint: Budget Tracker & Planner</a></li>
//             <li className="mb-2"><a href="https://www.nerdwallet.com/blog/finance/how-to-build-a-budget/" className="text-blue-400 hover:text-blue-600 transition ease-in-out duration-300">NerdWallet: How to Build a Budget</a></li>
//             <li className="mb-2"><a href="https://www.youneedabudget.com/method/" className="text-blue-400 hover:text-blue-600 transition ease-in-out duration-300">YNAB: Budgeting Method</a></li>
//             <li className="mb-2"><a href="https://www.khanacademy.org/college-careers-more/personal-finance" className="text-blue-400 hover:text-blue-600 transition ease-in-out duration-300">Khan Academy: Personal Finance</a></li>
//           </ul>
//         </section> */}
//       </div>
//     </div>
//   );
// };

// export default LearningPage;
