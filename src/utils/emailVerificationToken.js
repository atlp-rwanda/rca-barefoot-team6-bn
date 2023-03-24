import crypto from 'crypto';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 962e3ca (ft(Reset-Password): request changing pass via email [Inprogress # 184638375])
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
export async function generateEmailVerificationToken (email) {
  const token = crypto.randomBytes(32).toString('hex');
  const hash = crypto.createHash('sha256').update(token).digest('hex');
  const timestamp = new Date().getTime();
  const data = `${email}:${hash}:${timestamp}`;
  const verificationToken = Buffer.from(data).toString('base64');
  return verificationToken;
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
export async function generateEmailVerificationToken(email) {
    const token = crypto.randomBytes(32).toString('hex');
    const hash = crypto.createHash('sha256').update(token).digest('hex');
    const timestamp = new Date().getTime();
    const data = `${email}:${hash}:${timestamp}`;
    const verificationToken = Buffer.from(data).toString('base64');
    return verificationToken;
}
>>>>>>> 3fa7883 (Separated Functions)
=======
>>>>>>> 962e3ca (ft(Reset-Password): request changing pass via email [Inprogress # 184638375])
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
