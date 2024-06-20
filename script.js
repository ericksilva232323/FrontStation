function loginWithGitHub(){
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=Ov23li4qQEfzbGtr6aZo&scope=user';
}

const urlParams = new URLSearchParams( window.location.search);
const error = urlParams.get('error');
if (error === 'acess_denied') {
    window.location.href = 'login.html';
}