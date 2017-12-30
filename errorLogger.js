
window.addEventListener('error', function(e) {
    console.log(e);
    let url = 'http://cdn.nyanit.com/nyan2.gif'
    console.log('%c           ', `font-size: 100px; background: url(${url}) no-repeat;`);
}, true);