// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
let paragraphElement = document.querySelectorAll('p').length;
console.log(paragraphElement); // return 4 (INCORRECT)

paragraphElement = document.querySelectorAll('p');

const totalCharacters = Array.prototype.reduce.call(paragraphElement, (item, accumulator) => {
    // console.log(item); // return p element
    // return accumulator + item.innerText.length;
}, 0); 

console.log(totalCharacters) // return 655 (CORRECT)



// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function createElement(tagElement, classElement, content) {
    let htmlElement = document.createElement(tagElement);
    classElement ? htmlElement.classList.add(classElement) : null;
    content ? htmlElement.innerHTML = content : null;

    return htmlElement;
}

console.log(createElement('h1', 'hello', 'Hello, World!')); // return <h1 class="hello">Hello, World!</h1>


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteúdo continuará dinâmico
const h1 = createElement.bind(null, 'h1', 'titulo');
console.log(h1('Curos de JavaScript')); // return <h1 class="titulo">Curos de JavaScript</h1>