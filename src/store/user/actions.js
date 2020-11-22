import Axios from 'axios';

export function getUser({ commit }) {
    let url = 'https://private-517bb-wad20postit.apiary-mock.com/users/1';
    Axios.get(url).then(function (response) {
        let userData = {
            firstname: response.data.firstname,
            lastname: response.data.lastname,
            email: response.data.email,
            photoURL: response.data.avatar
        }
        commit("setUserData", userData);
    })
        .catch(function (error) {
            console.log(error);
        });
}