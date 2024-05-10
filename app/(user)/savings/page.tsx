import React from 'react';


 export const Saving: React.FC = () => {
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
            <h3 className="text-xl font-semibold mb-2 text-orange-700">Step1</h3>
            <p className="text-gray-700 mb-4">
            Trigger

            <iframe width="300" height="315"
        src="">
            </iframe>
            </p>
            
          </div>

          <div className="bg-green-300 p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 text-green-700">Step2</h3>
            <p className="text-gray-700 mb-4">
           Routine
            <iframe width="300" height="315"
        src="">
            </iframe>
            </p>
     
          </div>

          <div className="bg-indigo-300 p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 text-indigo-700"> Step3</h3>
            <p className="text-gray-700 mb-4">
                Return
       
             <iframe width="300" height="315"
            src="">
            </iframe>
            </p>
            </div>
        </section>

      
      </div>
    </div>
  );
};
export default Saving;