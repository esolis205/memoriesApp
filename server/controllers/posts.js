import PostMessage from "../modules/postMessage.js";

const name = 'Enrique';
name.toUpperCase();

export const getPosts = (req, res) => {
    res.send(`Welcome ${name} !!`);
};
export const createPost = (req, res) => {
    res.send('Post Creation');
};