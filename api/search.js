export default async function handler(req, res) {
  const { query } = req.query;
  if (!query) return res.status(400).json({ status: false, message: 'Query kosong' });

  try {
    const response = await fetch(`https://api.botcahx.eu.org/api/search/xvideos?query=${encodeURIComponent(query)}&apikey=DIKZZ`);
    const json = await response.json();

    if (!json.result) return res.status(404).json({ status: false, message: 'Tidak ditemukan' });

    res.status(200).json({ status: true, result: json.result });
  } catch (e) {
    res.status(500).json({ status: false, message: 'Terjadi error', error: e.message });
  }
}
