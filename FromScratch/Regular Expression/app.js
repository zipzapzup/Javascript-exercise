// let re;
// re = /hello/i; // i = case insensitive
// re = /hello/g; // g = Global search, searches the entire paragraph

// REGULAR Expressions - Basics
// console.log(re);
// console.log(re.source);

// exec() - Return results in an array or null
// re will be the regular expressesion and the content inside exec is the data searched on
// const result = re.exec('hello world');

// console.log(result);
// console.log(result.index);

// // test() - Returns true or false
// const result = re.test('hello');
// console.log(result);

// match() - Returns result array or null
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);

// // search() - Returns index of the first match if not found returns -1
// const str = 'Hello There';
// const result = str.search(re);
// console.log(result);

// replace() - Return new string with some or all matches of a pattern
// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr);

// REGULAR Expressions - MetaCharacter Symbols

let re;

// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;          // ^ mean must start with
re = /World$/i;      // $ mean must ends with
re = /^hello$/i;     // ^$ mean must start and end with
re = /^h.llo$/i;     // . mean it matches any ONE Character
re = /h*llo/i;     // * Matches any character 0 or more time For example: "H___llo"
re = /gra?e?y/i;   // ? Optional character matches gray and grey
re = /gra?e?y\?/i;   // \ Escape character


// Brackets [] - Character Sets
re = /gr[ae]y/i;        // Must be an a or e
re = /[GF]]ray/i;       // Must be a G or F    
re = /[^GF]]ray/i;      // Match anything EXCEPT a G or F, if ^ if isnide []
re = /[A-Z]]ray/i;      // Match any uppercase letter
re = /[a-z]]ray/i;      // Match any uppercase letter
re = /[A-Za-z]]ray/;      // Match any letter
re = /[0-9]ray/;        // Match any digit (multiple digit and the ending finish at ray)

// Braces {} - Quantifiers
re = /Hel{2}o/i;        // Must occur exactly {n} amount of times, in this case l is 2.
re = /Hel{2,4}o/i;      // A comma add ranges, it must occur 2 to 4 times number of ranges.
re = /Hel{2,}o/i;       // A comma with out the range, mean it need to occur at least 2 times and can go more than 2.

// Parentheses () - Grouping
re = /^([0-9]x){3}$/      // () Brackets group the re = ([0-9]x){3} mean 9x0x7x works

// Shorthand Character Classes
re = /\w/;              // \w Word character - alphanumeric or _
re = /\w+/;              // \w+  one or more Character Example: one ! will not match
re = /\W/;              // Uppercase W is non-word character class Example: !@#)
re = /\d/;              // Match any digit
re = /\d+/;             // Match any digit 0 or more times
re = /\D/;              // Non- Digit matches
re = /\s/;              // Match whitespace char, space, tab
re = /\S/;              // Match non-whitespace character
re = /Hell\b/;          // Word boundary

// Assertions
re = /x(?=y)/;          // Match x only if followed by y For example xy in the string
re = /x(?!y)/;         // Match x only if NOT followed by y


// String to match
const str = 'Hello, welcome xyto Heaven';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str){
    if(re.test(str)){
        console.log(`RE Check: ${str} Matches ${re.source}`);
    } else {
        console.log(`RE Check: ${str} does not match ${re.source}`);
    }

}

reTest(re,str);