import jwt from 'jsonwebtoken';

export const createJWT = (id: string) => {
    return new Promise((resolve, reject) => {
        const payload = {id};
    
        if(!process.env.SECRETORPRIVATEKEY) throw new Error('Secret or private key not found');

        jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '1h',
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('Couldnt create token')
            } else {
                resolve(token);
            }
        })
    });
};