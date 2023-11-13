import { kv } from '@vercel/kv';

export default async function handler(request, response) {
    if (request.method === "POST") {
        let email = request.body.email;
        kv.rpush("emails", email);
        return response.status(200).json(email);
    } else if (request.method === "GET") {
        let emails = await kv.lrange("emails", 0, -1);
        return response.status(200).json(emails);
    }
}
