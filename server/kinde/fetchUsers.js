import 'dotenv/config';

export const getUsers = async () => {
    let users = null;
    await fetch('https://euro2024.kinde.com/api/v1/users', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${process.env.KINDE_TOKEN}`
        }
    })
        .then(function(res) {
            return res.json();
        }).then(function(body) {
            users = body;
    })
    return users;
}