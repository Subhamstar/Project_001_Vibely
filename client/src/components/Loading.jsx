import React from 'react'

const Loading = ({ height = '100vh', text = 'SincosTani❤️...' }) => {
  return (
    <div
      style={{ height }}
      className="flex flex-col items-center justify-center gap-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50"
    >
      {/* Spinner */}
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-4 border-indigo-400 border-t-transparent rounded-full animate-spin-slow"></div>
      </div>

      {/* Text */}
      <p className="text-lg font-semibold bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent animate-pulse">
        {text}
      </p>
    </div>
  )
}

export default Loading
