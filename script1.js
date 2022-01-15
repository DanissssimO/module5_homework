let num = prompt('Input value');

num = +num;

alert(typeof num);

if (num % 2 === 0) {

    alert('even');

} else if (num % 1 === 0) {

    alert('odd');

} else {

    alert('Упс, кажется, вы ошиблись')

}

if (isNan(num)) {

    alert('NaN')
    
}