import Countdown from './countdown.js';

const diasParaONatal = new Countdown('25 December 2021 23:59:59 GMT-0300');

setInterval(() => {
    console.log(diasParaONatal.total);
}, 1000)