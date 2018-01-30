const users = require('../libs/repositories/users')

module.exports = {

    register (req, res) {
        users.create(req.body)
            .then(user => {
                res.send(req.body)
            })
            .catch(error => res.status(400).send({
                error: 'This email account is already in use'
            }))
    },

    login (req, res) {
        const email = req.body.email
        const password = req.body.password

        users.find({
            where: {
                email: email
            }
        })
        .then(user => {
            if (!user) {
                return res.status(403).send({
                    error: 'The login information was incorrect'
                })
            }

            const isPasswordValid = password === user.password
            if (!isPasswordValid) {
                return res.status(403).send({
                    error: 'The login information was incorrect'
                })
            }

            const userJson = user.toJSON()
            res.send({
                user: userJson
            })
        })
        .catch(error => res.status(500).send({
            error: 'An error has occurred trying to login'
        }))
    }
}
