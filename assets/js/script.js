function movies(movieName, releaseDate, actorName, producerName) {
    this.name = movieName;
    this.releaseDate = releaseDate,
    this.actorName = actorName;
    this.producerName = producerName;
}

let movies1 = new movies("Kick", "11-10-2010", "Salman", " Producer 1");
let movies2 = new movies("Jab Tak hai Jaan", "11-10-2020", "Shahrukh", " Producer 2");
let movies3 = new movies("PK", "21-7-2010", "Aamir", " Producer 3");
let movies4 = new movies("Kick1", "21-10-2060", "Hrithik", " Producer 4");
let movies5 = new movies("Kick2", "11-10-2010", "Aishwarya", " Producer 5");
let movies6 = new movies("Kick3", "1-10-2014", "Salman", " Producer 6");
let movies7 = new movies("Kick4", "10-10-2017", "Hritik", " Producer 7");
let movies8 = new movies("Kick5", "11-10-2045", "Salman", " Producer 8");
let movies9 = new movies("Kick6", "20-10-2085", "Shahrukh", " Producer 9");
let movies10 = new movies("Kick7", "18-10-2010", "Salman", " Producer 10");

// creating an empty array
let arr = [];
arr.push(movies1, movies2, movies3, movies4, movies5, movies6, movies7, movies8, movies9, movies10);

let displayArea = document.querySelector(".display-area");

// function to clear display area 
let clear = () => displayArea.innerHTML = "";

// function to display
function display(element) {
    displayArea.innerHTML +=`<li>Name of the Actor: ${element.actorName}</li><br>
                            <li>Name of the Movie: ${element.name}</li><br>
                            <li>Release Date: ${element.releaseDate}</li><br>
                            <li>Name of the Producer: ${element.producerName}</li><br><hr>`;
};

// function for validation
function validation(inputValue) {
    let filteredArray = arr.filter(function(element){
        if(element.name.toLowerCase() == inputValue) display(element);
        else if(element.actorName.toLowerCase() == inputValue) display(element);
    });
};

// click event on submit
let submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let input = document.querySelector('#name');
    let inputValue = input.value.toLowerCase();
    if (inputValue != "") {
        clear();
        validation(inputValue);
        input.value = "";
    } else {
        displayArea.innerHTML = "Name cannot be Empty";
    }
});