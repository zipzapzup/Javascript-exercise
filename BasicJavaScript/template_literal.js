const name = 'John';
const age = 33;
const job = 'Web Developer';
const city = 'Sydney';

let html;

// Template Literal are string literals which you use a template
// To display information

// Without template strings (ES5)
html = '<ul><li>Name :' + name + '</li><li>Age: ' + age + '</li><li>' + job +  
'</li><li>City: ' + city + ' </li></ul>';

html = '<ul>' + 
        '<li>Name: ' + name + '</li>' +
        '<li>Name: ' + age + '</li>' +
        '<li>Name: ' + job + '</li>' +
        '<li>Name: ' + city + '</li>';

// With Template Strings

function hello(){
    return 'Hello';
}

html = `
    <ul>
        <li>Name: ${name} </li>
        <li>Age: ${age} </li>
        <li>Job: ${job} </li>
        <li>City: ${city} </li>
        <li>Country: Australia </li>
        <li>${2 + 2} </li>
        <li>${hello()}</li>
        <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
    </ul>
`;

// ${} is template literals.
// More definition in MDN web docs in Mozilla: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// Template literals are string literally that allow expressions.
// To use Template Literals, you need to enclose the string via a back tick


document.body.innerHTML = html;