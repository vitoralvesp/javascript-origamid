const doc = fetch('./doc.txt');

doc.then(resolucao => {
    resolucao.text().then((body) => {
        const conteudo = document.querySelector('./conteudo');
        conteudo.innerText = body;
        console.log(body); // return text
    });
});



const css = fetch('./style.css');

css.then(r => r.text())
.then(body => {
    const conteudo = document.querySelector('./conteudo');
    const style = document.createElement('style');
    style.innerHTML = body;
    conteudo.innerText = body;
})