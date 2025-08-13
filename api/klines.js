export default async function handler(req, res) {
  const response = await fetch("https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=100");
  const data = await response.json();
  res.status(200).json(data);
}
