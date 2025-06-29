export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) return res.status(400).json({ status: false, message: 'URL kosong' });

  try {
    const response = await fetch(`https://api.botcahx.eu.org/api/download/xvideosdl?url=${encodeURIComponent(url)}&apikey=DIKZZ`);
    const json = await response.json();

    if (!json.result) return res.status(404).json({ status: false, message: 'Download gagal' });

    res.status(200).json({ status: true, result: json.result });
  } catch (e) {
    res.status(500).json({ status: false, message: 'Error internal', error: e.message });
  }
}
