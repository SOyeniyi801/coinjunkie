import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  FunnelChart,
  Funnel,
  LabelList,
} from "recharts";

export default function Bento() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [coins, setCoins] = useState(null);
  const apiKey = import.meta.env.VITE_COINGECKO_API_KEY;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  useEffect(() => {
    async function fetchCoins() {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1",
          {
            headers: {
              "x-cg-demo-api-key": apiKey,
            },
          }
        );
        const data = await res.json();
        setCoins(data);
        console.log(data);
      } catch (err) {
        console.error("API error", err);
      }
    }

    fetchCoins();
  }, []);

  const mappedCoinList = coins?.map((coin) => (
    <span
      key={coin.id}
      className="bg-slate-700 px-3 py-1 rounded-lg text-sm font-medium"
    >
      {coin.name}
    </span>
  ));
  const marketCapData = coins?.map((coin) => ({
    name: coin.symbol.toUpperCase(),
    marketCap: coin.market_cap,
  }));

  return (
    <div className="min-h-screen w-full bg-slate-900 p-6">
      <div className="grid grid-cols-6 grid-rows-5 gap-4 w-full h-[90vh] max-w-7xl mx-auto">
        {/* Greeting - Top Left, Wide */}
        <div className="col-span-3 row-span-2 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-700 p-6 flex items-center">
          <div>
            <h1 className="text-xl font-bold text-white mb-1">Good Morning!</h1>
            <p className="text-purple-100">
              Welcome back to your crypto dashboard
            </p>
            <div className="text-right">
              <p className="text-sm font-bold text-white">
                {formatTime(currentTime)}
              </p>
              <p className="text-slate-300 text-sm">
                {formatDate(currentTime)}
              </p>
            </div>
          </div>
        </div>

        {/* Date & Time - Top Right */}
        <div className="col-span-3 row-span-2 rounded-xl bg-gradient-to-br from-slate-600 to-slate-800 p-6 flex flex-col justify-center">
          <h1 className="text-xl font-semibold mb-2">Top Performing Coins</h1>
          <div className="flex gap-4 flex-wrap">{mappedCoinList}</div>{" "}
        </div>

        {/* Market Cap - Large Featured Box */}
        <div className="col-span-4 row-span-2 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Market Cap
            </h3>
            <div className="flex items-center gap-3 mb-4">
              {marketCapData && (
                <BarChart width={700} height={200} data={marketCapData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="marketCap" fill="#0f172a" />
                </BarChart>
              )}
            </div>
          </div>
        </div>

        {/* Market Cap */}
        <div className="col-span-2 row-span-1 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 p-4 flex flex-col justify-center">
          <h4 className="text-blue-100 text-sm font-medium mb-1">Market Cap</h4>
          <div className="flex items-center gap-3 mb-4">
          {marketCapData && (
                <BarChart width={700} height={200} data={marketCapData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="marketCap" fill="#0f172a" />
                </BarChart>
              )}
          </div>
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
            <h4 className="text-yellow-100 text-sm font-medium mb-1">
              Current Price
            </h4>
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
          <h4 className="text-teal-100 text-sm font-medium mb-1">
            Circulating Supply
          </h4>
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
