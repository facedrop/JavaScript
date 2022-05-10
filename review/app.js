// Local reviews data
const reviews = [
    {
        id: 1,
        name: "Elon Musk",
        job: "Web Dev",
        img: "https://149346090.v2.pressablecdn.com/wp-content/uploads/2022/04/GettyImages-1211442310-1600x900.jpg",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quis, odit magnam sed delectus odio!"
    },
    {
        id: 2,
        name: "Jeff Bezos",
        job: "Web Designer",
        img: "https://m.media-amazon.com/images/M/MV5BYTNlOGZhYzgtMmE3OC00Y2NiLWFhNWQtNzg5MjRhNTJhZGVmXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias debitis temporibus dicta reprehenderit incidunt! Vel."
    }
];

// Select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// Set starting item
let  currentItem = 0;

// Load initial item
window.addEventListener("DOMContentLoaded", function() {
    showPerson(currentItem);
});

// Show person based on item

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

// Show next person 

nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

// Show prev person

prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

// Show random person

randomBtn.addEventListener("click", function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson();
});