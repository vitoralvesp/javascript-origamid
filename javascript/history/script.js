console.log(window.history);
console.log(window.history.back());
console.log(window.history.forward());


window.history.pushState(null, null, 'sobre.html');
window.addEventListener('popstate', () => {
    console.log(Teste);
})


const links = document.querySelectorAll('a');

function handleClick(event) {
    event.preventDefault();
    fetchPage(event.target.href);
    window.history.pushState(null, null, event.target.href);
}

async function fetchPage(url) {
    const pageResponse = await fetch(url);
    const pageText = await pageResponse.text(); 
    
    console.log(pageResponse);    
    console.log(pageText);    
}

function replaceContent(newText) {
    const newHTML = document.createElement('div');
    
    newHTML.innerHTML = newText;
    
    const oldContent = document.querySelector('.content');
    const newContent = newHTML.querySelector('.content');
    
    oldContent.innerHTML = newContent.innerHTML;
    document.title = newHTML.querySelector('.title').innerText;
}

window.addEventListener('popstate', () => {
    fetchPage(window.location.href);
})

links.forEach(link => {
    link.addEventListener('click, handleClick');
})