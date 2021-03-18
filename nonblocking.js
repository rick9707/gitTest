function run() {
console.log('after 3 seconds');
}
console.log('start');
setTimeout(run, 2000);

console.log('end');