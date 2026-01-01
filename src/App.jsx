import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="p-10 rounded-2xl border border-slate-700 bg-slate-900 shadow-xl">
        <h1 className="text-4xl font-extrabold text-pink-400 mb-4 text-center">
          Tailwind Validation Successful
        </h1>

        <p className="text-slate-300 text-center mb-6">
          React + Vite + Tailwind CSS v4 is configured correctly.
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-2 rounded-lg bg-cyan-500 text-slate-900 font-semibold hover:bg-cyan-400 transition">
            Primary Action
          </button>

          <button className="px-6 py-2 rounded-lg border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-slate-900 transition">
            Secondary Action
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

