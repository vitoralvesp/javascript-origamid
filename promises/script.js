const promise = new Promise(function(resolve, reject) {
    let condicao = true;
    if (condicao) {
        resolve();
    } else {
        reject(Error('Um erro ocorreu na promise'));
    }
});

console.log(promise);