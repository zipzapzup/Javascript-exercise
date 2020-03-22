const user = {email: 'jdoe@gmail.com'};


try {
    // First error is caught by the catch statement
    // Produce a Reference error
    // myFunction();

    // Produce Type Error
    // null.myFunction

    // Produce Syntax Error
    // eval('hello world');

    // Produce a URIError
    // decodeURIComponent('%');

    if(!user.name){
        throw new SyntaxError('User has no name');
    }

} catch (e) {
    console.log(e);
    console.log(e instanceof ReferenceError); 
    console.log(`User Error: ${e.message}`);
    // Console.log(`Error can be modified: ${e.message} ${e.name}`)


} finally {

    console.log('Finally runs regardless of results');

}

console.log('Program continues');