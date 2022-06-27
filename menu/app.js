// items
const menu = [
    {
        id: 1,
        title: "Deviled Eggs",
        category: "Breakfast",
        price: 12.99,
        img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F07%2F22%2F1015406_original.jpg&w=600&h=402&c=sc&poi=%5B12529%2C13136%5D&q=60",
        desc: "Find the best deviled egg recipes, from bacon deviled eggs to healthy deviled eggs. Try a recipe with a spicy twist, or stick with the classic version for an easy party treat."
    },
    {
        id: 2,
        title: "Grilled Salmon",
        category: "Seafood",
        price: 17.99,
        img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F-0001%2F11%2F30%2F800839.jpg",
        desc: "A simple soy sauce and brown sugar marinade, with hints of lemon and garlic, are the perfect salty-sweet complement to rich salmon fillets. Even my 9 year old loves this recipe!"
    },
    {
        id: 3,
        title: "World's Best Lasagna",
        category: "Pasta",
        price: 15.99,
        img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8963973.jpg",
        desc: "It takes a little work, but it is worth it."
    },
    {
        id: 4,
        title: "Delicious Egg Salad for Sandwiches",
        category: "Salad",
        price: 16.99,
        img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F05%2F20%2F191517.jpg",
        desc: "This is a wonderful-tasting egg salad sandwich that you will definitely devour. It's really good on rye."
    },
    {
        id: 5,
        title: "Potato Salad",
        category: "Salad",
        price: 16.99,
        img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F2881145.jpg",
        desc: "Quick and easy potato salad recipe with a lot of old-fashioned potato salad flavor. This will become a go-to summer side dish recipe. Better if made the day before."
    },
    {
        id: 6,
        title: "Margarita Grilled Shrimp",
        category: "Seafood",
        price: 16.99,
        img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F245122.jpg",
        desc: "The shrimp can be marinated up to 3 hours before grilling. The amount of red pepper used can be adjusted according to how hot you like it. The marinade is also great on chicken."
    },
    {
        id: 7,
        title: "Lemon-Ricotta Pancakes",
        category: "Breakfast",
        price: 16.99,
        img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4518440.jpg",
        desc: "If these pancakes were any lighter, they would float off the plate--and I didn't even separate the eggs and whip the whites. Also, I used water instead of milk--and I liked them better that way. I like to serve these with a pat of butter, a pinch of lemon zest, and a drizzle of maple syrup."
    },
    {
        id: 8,
        title: "French Spring Soup",
        category: "Soup",
        price: 16.99,
        img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F579198.jpg",
        desc: "I make this during asparagus season when my husband's patch is producing a lot. It is very fresh tasting, and the longer it sits, the better it is."
    },
];

const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn");

// Load Items
window.addEventListener("DOMContentLoaded", function() {
    displayMenuItems(menu);
});

// Filter Items
filterBtns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem) {
            if(menuItem.category === category) {
                return menuItem;
            }
        });
        if(category === "All") {
            displayMenuItems(menu)
        } else {
            displayMenuItems(menuCategory);
        }
    });
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
        return `<article class="menu-item">
                <img src=${item.img} class="photo" alt=${item.title}>
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">$${item.price}</h4>
                    </header>
                    <p class="${item.desc}</p>
                </div>
            </article>`;
    });
    displayMenu = displayMenu.join("")
    sectionCenter.innerHTML = displayMenu;    
}