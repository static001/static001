window.isDev = window.location.href.indexOf('/visual-ui') >= 0;
window.$website = {
    url: window.isDev ? '/js/visual' : '.',
    cdnPath: 'https://cdn.jsdelivr.net/gh/static001/static001@master'
}