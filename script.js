//library array
let myLibrary = []

//book constructor
class Book{
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

//opens the new book form on button click and hides the new book button
function openForm(){
    document.querySelector('#myForm').style.display = 'block';
    document.querySelector('.openButton').style.display = 'none';
};

//closes the new book form and shows the new book button once the cancel button is clicked
function closeForm(){
    document.querySelector('#myForm').style.display = 'none';
    document.querySelector('.openButton').style.display = 'inline-block';
}

//creates new book from user input and pushes it to the array
function saveBook(event){
    event.preventDefault();
    bookForm = document.forms['bookForm'];
    title = bookForm.elements['title'].value;
    author = bookForm.elements['author'].value;
    pages = bookForm.elements['pages'].value;
    read = bookForm.elements['read'].checked;

    newBook = new Book(title, author, pages, read);
    
    myLibrary.push(newBook);
    
    setLocal();
    update();
}

//creates the book elements that will be shown on the page
function update(){
    const bookShelf = document.querySelector('#bookShelf');
    const books = document.querySelectorAll('.book');

    books.forEach(book => bookShelf.removeChild(book))

    for(let i = 0; i < myLibrary.length; i++){
        createBook(myLibrary[i]);
    }
};

//creates the elements for the books
function createBook(book){
    const bookShelf = document.querySelector('#bookShelf');
    //BOOK CONTAINER
    const bookContainer = document.createElement('div');
    bookContainer.classList.add('book');
    bookContainer.classList.add('bookContainer');
    bookContainer.setAttribute('id', myLibrary.indexOf(book));
    //BOOK TITLE
    const bookTitle = document.createElement('div');
    bookTitle.classList.add('title');
    bookTitle.textContent = book.title;
    bookContainer.appendChild(bookTitle);
    //BOOK AUTHOR
    const bookAuthor = document.createElement('div');
    bookAuthor.classList.add('author');
    bookAuthor.textContent = book.author;
    bookContainer.appendChild(bookAuthor);
    //BOOK PAGES
    const bookPages = document.createElement('div');
    bookPages.classList.add('pages');
    bookPages.textContent = book.pages + ' pages';
    bookContainer.appendChild(bookPages);
    //BOOK LABEL
    const statusLabel = document.createElement('label');
    statusLabel.classList.add('statusLabel');
    statusLabel.classList.add('switch');
    bookContainer.appendChild(statusLabel);
    //BOOK STATUS
    const bookRead = document.createElement('input');
    bookRead.setAttribute('type', 'checkbox');
    bookRead.classList.add('status');
    statusLabel.appendChild(bookRead);
    //BOOK SPAN
    let bookSpan = document.createElement('span');
    bookSpan.classList.add('bookSpan');
    bookSpan.classList.add('slider');
    statusLabel.appendChild(bookSpan)
    //BOOK STATUS DISPLAY
    if (book.read === bookForm.elements['read'].checked === true){
        bookRead.checked = true;
    } else if (book.read === bookForm.elements['read'].checked === false){
        bookRead.checked === false
    }; 
    //REMOVE BUTTON
    const removeButton = document.createElement('button');
    removeButton.classList.add('removeButton');
    removeButton.textContent = 'X';
    removeButton.classList.add('removeButton');
    bookContainer.appendChild(removeButton);

    bookShelf.appendChild(bookContainer);

    //remove button event listener
    removeButton.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(book),1);
        setLocal();
        update();
    });

    //read status toggle 
    bookRead.addEventListener('click', () => {
        book.read = !book.read;
        setLocal();
        update();
    });

};

//sets local storage data
function setLocal(){
    localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
};

//restores local storage when refreshed
function restoreLocal(){
    if(!localStorage.myLibrary){
        update();
    } else {
        let objects = localStorage.getItem('myLibrary');
        objects = JSON.parse(objects);
        myLibrary = objects;
        update();
    }
};

var modal = document.getElementById('id01');

//Closes menu when clicked outside
window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none";
    }
}

restoreLocal();

