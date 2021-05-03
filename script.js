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
    newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);
    setData();
    render()
}

function openForm(){
    document.querySelector("#myForm").style.display = "block";
    document.querySelector(".openButton").style.display = "none";
}

function closeForm(){
    document.querySelector("#myForm").style.display = "none";
    document.querySelector(".openButton").style.display = "block";
}

function render(){
    bookShelf = document.querySelector('#wrapper');
    const books = document.querySelectorAll('.book');
    books.forEach(book => bookShelf.removeChild(book))
    for (let i = 0; i < myLibrary.length; i++){
        createBook(myLibrary[i]);
    }
}

function createBook(item){
        bookShelf = document.querySelector('#wrapper');
        bookContainer = document.createElement('div');
        bookContainer.classList.add('book');
        bookContainer.setAttribute('id', myLibrary.indexOf(item))

        bookTitle = document.createElement('h3');
        bookTitle.classList.add('title');
        bookTitle.textContent = item.title;
        bookTitle.id = 'title'
        bookContainer.appendChild(bookTitle);

        bookAuthor = document.createElement('h4');
        bookAuthor.classList.add('author');
        bookAuthor.textContent = item.author;
        bookAuthor.id = 'author'
        bookContainer.appendChild(bookAuthor);

        bookPages = document.createElement('h4');
        bookPages.classList.add('pages');
        bookPages.textContent = item.pages;
        bookPages.id = 'pages'
        bookContainer.appendChild(bookPages);

        bookStatus = document.createElement('button');
        bookStatus.classList.add('status');
        bookStatus.id = 'status'
        bookContainer.appendChild(bookStatus);
        if(item.status === true){
            bookStatus.textContent = 'Read';
        } else if(item.status === false){
            bookStatus.textContent = 'Unread';
        };

        removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.id = 'remove'
        removeButton.classList.add('removeButton');
        bookContainer.appendChild(removeButton);

        bookShelf.appendChild(bookContainer);
        removeButton.addEventListener('click', () => {
            myLibrary.splice(myLibrary.indexOf(item),1);
            setData()
            render()
        });
    }


function setData(){
    localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary))
}

