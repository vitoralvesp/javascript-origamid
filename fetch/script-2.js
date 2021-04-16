const image = fetch('./flowers.jpg');

image.then(i => i.blob())
.then(body => {
    const blobUrl = URL.createObjectURL(body);
    const imgDom = document.querySelector('img');
    imgDom.src = blobUrl;
});