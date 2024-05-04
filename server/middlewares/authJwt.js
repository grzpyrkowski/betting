import jwt from 'jsonwebtoken';
import {cookieSecret} from "../secret/creds.js";
import db from "../models/index.js";
const User = db.user;
const Role = db.role;

function verifyToken(req, res, next) {
    let token = req.session.token;

    if (!token) {
        return res.status(403).send({message: "No token provided"});
    }

    jwt.verify(token, cookieSecret, (err, decoded) => {
        if (err) {
            return res.status(401).send({message: err.message});
        }
        req.userId = decoded.id;
        next();
        });
}

function isAdmin(req, res, next) {
    User.findById(req.userId).exec((err, user) => {
        if (err) {
            res.status(500).send({message: err.message});
            return;
        }
        Role.find(
            {
                _id: {$in: user.roles},
            },
            (err, roles) => {
                if (err) {
                    res.status(500).send({message: err.message});
                    return;
                }
                for (let i = 0; i < roles.length; i++) {
                    if (roles[i].name === "admin") {
                        next();
                        return;
                    }
                }
                res.status(403).send({message: "Require Admin role to access"});
                return;
            }
        );
    });
}

function isMod(req, res, next) {
    User.findById(req.userId).exec((err, user) => {
        if (err) {
            res.status(500).send({message: err.message});
            return;
        }
        Role.find(
            {
                _id: {$in: user.roles},
            },
            (err, roles) => {
                if (err) {
                    res.status(500).send({message: err.message});
                    return;
                }
                for (let i = 0; i < roles.length; i++) {
                    if (roles[i].name === "mod") {
                        next();
                        return;
                    }
                }
                res.status(403).send({message: "Require Mod role to access"});
                return;
            }
        );
    });
}

export const authJwt = {verifyToken, isAdmin, isMod}

