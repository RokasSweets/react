console.log('hello');

const fancySet = new Set();

fancySet.add('racoon');
fancySet.add('fox');
fancySet.add('moose');
fancySet.add('wolf');
fancySet.add('fox'); //SETE negali pridet to pacio dalyko du kartus, nebent tai OBJEKTAS

//fancySet.delete('fox');  //delete


console.log(fancySet.has('beaver'));
console.log(fancySet, fancySet.size); //SIZE vietoj lenght

const arr = [2, 3, 8, 1, 6, 7, 2, 2];

const arrSet = new Set(arr); //is array i seta

console.log(arrSet);

console.clear()


console.log(new Set([...fancySet].sort()));

const fancyArr = [...fancySet].sort();

fancySet.clear()

fancyArr.forEach(e => fancySet.add(e));

console.log(fancySet);

//MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP
console.clear()

fancyMap = new Map();

fancyMap.set('a1', 'racoon');
fancyMap.set('a2', 'fox')

console.log(fancyMap.get('a2'));
console.log(fancyMap.has('a2')); // tikrina pirma reiksme o ne galutini dalyka
console.log(fancyMap.has('fox')); // bus false del ^^^

fancyMap.forEach((a, i) => console.log(a, i));

const arrMap = [...fancyMap];

fancyMap.clear()

arrMap.sort((a, b) => a[1].localeCompare(b[1]));

arrMap.forEach(e => fancyMap.set(e[0], e[1]));

console.log(arrMap);

console.log(fancyMap.has({ a : 2 }));

console.clear();
//console.log(fancyMap);

for (const o of fancyMap) {
    console.log(o);
}

console.clear();

let shopArr = [
    {color: 'pink', dot: true, id:1},
    {color: 'skyblue', dot: true, id:2},
    {color: 'crimson', dot: false, id:3},
    {color: 'pink', dot: false, id:4}
];

console.log('3:', shopArr.filter(c => c.id == 3).shift()); //istraukti pagal id
console.log('4:', !!shopArr.filter(c => c.id == 4).length); // ar egzituoja? true ar false
shopArr.push({color: 'coral', dot: true, id:17}); //prideti
shopArr = shopArr.filter(c => c.id != 2) //istrinti



const shopMap = new Map([
    [1, {color: 'pink', dot: true, id:1}],
    [2, {color: 'skyblue', dot: true, id:2}],
    [3, {color: 'crimson', dot: false, id:3}],
    [4, {color: 'pink', dot: false, id:4}]
]);

console.log('3:', shopMap.get(3)); //gauti 3 spalva pagal id
console.log('8:', shopMap.has(8)); //ar turi 8id elementa, true or false
shopMap.delete(1) // istrinti pagal id
shopMap.set(17, {color: 'coral', dot: true, id:17}); // prideti i mapa 17id

console.log(shopArr);
console.log(shopMap);

console.clear();

// JSON STRINGIFY

let shopArrJson = JSON.stringify(shopArr);

console.log(shopArrJson);

// JSON PARSE

let shopArrJsonBack = JSON.parse(shopArrJson);

console.log(shopArrJsonBack);

console.log(JSON.stringify(shopArr)); //array gaunasi, map nesigauna

let d = 42;

djson = JSON.stringify(d);

console.log(djson);

const djsonBack = JSON.parse(djson);

console.log(djsonBack, typeof djsonBack);