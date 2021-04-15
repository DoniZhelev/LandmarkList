export const create = (title, description, imageURL) =>{
    let landmark = {
        title,
        description,
        imageURL
    };
    return fetch('http://localhost:5000/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(landmark)
    });
};