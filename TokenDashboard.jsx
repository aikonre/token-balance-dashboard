import { useState } from 'react';

// Mock wallet data
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCheckBalance = () => {
    setLoading(true);
    setError('');
    setTokens([]);

    // Simulate delay
    setTimeout(() => {
      if (!address.trim()) {
        setError('Please enter a wallet address.');
      } else {
        const result = mockData[address.trim()];
        if (result) {
          setTokens(result);
        } else {
          setError('No tokens found for this address.');
        }
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">🧮 Token Balance Checker</h1>

      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter wallet address..."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          onClick={handleCheckBalance}
        >
          {loading ? 'Checking...' : 'Check'}
        </button>
      </div>

      {error && (
        <p className="text-red-500 mb-4">{error}</p>
      )}

      <div className="grid gap-3">
        {tokens.map((token, index) => (
          <div
            key={index}
            className="border p-3 rounded flex justify-between bg-white shadow-sm"
          >
            <span className="font-semibold text-blue-700">{token.symbol}</span>
            <span>{token.balance}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
