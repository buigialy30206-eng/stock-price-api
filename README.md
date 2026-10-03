# stock-price-api

Real-time stock quotes with one GET call — price, daily change, volume,
exchange.

## Install

```bash
npm install github:buigialy30206-eng/stock-price-api
```

## Usage

```js
import { getQuote } from "stock-price-api";

const quote = await getQuote("AAPL", { apiKey: process.env.API_MARKET_KEY });
console.log(quote.price); // 333.69
```

```json
{
  "symbol": "AAPL",
  "name": "Apple Inc.",
  "price": 333.69,
  "change": 3.37,
  "change_percent": 1.02,
  "volume": 33245500,
  "exchange": "NASDAQ",
  "currency": "USD"
}
```

## API key

Get a key (free tier available) at:
https://api.market/store/viv-data/stock

Or set it once as an environment variable and omit `options.apiKey`:

```bash
export API_MARKET_KEY=your_key
```

## License

MIT
