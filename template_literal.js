const name = 'John';
const age = 30;
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

html = `
    <ul>
        <li>Name: ${name} </li>
        <li>Age: ${age} </li>
        <li>Job: ${job} </li>
        <li>City ${city} </li>

    </ul>
`;


document.body.innerHTML = html;