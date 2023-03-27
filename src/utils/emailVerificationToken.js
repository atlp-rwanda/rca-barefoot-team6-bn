import crypto from 'crypto';

export async function generateEmailVerificationToken(email) {
    const token = crypto.randomBytes(32).toString('hex');
    const hash = crypto.createHash('sha256').update(token).digest('hex');
    const timestamp = new Date().getTime();
    const data = `${email}:${hash}:${timestamp}`;
    const verificationToken = Buffer.from(data).toString('base64');
    return verificationToken;
}

