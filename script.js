// Lecture Project - Search Filter

var ul = document.querySelector("ul");

// ******************** ADD ITEMS

document.getElementById("add-btn").addEventListener('click', function (e) {
    e.preventDefault();
    // console.log('Hello');

    var addInput = document.getElementById("add-input");

    if (addInput.values !== "") {
        var li = document.createElement("li"),
            firstPar = document.createElement("p"),
            SecondPar = document.createElement("p"),
            firstIcon = document.createElement("i"),
            SecondIcon = document.createElement("i"),
            input = document.createElement("input");

        firstIcon.className = 'fa fa-pencil-square-o';
        SecondIcon.className = 'fa fa-times';
        input.className = 'edit-note';
        input.setAttribute("type", "text");

        firstPar.textContent = addInput.value;

        SecondPar.appendChild(firstIcon);
        SecondPar.appendChild(SecondIcon);
        li.appendChild(firstPar);
        li.appendChild(SecondPar);
        li.appendChild(input);
        ul.appendChild(li);

        addInput.value = "";
    }
});

// ************************ EDIT AND DELETE ITEMS

ul.addEventListener("click", function (e) {

    console.log(e.target.classList[1]);

    if (e.target.classList[1] == "fa-pencil-square-o") {
        var parentPar = e.target.parentNode;
        parentPar.style.display = "none";

        var note = parentPar.previousElementSibling;
        var input = parentPar.nextElementSibling;

        input.style.display = "block";
        input.value = note.textContent;

        input.addEventListener("keypress", function (e) {
            if (e.keyCode === 13) {
                if (input.value!== "") {
                    note.textContent = input.value;
                    parentPar.style.display = "block";
                    input.style.display = "none";
                }
                else {
                    var li = input.parentNode;
                    li.parentNode.removeChild(li);
                }
            }
        });
    }
    else if (e.target.classList[1] == 'fa-times') {
        var list = e.target.parentNode.parentNode;
        list.parentNode.removeChild(list);
    }
})

//*********************** HIDE ITEM 

var hideItem = document.getElementById("hide");

hideItem.addEventListener("click", function () {
    var label = document.querySelector('label');

    if (hideItem.checked) {
        label.textContent = "unhides notes"
        ul.style.display = 'none';
    }
    else {
        label.textContent = "Hide notes";
        ul.style.display = "block";
    }
});

// ******************************SEARCH FILTER

var searchInput = document.querySelector("#search-note input");

searchInput.addEventListener("keyup", function (e) {
    var searchInput = e.target.value.toUpperCase();

    var notes = ul.getElementsByTagName("li");

    Array.from(notes).forEach(function(note) {

        var perText = note.firstElementChild.textContent;
        if (perText.toUpperCase().indexOf(searchInput) !== -1) {
            note.style.display = 'block';
        }
        else {
            note.style.display = 'none';
        }
    });
})