const promise = new Promise(function(resolve, reject) {
    let condicao = true;
    if (condicao) {
        setTimeout(() => {
            resolve('Vitor');
        }, 1000);
    } else {
        reject(Error('Um erro ocorreu na promise'));
    }
});

promise.then(function(resolution) {
    console.log(resolution);
})