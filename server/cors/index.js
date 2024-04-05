import cors from "cors";

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    headers: {
        'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
    }
}

export default cors(corsOptions);