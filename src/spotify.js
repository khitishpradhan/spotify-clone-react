

export const authEndpoint = 'https://accounts.spotify.com/authorize';

 const redirectUrl = window.location.origin + '/'; //where are you running your app (local react by default is http://localhost:3000/

const clientId = 'befacc339866488099d1997e98b33d9b'; // clintId you can get at https://developer.spotify.com/dashboard

const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state'
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scopes=${scopes.join('%20')}&response_type=token&show_dialog=true`;

export const getAccessTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial
        }, {});
};