const A = [
    'a',
    'b',
    'c'
];

const B = [...A]; //padaro unique kopija
const addStars = word => console.log('* ' + word + ' *');

Array.prototype.go = function(fun) {
    for (let i = 0; i < this.length; i++) {
        fun(this[i]);
    }
}

animals = [
    'racoon',
    'beaver',
    'moose',
    'fox'
]

B.push('');

B.go(addStars);
B.forEach(addStars);

console.clear();

const fr = B.forEach(l => console.log(l)); //neturi returno / rezultato

const mr = B.map(l => l + '----->'); // grazina nauja unique kopija tam tikro masyvo

console.log(fr);
console.log(mr);

console.clear();
const filtered = animals.filter(l => l != 'beaver').map(l => l + ' *') // istrinti beaver ir gale pridet zvaigzdute
//const filtered = animals.filter(l => l.length > 4); // grazinti tik ilgesnius zodzius nei 4 simboliai
//console.log(B);
console.log(filtered);

//REACT

const out = animals.map(a => '<i style="color: crimson; display: block;">' + a + '</i>');

//react inside

let html = '';
out.forEach(a => html += a);

document.querySelector('h1').innerHTML = html;

console.clear()

const state = [
    'racoon',
    'beaver',
    'moose',
    'fox'
];

//state.push('wolf'); //keicia orginala
//state.sort(); // keicia orginala

const an = [...state];


console.log([...state, 'wolf'].sort());

console.clear();

an.sort((a, b) => { //didziosios raides eina pirmiau uz mazasias, sortas nuo a iki z
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});

an.sort((a, b) => b.localeCompare(a));

const dig = [88, 34, 10, 158, 1]; //sort nuo maz iki didz

dig.sort((a, b) => a - b);
console.log(dig);

console.log(an);

console.clear();

const man = {};
man.name = 'John',
man.surname = 'Smith';

const man2 = {...man};  //pasidarom unikalia objekto kopija
man2.name = 'Zanas';


const man3 = {
    name: 'Petras',
    surname: 'Lioliovas'
}

const name = 'Lina';
const surname = 'Lioliove';

const man4 = {
    name,
    surname
}

const prop = 'surname';

const man5 = {}

man5.name = 'Bronius';
man5[prop] = 'Kisas'

console.log(man, man2, man3, man4, man5);

const house = [man, man2, man3, man4, man5];

house.sort((a , b) => {
    if (a.surname > b.surname) return 1;
    if (a.surname < b.surname) return -1;
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
})

console.log(house);

