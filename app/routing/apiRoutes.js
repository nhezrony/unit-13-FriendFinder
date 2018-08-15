const {
    users
} = require('../data/users')

module.exports = (app) => {
    app.get('/api/friends', (req, res) => res.json(users))

    app.post('/api/friends', (req, res) => {
        let userScore = req.body.scores
        let bestMatches = []
        users.forEach(user => {
            let diff = user.stats.map((x, index) => Math.abs(x - userScore[index]))
            let total = diff.reduce((sum, index) => sum + index, 0)
            bestMatches.push(total)
        })
        let bestMatch = users[bestMatches.indexOf(Math.min(...bestMatches))]
        res.json(bestMatch)
    })
}