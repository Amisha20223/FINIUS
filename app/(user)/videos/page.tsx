import React from 'react';

const LearningPage: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <header>
          <h1 className="text-center text-3xl font-bold mb-6 hover:text-red-500 transition duration-300 ease-in-out transform hover:scale-105">
            <span className="text-red-500">Take help from Videos</span>:
          </h1>
        </header>

        <section className="grid grid-row-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Budgeting Articles */}
          <div className="bg-orange-300 p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 text-orange-700"> What is budget?</h3>
            <p className="text-gray-700 mb-4">
            "Budgeting: Your Blueprint for Financial Success!"

            <iframe width="300" height="315"
        src="https://www.youtube.com/embed/oFUtWo4YcbM">
            </iframe>
            </p>
            
          </div>

          <div className="bg-green-300 p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 text-green-700"> Importance of Budgeting!</h3>
            <p className="text-gray-700 mb-4">
            Empower Your Finances: Budgeting Builds Financial Freedom!
            <iframe width="300" height="315"
        src="https://www.youtube.com/embed/j1Vwth0B8I8">
            </iframe>
            </p>
     
          </div>

          <div className="bg-indigo-300 p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 text-indigo-700"> How to manage budget and save money.</h3>
            <p className="text-gray-700 mb-4">
            Master Your Money: Budgeting Tips to Save for Tomorrow!
             <iframe width="300" height="315"
            src="https://www.youtube.com/embed/HQzoZfc3GwQ?autoplay=1&mute=1">
            </iframe>
            </p>
            </div>
        </section>

      
      </div>
    </div>
  );
};
export default LearningPage;