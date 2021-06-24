let requestUrl = './carousel.json';
let request = new XMLHttpRequest();
request.overrideMimeType("application/json");
request.open('GET',requestUrl);
request.responseType = 'text';
request.send();

request.onreadystatechange = function () {
    if (request.status === 200) {
        let jsonData = JSON.parse(request.responseText);
        showUrl(jsonData);
    }
};

request.open("GET", requestUrl, true);
request.send();

function showUrl(data) {
    let inner = '';

    for (let i in data) {
        let img = document.createElement("IMG");
        img.setAttribute("src", data[i].url);
        img.setAttribute("width", 256);
        img.setAttribute("height", 256);
        document.getElementById('slider-line').appendChild(img);
    }

    let offset = 0;
    const sliderLine = document.querySelector('#slider-line');

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
}



