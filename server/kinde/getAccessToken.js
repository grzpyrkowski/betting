import 'dotenv/config';

const getAccessToken = async () => {
    try {
        const searchParams = {
            grant_type: "client_credentials",
            client_id: `${process.env.CLIENT_ID}`,
            client_secret: `${process.env.CLIENT_SECRET}`,
            audience: "https://euro2024.kinde.com/api"
        };

        const res = await fetch("https://euro2024.kinde.com/oauth2/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams(searchParams)
        });
        return await res.json();
    } catch (err) {
        console.error(err);
    }
}