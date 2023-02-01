console.log('Hello, hello');

const masyvas = [];
const skaicius1 = Math.floor(Math.random() * 11);
const skaicius2 = Math.floor(Math.random() * 11);
const skaicius3 = Math.floor(Math.random() * 11);
const skaicius4 = Math.floor(Math.random() * 11);
const skaicius5 = Math.floor(Math.random() * 11);
const skaicius6 = Math.floor(Math.random() * 11);
const skaicius7 = Math.floor(Math.random() * 11);
const skaicius8 = Math.floor(Math.random() * 11);
const skaicius9 = Math.floor(Math.random() * 11);
const skaicius10 = Math.floor(Math.random() * 11);

masyvas.push(skaicius1, skaicius2, skaicius3, skaicius4, skaicius5, skaicius6, skaicius7, skaicius8, skaicius9, skaicius10);

console.log(masyvas);

//2

const arr = [];
for(let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * (10 - 1 + 1)) + 1)
}

console.log(arr);


//----------

let raccons = 5;

if (raccons) {
    console.log('YES');
} else {
    console.log('NOPE');
}