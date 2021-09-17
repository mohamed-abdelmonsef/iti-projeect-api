const app = require('express').Router()
const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')

app.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
            let user = await userModel.findOne({ email })
            if (user) {
                let match = await bcrypt.compare(password, user.password)
                if (match) {
                    let logged = true;
                    res.json({ message: 'Youve successfully logged in',logged })
                } else {
                    res.json({ message: 'Incorrect password', oldInputs: { email, password } })
                }
            } else {
                res.json({ message: 'account doesnt exist', oldInputs: { email, password } })
            }
    } catch (error) {
        res.json({ message: 'Catch Login error', error })

    }
})

module.exports = app