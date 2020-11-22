import Axios from 'axios';

export function getProfiles({ commit }){
    Axios.get('https://private-517bb-wad20postit.apiary-mock.com/profiles')
        .then(response => {
            commit("setProfiles", response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
}