var array = ['noddjs', {}, 10, true];
var node = array[0];
var obj = array[1];
var bool = array[3];

const array = ['noddjs', {}, 10, true];
const [node, obj, , bool] = array;

let a, b, rest;
[a, b] = [10, 20];
console.log(a);
console.log(b);

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a);
console.log(b);
console.log(rest);

var x = 1;
var y = 3;
var w ;

[x, y] = [y, x];
console.log(x);
console.log(y);

({a, b} = { a:10, b: 20});
console.log(a);
console.log(b);

({ a, b, ...rest } = {a: 10, b: 20, c: 30, d: 40});
console.log(a);
console.log(b);
console.log(rest);

var candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy: function () {
        this.status.count--;
        return this.status.count;
    },
};
var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;

const candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy() {
        this.status.count--;
        return this.status.count;
    },
};
const { getCandy, status: {count}} = candyMachine;