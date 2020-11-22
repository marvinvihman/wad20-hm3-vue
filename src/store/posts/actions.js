import Axios from 'axios';

export function getPosts({ commit }){
    Axios.get('https://private-517bb-wad20postit.apiary-mock.com/posts')
        .then(response => {
            commit("setPosts", response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
}