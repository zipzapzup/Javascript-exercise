// JS 6
// Book Constructor

function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


// UI Constructor
function UI() {

    UI.prototype.addBookToList = function(book){
        const list = document.querySelector('#book-list');
        // Create TR element
        const row = document.createElement('tr');
        // Insert collumn 
        row.innerHTML =  `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href='#' class='delete'>X<a></td>
            `;

        list.appendChild(row);
    }

    UI.prototype.clearFields = function(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#ISBN').value = '';

    }
}


// Event Listener
document.querySelector("#book-form").addEventListener('submit', function(e){
    // Get the values from the form
    const title = document.querySelector('#title').value,
          author = document.querySelector('#author').value,
          isbn = document.querySelector('#ISBN').value;

    // Instantiate book from the field on the above
    const book = new Book(title, author, isbn);


    // Instantiate UI
    const ui = new UI();

    // Add book to list
    ui.addBookToList(book)

    // Clear UI Fields
    ui.clearFields();

    e.preventDefault();
});