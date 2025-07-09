import { useState } from 'react';

const mockData = {
  '0x123': [
    { symbol: 'ZEN', balance: 152.42 },
    { symbol: 'ETH', balance: 0.845 },
    { symbol: 'USDC', balance: 1200 }
  ],
  '0xabc': [
    { symbol: 'ZEN', balance: 98.5 },
    { symbol: 'BTC', balance: 0.0043 },
    { symbol: 'ETH', balance: 0.223 }
  ]
};

export default function TokenDashboard() {
  const [address, setAddress] = useState('');
  const [tokens, setTokens] = useState([]);

  const handleCheckBalance = () => {
    const result = mockData[address] || [];
    setTokens(result);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Token Balance Checker</h1>
      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 w-full rounded"
          placeholder="Enter wallet address..."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
          onClick={handleCheckBalance}
        >
          Check
        </button>
      </div>
      <div className="grid gap-4">
        {tokens.length === 0 ? (
          <p className="text-gray-500">No tokens found or invalid address.</p>
        ) : (
          tokens.map((token, index) => (
            <div key={index} className="border p-3 rounded flex justify-between">
              <span className="font-semibold">{token.symbol}</span>
              <span>{token.balance}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
