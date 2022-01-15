let arr = [3, 6, 0, null, undefined];

let num = 0;
let zero = 0;
let even = 0;
let odd = 0;

for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i] === 'number' || !isNaN(arr[i])) {
        num += 1;
        if(arr[i] === 0) {
            zero += 1;
        } else if(arr[i] % 2 === 0) {
            even += 1;
        } else {
            odd += 1;
        }
    }
}

console.log(`Массив содержит ${num} цифр, ${zero} нулей, ${even} четных чисел, ${odd} нечетных чисел`)