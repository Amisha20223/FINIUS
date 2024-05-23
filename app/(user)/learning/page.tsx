


// import React from 'react';

// const LearningPage: React.FC = () => {
//   return (
//     <div className="bg-black text-white">
//       <div className="container mx-auto px-4 py-8">
//       <h1 className="text-center text-3xl font-bold mb-6 hover:text-red-500 transition duration-300 ease-in-out transform hover:scale-105">
//           <span className="text-red-500">Budget</span>: Your Key to Financial Freedom
//         </h1>
         

//         <div className="max-w-3xl mx-auto mb-8">
//           <p className="text-lg mb-4">
//             Budgeting is essential for achieving financial stability and success. It's not just about restricting your spending; instead, it's a powerful tool that helps you take control of your money and plan for your future.
//           </p>
//           <h1 className="text-lg text-3xl font-bold mb-6 text-green-200">
//             With a budget in place, you can:
//           </h1>
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
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Article 1 */}
//           <div className="bg-pink-300 p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
//             <h2 className="text-xl font-semibold mb-2 text-pink-700">Budgeting: How do you start?</h2>
//             <p className="text-gray-700 mb-4">
//               Your budget needs to be something that you can look at and refer to frequently. There are multiple ways of building a budget, and you should pick the one you are most comfortable using.
//             </p>
//             <a href="#" className="text-blue-500 hover:underline">Read More</a>
//           </div>

//           {/* Article 2 */}
//           <div className="bg-lime-300 p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
//             <h2 className="text-xl font-semibold mb-2 text-lime-700">Budgeting and the 50:30:20 rule</h2>
//             <p className="text-gray-700 mb-4">
//               The 50-30-20 rule is a suggested budgeting guideline that advises allocating 50% of your income to necessities (like rent), 30% to discretionary spending (like hobbies), and 20% to savings.
//             </p>
//             <a href="#" className="text-blue-500 hover:underline">Read More</a>
//           </div>

//           {/* Article 3 */}
//           <div className="bg-indigo-300 p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
//             <h2 className="text-xl font-semibold mb-2 text-indigo-700">How do you build a budget?</h2>
//             <p className="text-gray-700 mb-4">
//               Simply put, you build your budget by comparing your income against your spending. One way to build a budget is to use the 50/30/20 rule. The 50/30/20 rule divides your money into three categories: needs, wants, and savings.
//             </p>
//             <a href="#" className="text-blue-500 hover:underline">Read More</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LearningPage;

import React from 'react';

const LearningPage: React.FC = () => {
  return (
    // <div className="bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <header>
          <h1 className="text-center text-3xl font-bold mb-6 hover:text-red-500 transition duration-300 ease-in-out transform hover:scale-105">
            <span className="text-red-500">Budget</span>: Your Key to Financial Freedom
          </h1>
        </header>

        <article className="max-w-3xl mx-auto mb-8">
          <p className="text-lg mb-4">
          Budgeting is crucial for achieving financial stability and success. Its not just about cutting back on spending; its a powerful tool that helps you take control of your money and plan for your future.
          </p>
          <h2 className="text-lg text-3xl font-bold mb-6 text-green-200">
          </h2>
          <ul className="list-disc pl-6 mb-4">
          <li>Stay on top of your spending game and sniff out those sweet spots where you can stash some cash.</li>
<li>Lock in those financial goals and hustle hard to make em a reality.</li>
<li>Ease off the money stress by getting the lowdown on where your dough is disappearing.</li>
<li>Build up a rainy day fund to tackle those unexpected money pits like a boss.</li>
<li>Dive into smart investments and watch your bankroll swell over time.</li>

          </ul>
          <p className="text-lg">
          In this section, we will  delve into different aspects of budgeting, from basic budgeting tips to desired investment strategies. Lets get started!
          </p>
        </article>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Budgeting Articles */}
          <div className="bg-pink-300 p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 text-pink-700">Budgeting: How  do you Start</h3>
            <p className="text-gray-700 mb-4">
            Your budget needs to be something that you can look at and refer to frequently. There are multiple ways of building a budget, and you should pick the one you are most comfortable using.
              </p>
            <a href="#" className="text-blue-500 hover:underline">Read More</a>
          </div>

          <div className="bg-lime-300 p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 text-lime-700">Budgeting and the 50:30:20 rule</h3>
            <p className="text-gray-700 mb-4">
            The 50-30-20 rule is a suggested budgeting guideline that advises allocating 50% of your income to necessities, 30% to discretionary spending, and 20% to savings.
            </p>
            <a href="#" className="text-blue-500 hover:underline">Read More</a>
          </div>

          <div className="bg-indigo-300 p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 text-indigo-700">How do you build a budget?</h3>
            <p className="text-gray-700 mb-4">
            One way to build a budget is to use the 50/30/20 rule. This divides your money into three categories: needs, wants, and savings.
            </p>
            <a href="#" className="text-blue-500 hover:underline">Read More</a>
          </div>
        </section>

        {/* Reference Links Section */}
        <section className="py-8">
          <h3 className="text-2xl font-bold text-center mb-4">Learn More</h3>
          <ul className="list-none text-center">
            <li className="mb-2"><a href="https://www.mint.com/" className="text-blue-400 hover:text-blue-600 transition ease-in-out duration-300">Mint: Budget Tracker & Planner</a></li>
            <li className="mb-2"><a href="https://www.nerdwallet.com/blog/finance/how-to-build-a-budget/" className="text-blue-400 hover:text-blue-600 transition ease-in-out duration-300">NerdWallet: How to Build a Budget</a></li>
            <li className="mb-2"><a href="https://www.youneedabudget.com/method/" className="text-blue-400 hover:text-blue-600 transition ease-in-out duration-300">YNAB: Budgeting Method</a></li>
            <li className="mb-2"><a href="https://www.khanacademy.org/college-careers-more/personal-finance" className="text-blue-400 hover:text-blue-600 transition ease-in-out duration-300">Khan Academy: Personal Finance</a></li>
          </ul>
        </section>
      </div>
    // </div>
  );
};

export default LearningPage;
