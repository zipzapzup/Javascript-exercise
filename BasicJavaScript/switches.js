const color = 'yellow';

// Switches is used to test cases
// It is a method similar to if else statement

switch(color){
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    case 'yellow':
        console.log('Color is yellow');
        break;
    case 'black':
        console.log('Color is black');
        break;
    default:
        console.log('Its a different color - not black, blue, red, yellow');
        break;

}


switch(new Date().getDay()){
    case 0:
    day = 'Sunday';
    break;
    case 1:
    day = 'Monday';
    break;
    case 2:
    day = 'Tuesday';
    break;
    case 3:
    day = 'Wednesday';
    break;
    case 4:
    day = 'Thursday';
    break;
    case 5:
    day = 'Friday';
    break;
    case 6:
    day = 'Saturday';
    break;
    case 7:
    day = 'Sunday';
    break;
}
console.log(day);