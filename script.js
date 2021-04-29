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
    console.log(myLibrary)

    event.preventDefault();
   
}

