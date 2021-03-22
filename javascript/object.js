const carro = {
    carro: 'Carro',
    marca: 'Marca',
}

const honda = Object.create(carro);
honda.marca = 'Honda';
honda.carro = 'HRV';

const friends = new Object({
    Thomas_Shelby: 'shelby_family',
    Christopher_Nolan: 'chris_nolan',
    Ragnar_Lothbrock: 'the_best_viking',
});

const viking = {};

Object.defineProperties(viking, {
    sword: {
        value: true,
        configurable: false
    },
    axe: {
        value: true,
        configurable: false
    },
    shield: {
        value: true,
        configurable: false
    }
});

console.log(viking);


console.log(Object.keys(carro)); // return {"carro", "marca"} 
console.log(Object.entries(carro)); // return {["carro", "Carro"], ["marca", "Marca]"}


const fruta = ["Banana"];
console.log(Object.getPrototypeOf(fruta)); // [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]

const fruta2 = ["Banana"];
console.log(Object.is(fruta, fruta2)); // return false



Object.freeze(carro); // impede que o valor das propriedades sejam alteradas
Object.preventExtensions(carro); // previne a adição de novas propriedades 
Object.seal(carro); // permite que as propriedades sejm alteradas, porém não permite que alguma delas seja deletada 


console.log(Object.isFrozen(carro)); // true
console.log(Object.isExtensible(carro)); // true
console.log(Object.isSealed(carro)); // true



