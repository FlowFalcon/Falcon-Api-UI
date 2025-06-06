const yt = require("yt-search");

module.exports = function (app) {
    app.get('/search/yts', async (req, res) => {
        try {
            const { q } = req.query;
            if (!q) {
                return res.json({ status: false, error: 'Query is required' });
            }
            const results = await yt(q);
            res.status(200).json({
                status: true,
                result: results.all
            });
        } catch (error) {
            res.status(500).send(`Error: ${error.message}`);
        }
    });
};