let myLibrary = [];

class Book{
    constructor(title, author, pages, status){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
}

function saveBook(event){
    event.preventDefault()
    bookForm = document.forms['bookForm'];
    title = bookForm.elements['title'].value;
    author = bookForm.elements['author'].value;
    pages = bookForm.elements['pages'].value;
    status = bookForm.elements['status'].checked;
    const book = new Book(title, author, pages, status);
    myLibrary.push(book);
    showBooks()
}

function openForm(){
    document.querySelector("#myForm").style.display = "block";
    document.querySelector(".openButton").style.display = "none";
}

function closeForm(){
    document.querySelector("#myForm").style.display = "none";
    document.querySelector(".openButton").style.display = "block";
}

function showBooks(){
    for(let i = 0; i < myLibrary.length; i+= 1){
        const bookShelf = document.querySelector('#wrapper');
        bookContainer = document.createElement('div');
        bookContainer.classList.add('book');
        bookContainer.id = 'book'

        bookTitle = document.createElement('h3');
        bookTitle.classList.add('title');
        bookTitle.textContent = title;
        bookTitle.id = 'title'
        bookContainer.appendChild(bookTitle);

        bookAuthor = document.createElement('h4');
        bookAuthor.classList.add('author');
        bookAuthor.textContent = author;
        bookAuthor.id = 'author'
        bookContainer.appendChild(bookAuthor);

        bookPages = document.createElement('h4');
        bookPages.classList.add('pages');
        bookPages.textContent = pages;
        bookPages.id = 'pages'
        bookContainer.appendChild(bookPages);

        bookStatus = document.createElement('button');
        bookStatus.classList.add('status');
        bookStatus.id = 'status'
        bookContainer.appendChild(bookStatus);
        if(bookForm.elements['status'].checked === true){
            bookStatus.textContent = 'Read';
        } else if(bookForm.elements['status'].checked === false){
            bookStatus.textContent = 'Unread';
        };

        removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.id = 'remove'
        removeButton.classList.add('removeButton');
        removeButton.addEventListener('click', removeBook())
        bookContainer.appendChild(removeButton);

        bookShelf.appendChild(bookContainer);
    }
}
function removeBook(){
    myLibrary.splice(target.dataset.ID, 1);
}


