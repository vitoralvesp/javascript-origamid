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

console.log(viking)