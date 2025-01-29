import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/proxy', async (req, res) => {
  const targetUrl = req.query.url;

  if (!targetUrl) {
    return res.status(400).json({ error: 'Missing "url" query parameter' });
  }

  try {
    const response = await fetch(targetUrl);
    const data = await response.text(); // Use `.json()` if the API returns JSON

    res.send(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to fetch data from the target URL' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running at http://localhost:${PORT}`);
});
