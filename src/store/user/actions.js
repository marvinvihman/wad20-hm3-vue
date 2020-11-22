import router from '../../router'
import Axios from 'axios';

export function login({ commit }) {
    let url = 'https://private-517bb-wad20postit.apiary-mock.com/users/1';
    Axios.get(url).then(function (response) {
        let userData = {
            firstname: response.data.results[0].firstname,
            lastname: response.data.results[0].lastname,
            email: response.data.results[0].email,
            photoURL: response.data.results[0].avatar
        }
        commit("setUserData", userData)
        router.push('/main')
    })
        .catch(function (error) {
            console.log(error)
        });
}