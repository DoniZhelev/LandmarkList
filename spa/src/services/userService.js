
const url = `http://localhost:5000/api/auth`

export const create = (email, password, repeatPassword) =>{
    let user = {
        email,
        password,
        repeatPassword,
    };
    return fetch(`${url}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(user)
    });
};