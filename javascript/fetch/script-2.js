const image = fetch('./flowers.jpg');

image.then(i => i.blob())
.then(body => {
    const blobUrl = URL.createObjectURL(body);
    const imgDom = document.querySelector('img');
    imgDom.src = blobUrl;
});

// JSON
const json = fetch('https://viacep.com.br/ws/01001000/json/');

json.then(i => {
    const i2 = i.clone();
    i.text().then((text) => {
        console.log(text)
    })
    i2.json().then((json) => {
        console.log(json);
    })
})
.then(body => {
    console.log(body);
})

// Headers
image.then(response => {
    console.log(response);
    response.headers.forEach(console.log);
});

// Status
image.then(response => {
    console.log(response.status);
    if(response.status === 404) {
        return 'Página inexistente'
    }
})

