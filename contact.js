let contactForm = document.querySelector("#form");
let contactList = document.querySelector("#contact-group");
let filter = document.querySelector("#search");

contactForm.addEventListener("submit", addContact);
contactList.addEventListener("click", removeContact);
filter.addEventListener("keyup", filterContact);

function addContact(e) {
    e.preventDefault(e);
     //Get input value
    let contactInput = document.querySelector("#contactInput").value;
//create element
    let li = document.createElement("li");
// add id to li
    li.id = "list-contact-group";

    // add text to li
    li.append(document.createTextNode(contactInput));
        
    //append li to list
    contactList.append(li);
    

    //create delete button
    let deleteBtn = document.createElement("button");
 //add class to it
    deleteBtn.className = "delete";
//add text to it
    deleteBtn.append(document.createTextNode("X"));

    li.append(deleteBtn);
}

function removeContact(e) {
    if(e.target.classList.contains("delete")) {
        if(confirm("Are You Sure?")) {
            let li = e.target.parentElement;
            contactList.removeChild(li);
        }
    }
}

function filterContact(e) {
    //get search contact
    let text = e.target.value.toLowerCase();

    let contacts = contactList.querySelectorAll("li");

    //convert to array
    Array.from(contacts).forEach( contact => {
        let contactName = contact.firstChild.textContent;
        if(contactName.toLowerCase().indexOf(text) != -1) {
            contact.style.display = "block";
        } else {
            contact.style.display = "none";
        }
    })
}

