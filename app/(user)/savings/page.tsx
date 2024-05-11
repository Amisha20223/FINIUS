import React from 'react';


 export const Saving: React.FC = () => {
  return (
    <div className="bg-blue-100 text-white">
      <div className="container mx-auto px-4 py-8">
        <header>
          <h1 className="text-center text-3xl font-bold mb-6 hover:text-red-500 transition duration-300 ease-in-out transform hover:scale-105">
            <span className="text-red-500">FOLLOW THESE RULES</span>:
          </h1>
        </header>

        <section className="grid grid-row-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Budgeting Articles */}
          <div className="bg-rose-400 p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Step1</h3>
            <p className="text-gray-700 mb-4">
            <h3 className="text-xl font-semibold mb-2 text-pink-800">TRIGGER</h3>
            <p className="text-gray-700" >
            Recognize the situations or emotions that trigger your impulse spending. Keep track of when and why you tend to spend money impulsively.
            </p>

            
            </p>
            
          </div>

          <div className="bg-rose-400 p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Step2</h3>
            <p className="text-gray-700 mb-4">
            <h3 className="text-xl font-semibold mb-2 text-pink-800">ROUTINE</h3>
            <p className="text-gray-700">
            Once you've identified your triggers, work on interrupting the routine behavior. This could involve creating barriers to impulse spending, such as leaving your credit cards at home or implementing a waiting period before making non-essential purchases
            </p>
            </p>
          </div>

          <div className="bg-rose-400 p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 text-gray-700"> Step3</h3>
            <h3 className="text-xl font-semibold mb-2 text-pink-800">REWARD</h3>
            <p className='text-gray-700'>
            Finally, reward yourself for sticking to your saving goals and breaking the impulse spending cycle. Celebrate your achievements, no matter how small, and reinforce positive saving behaviors with meaningful rewards that align with your values and long-term financial goals.
            </p>

            </div>
        </section>

        <section>
          <div className="bg-rose-600 p-2 rounded-lg shadow-md transform transition duration-500 hover:scale-105 mb-6">
            <h3 className="text-xl font-semibold mb-2 text-pink-800">Get the Lowdown on Why It Matters</h3>
            <p className="text-gray-700">
            Understand why stashing cash is the real deal for securing your financial future. Get hip to concepts like building up emergency funds, socking away for retirement, and hustling for financial freedom



            </p>
            <a href="#" className="text-green-500 hover:underline">Read More</a>
          </div>

          <div className="bg-rose-500 p-2 rounded-lg shadow-md transform transition duration-500 hover:scale-105 mb-6">
            <h3 className="text-xl font-semibold mb-2 text-pink-800">Set Your Sights with a Money Game Plan</h3>
            <p className="text-gray-700">
            Learn the art of crafting a killer budget that includes saving goals. Set your targets like a boss, track your progress, and watch your savings stack up over time.
            </p>
            <a href="#" className="text-green-500 hover:underline">Read More</a>
          </div>

          <div className="bg-rose-400 p-2 rounded-lg shadow-md transform transition duration-500 hover:scale-105 mb-6">
            <h3 className="text-xl font-semibold mb-2 text-pink-800">Hustle Smart with Savings Strategies</h3>
            <p className="text-gray-700">
            Explore cool tactics to beef up your bankroll. From automating your savings to slashing expenses and finding side hustles, discover ways to stash cash while still living your best life.
            
            </p>
            <a href="#" className="text-green-500 hover:underline">Read More</a>
          </div>
          <div className="bg-rose-300 p-2 rounded-lg shadow-md transform transition duration-500 hover:scale-105 mb-6">
            <h3 className="text-xl font-semibold mb-2 text-pink-800">Dive into the Money Moves</h3>
            <p className="text-gray-700">
            Level up your financial game by getting schooled on investing basics. Check out different ways to grow your dough, like playing the stock market, dabbling in bonds, and setting up a sweet retirement fund.
           </p>       
                <a href="#" className="text-green-500 hover:underline">Read More</a>
          </div>
        </section>
        

      
      </div>
    </div>
  );
};
export default Saving;