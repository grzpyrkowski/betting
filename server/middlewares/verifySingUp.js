import db from "../models/index.js"
const ROLES = db.ROLES;
const User = db.user;

function checkDuplicates (req, res, next)  {
    User.findOne({
        name: req.body.name,
    }).exec((err, user) => {
        if (err) {
            res.status(500).send({message: err.message});
            return;
        }

        if (user) {
            res.status(400).json({message: "This username is already taken"});
            return;
        }

        User.findOne({
            email: req.body.email,
        }).exec((err, user) => {
            if (err) {
                res.status(500).send({message: err.message});
                return;
            }

            if (user) {
                res.status(400).json({message: "This email is already taken"});
                return;
            }

            next();
        });
    });
}

function checkRoles (req, res, next) {
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                res.status(400).send({
                    message: `Role ${req.body.roles[i]} does not exist`
                });
                return;
            }
        }
    }

    next();
}

const verifySignUp = {
    checkDuplicates,
    checkRoles
}

export default verifySignUp;