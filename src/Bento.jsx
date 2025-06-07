import { useState, useEffect } from 'react';

export default function CryptoDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen w-full bg-slate-900 p-6">
      <div className="grid grid-cols-6 grid-rows-4 gap-4 w-full h-[90vh] max-w-7xl mx-auto">
        
        {/* Greeting - Top Left, Wide */}
        <div className="col-span-3 row-span-1 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-700 p-6 flex items-center">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">Good Morning! 👋</h1>
            <p className="text-purple-100">Welcome back to your crypto dashboard</p>
          </div>
        </div>

        {/* Date & Time - Top Right */}
        <div className="col-span-3 row-span-1 rounded-xl bg-gradient-to-br from-slate-600 to-slate-800 p-6 flex flex-col justify-center">
          <div className="text-right">
            <p className="text-3xl font-bold text-white">{formatTime(currentTime)}</p>
            <p className="text-slate-300 text-sm">{formatDate(currentTime)}</p>
          </div>
        </div>

        {/* Top Earning Crypto - Large Featured Box */}
        <div className="col-span-4 row-span-2 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">🚀 Top Performer</h3>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">₿</div>
              <div>
                <h2 className="text-3xl font-bold text-white">Bitcoin</h2>
                <p className="text-green-100">BTC</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-green-100 text-sm">24h Change</p>
              <p className="text-2xl font-bold text-white">+8.45%</p>
            </div>
            <div className="text-right">
              <p className="text-green-100 text-sm">Current Price</p>
              <p className="text-3xl font-bold text-white">$67,234</p>
            </div>
          </div>
        </div>

        {/* Market Cap */}
        <div className="col-span-2 row-span-1 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 p-4 flex flex-col justify-center">
          <h4 className="text-blue-100 text-sm font-medium mb-1">Market Cap</h4>
          <p className="text-2xl font-bold text-white">$1.28T</p>
          <p className="text-blue-200 text-xs">+2.4% today</p>
        </div>

        {/* 24h Low */}
        <div className="col-span-2 row-span-1 rounded-xl bg-gradient-to-br from-red-400 to-red-600 p-4 flex flex-col justify-center">
          <h4 className="text-red-100 text-sm font-medium mb-1">24h Low</h4>
          <p className="text-2xl font-bold text-white">$63,891</p>
          <p className="text-red-200 text-xs">Support level</p>
        </div>

        {/* Current Price - Highlighted */}
        <div className="col-span-3 row-span-1 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 p-4 flex items-center justify-between">
          <div>
            <h4 className="text-yellow-100 text-sm font-medium mb-1">Current Price</h4>
            <p className="text-3xl font-bold text-white">$67,234.89</p>
          </div>
          <div className="text-right">
            <div className="bg-white bg-opacity-20 rounded-lg px-3 py-1">
              <p className="text-white text-sm font-semibold">Live</p>
            </div>
          </div>
        </div>

        {/* Circulating Supply */}
        <div className="col-span-2 row-span-1 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 p-4 flex flex-col justify-center">
          <h4 className="text-teal-100 text-sm font-medium mb-1">Circulating Supply</h4>
          <p className="text-xl font-bold text-white">19.8M BTC</p>
          <p className="text-teal-200 text-xs">94.3% of max supply</p>
        </div>

        {/* 1 Year Change */}
        <div className="col-span-1 row-span-1 rounded-xl bg-gradient-to-br from-pink-400 to-rose-600 p-4 flex flex-col justify-center text-center">
          <h4 className="text-pink-100 text-xs font-medium mb-1">1Y Change</h4>
          <p className="text-xl font-bold text-white">+156%</p>
          <p className="text-pink-200 text-xs">🎯 Strong</p>
        </div>

      </div>
    </div>
  );
}