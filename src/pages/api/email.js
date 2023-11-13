import kv from '@vercel/kv';

export default function handler(request, response) {
    if (request.method === "POST") {
        let email = request.body.email

        return response.status(200).json(email);
    } else if (request.method === "GET") {
        return response.status(200).json("email submission endpoint");
    }
}
