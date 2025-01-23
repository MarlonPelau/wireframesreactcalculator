import React from 'react';
import { LockIcon, CalculatorIcon, HistoryIcon } from 'lucide-react';

// Preliminary Stage Wireframe
const PreliminaryWireframe = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full">
      <div className="grid grid-cols-3 gap-4">
        {/* Login Section */}
        <div className="bg-white p-4 rounded-lg border-2 border-dashed border-gray-300">
          <div className="flex items-center mb-4">
            <LockIcon className="mr-2 text-gray-500 w-6 h-6" />
            <h2 className="text-lg font-semibold text-gray-600">Login</h2>
          </div>
          <div className="space-y-2">
            <div className="h-8 bg-gray-200 rounded"></div>
            <div className="h-8 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-300 rounded"></div>
          </div>
        </div>

        {/* Calculator Basic */}
        <div className="bg-white p-4 rounded-lg border-2 border-dashed border-gray-300">
          <div className="flex items-center mb-4">
            <CalculatorIcon className="mr-2 text-gray-500 w-6 h-6" />
            <h2 className="text-lg font-semibold text-gray-600">Basic Calculator</h2>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="h-10 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>

        {/* History Placeholder */}
        <div className="bg-white p-4 rounded-lg border-2 border-dashed border-gray-300">
          <div className="flex items-center mb-4">
            <HistoryIcon className="mr-2 text-gray-500 w-6 h-6" />
            <h2 className="text-lg font-semibold text-gray-600">Calculation History</h2>
          </div>
          <div className="space-y-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-6 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Final Stage Wireframe
const FinalStageWireframe = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full">
      <div className="grid grid-cols-3 gap-6">
        {/* Detailed Login Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <LockIcon className="mr-3 text-blue-500 w-6 h-6" />
            <h2 className="text-xl font-bold text-gray-800">Secure Login</h2>
          </div>
          <div className="space-y-4">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full p-3 border rounded-lg focus:outline-blue-500"
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full p-3 border rounded-lg focus:outline-blue-500"
            />
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="h-4 w-4" />
              <span className="text-sm text-gray-600">Two-Factor Authentication</span>
            </div>
            <button className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">
              Login
            </button>
          </div>
        </div>

        {/* Advanced Calculator */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <CalculatorIcon className="mr-3 text-green-500 w-6 h-6" />
            <h2 className="text-xl font-bold text-gray-800">Advanced Calculator</h2>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {['7','8','9','÷','4','5','6','×','1','2','3','-','0','.','=','+'].map((btn) => (
              <button 
                key={btn} 
                className="bg-gray-200 p-4 rounded-lg font-bold hover:bg-gray-300"
              >
                {btn}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed History Management */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <HistoryIcon className="mr-3 text-purple-500 w-6 h-6" />
            <h2 className="text-xl font-bold text-gray-800">Calculation History</h2>
          </div>
          <div className="space-y-3">
            {[
              '5 + 3 = 8',
              '10 × 2 = 20',
              '15 ÷ 3 = 5',
              '7 - 4 = 3'
            ].map((calc, index) => (
              <div 
                key={index} 
                className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"
              >
                <span>{calc}</span>
                <div className="space-x-2">
                  <button className="text-blue-500 hover:bg-blue-100 p-1 rounded">Edit</button>
                  <button className="text-red-500 hover:bg-red-100 p-1 rounded">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App p-8 max-w-screen-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Preliminary Wireframe</h1>
      <PreliminaryWireframe />
      
      <h1 className="text-2xl font-bold my-6">Final Stage Wireframe</h1>
      <FinalStageWireframe />
    </div>
  );
}

export default App;