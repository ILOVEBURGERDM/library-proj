/*HTML ELEMENTS ADDITION*/
const newBookBtn = document.querySelector(".new-btn");
const dialogForm = document.querySelector("#form-dialog");
const formContainer = document.querySelector(".form-container");
const form = document.querySelector("form");
const submitBtn = document.querySelector("#submit-btn");
const readBtn = document.querySelector(".read-btn");
const library = document.querySelector(".books");
const cancel = document.querySelector("#cancel-button");
//input values
const inputTitle = document.querySelector("#input-title");
const inputAuthor = document.querySelector("#input-author");
const inputNumber = document.querySelector("#input-number");
const readToggle = document.querySelector("#readToggle").checked;

/* LIBRARY OBEJCTS LIST ITEM SECTION*/
//
document.querySelectorAll(".read-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const isRead = btn.classList.toggle("off");
    btn.textContent = isRead ? "Not Read" : "Read";
  });
});

//Turning form inputs into div
submitBtn.addEventListener("click", (event) => {
  event.preventDefault(); // only needed if the button is inside a <form>

  const bookInfo = {
    title: inputTitle.value,
    author: inputAuthor.value,
    pages: Number(inputNumber.value),
    read: readToggle.checked,
    id: crypto.randomUUID(),
  };

  library.appendChild(createBookItem(bookInfo));

  form.reset();
  dialogForm.close();
});

function createBookItem(book) {
  const item = document.createElement("div");
  item.classList.add("book-item");
  item.dataset.id = book.id;

  const name = document.createElement("h2");
  name.classList.add("book-name");
  name.textContent = book.title;

  const author = document.createElement("p");
  author.textContent = `by ${book.author}`;

  const pages = document.createElement("h3");
  const strong = document.createElement("strong");
  strong.textContent = `${book.pages} pages`;
  pages.appendChild(strong);

  const idP = document.createElement("p");
  idP.classList.add("book-id");
  const idLabel = document.createElement("strong");
  idLabel.textContent = "ID: ";
  idP.append(idLabel, book.id);

  const readBtn = document.createElement("button");
  readBtn.classList.add("read-btn");
  readBtn.classList.toggle("is-read", book.read);
  readBtn.textContent = book.read ? "Not read" : "Read";
  readBtn.addEventListener("click", () => {
    book.read = !book.read;
    readBtn.classList.toggle("off", book.read);
    readBtn.textContent = book.read ? "Not read" : "Read";
  });

  item.append(name, author, pages, idP, readBtn);
  return item;
}

/* FORM SECTION*/
//
//Showing the form
newBookBtn.addEventListener("click", () => {
  dialogForm.showModal(); // opens the form with a dimmed backdrop
});

cancel.addEventListener("click", () => {
  dialogForm.close();
});

//Opening the form

//Toggling the button from green(Read) to red(Unread)
