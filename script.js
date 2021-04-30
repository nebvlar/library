let myLibrary = [];

class Book{
    constructor(title, author, pages, status){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
}

function openForm(){
    document.querySelector("#myForm").style.display = "block";
    document.querySelector(".openButton").style.display = "none";
}

function closeForm(){
    document.querySelector("#myForm").style.display = "none";
    document.querySelector(".openButton").style.display = "block";
}

function saveBook(event){
    bookForm = document.forms["bookForm"]
    title = bookForm.elements["title"].value;
    author = bookForm.elements["author"].value
    pages = bookForm.elements["pages"].value;
    status = bookForm.elements["status"].checked
    newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook)
    event.preventDefault();
}

function addBookToLibrary(){
    for(let i = 0; i < myLibrary.length; i++){
        wrapper = document.getElementById('wrapper');
        bookContainer = document.createElement('div');
        bookTitle = document.createElement('h3');
        bookTitle.innerHTML = title;
        bookContainer.appendChild(bookTitle);
        bookAuthor = document.createElement('h4');
        bookAuthor.innerHTML = author;
        bookContainer.appendChild(bookAuthor);
        bookPages = document.createElement('h4');
        bookPages.innerHTML = pages;
        bookContainer.appendChild(bookPages);
        bookStatus = document.createElement('button');
        bookStatus.innerHTML = status;
        bookContainer.appendChild(bookStatus)
        wrapper.appendChild(bookContainer);
    }
}

function render(){
    saveBook(event);
    addBookToLibrary();
}