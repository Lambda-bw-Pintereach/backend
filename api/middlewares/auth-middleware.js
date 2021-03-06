const Users = require("../users/users_model")
const { findBy } = require("../users/users_model")

async function checkUsernameFree(req, res, next) {
    try {
        const existing = await Users
            .findBy({ username: req.body.username })
        if (!existing.length) {
            next()
        } else {
            next({ "message": "This username is not available" })
        }
    } catch (err) {
        next(err)
    }
}

function checkPayload(req, res, next) {
    const { username, password } = req.body;
    const valid = Boolean(username && password);
    if (valid) {
        next();
    } else {
        res.status(422).json({
            message: "username and password required",
        });
    }
}

const checkUsernameExists = async (req, res, next) => {
    try {
        const [user] = await findBy({ username: req.body.username })
        if (!user) {
            next({ status: 401, message: "Invalid Credentials" })
        }
        else {
            req.user = user
            next()
        }
    } catch (err) {
        next(err)
    }
}

module.exports = {
    checkPayload,
    checkUsernameExists,
    checkUsernameFree,
}
