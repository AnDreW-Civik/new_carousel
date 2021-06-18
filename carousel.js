let requestUrl = 'http://localhost:63342/carousel/carousel.json';
let request = new XMLHttpRequest();
request.open('GET',requestUrl);
request.responseType = 'text';
request.send();

request.onreadystatechange = function () {
    if ( request.readyState === 4 && request.status === 200) {
        let jsonData = JSON.parse(request.responseText);
        showUrl(jsonData);
    }
};

request.open("GET", requestUrl, true);
request.send();

function showUrl(data) {
    let output = "<img";

    for (let i in data.url) {
        output += "src=" + data.url[i] + "/>";
    }
    document.getElementById('urrrls').innerHTML = output;
}


let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function () {
    offset += 256;
    if (offset > 768) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
})
document.querySelector('.slider-prev').addEventListener('click', function () {
    offset -= 256;
    if (offset < 0) {
        offset = 768;
    }
    sliderLine.style.left = -offset + 'px';
})
