const callCategories = document.getElementById("call-categories");
const CallTheCards = document.getElementById("call-cards");
const addCartContainer = document.getElementById("add-cart-container");
const sumOfAmount = document.getElementById("sum-of-amount");
const TreeDetails = document.getElementById("Tree-Details");
const TreeDetailsModalContainer = document.getElementById("Tree-Details-Modal-Container");

let sum = 0;

const callTheCategories = () => {
  const url = "https://openapi.programming-hero.com/api/categories";
  fetch(url)
    .then((response) => response.json())
    .then((collector) => loopTheCategories(collector.categories));
};

const loopTheCategories = (categories) => {
  categories.forEach((element) => {
    callCategories.innerHTML += `
        <p id="${element.id}" class="font-medium text-xl flex justify-center items-center hover:bg-[#15803D] hover:text-white hover:cursor-pointer h-10 w-90 md:w-70 transition">${element.category_name}</p>
        `;
  });
  callCategories.addEventListener("click", (eve) => {
    const getPtags = document.querySelectorAll("p");
    getPtags.forEach((tags) => {
      tags.classList.remove("bg-[#15803D]", "text-white");
    });
    if (eve.target.localName === "p") {
      loadUp();
      displayPlants(eve.target.id);
      eve.target.classList.add("bg-[#15803D]", "text-white");
    }
  });
};

const displayPlants = (Id) => {
  fetch(`https://openapi.programming-hero.com/api/category/${Id}`)
    .then((response) => response.json())
    .then((data) => loopOnPlants(data.plants));

  const loopOnPlants = (plantsArray) => {
  CallTheCards.innerHTML = "";
    plantsArray.forEach((iterates) => {
      CallTheCards.innerHTML += `
            <div class="md:h-[600px] w-[full] rounded-xl p-2 bg-white">
            <div class="rounded-xl">
              <img src="${iterates.image}" alt="" class="h-50 w-80 rounded-xl" />
            </div>
            <div class="">
              <h1 id="${iterates.id}" class="font-semibold mb-3 hover:cursor-pointer">${iterates.name}</h1>
              <p class="mb-3 h-32">
                ${iterates.description}
              </p>
            </div>
            <div class="flex justify-between items-center mb-3">
              <button class="btn rounded-4xl h-7 bg-[#c5ebd2] text-[#15803D]">
                ${iterates.category}
              </button>
              <p class="">৳<span>${iterates.price}</span></p>
            </div>
            <button
              id="${iterates.id}"
              class="btn hover:bg-[#c5ebd2] hover:text-black bg-[#15803D] border-none text-white rounded-3xl h-12 w-[100%]"
            >
              Add to Cart
            </button>
          </div>
            `;
    });
  };
};

const reloadPlants = () => {
  const url = "https://openapi.programming-hero.com/api/plants";
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayAllPlantsOnReload(data.plants));

  const displayAllPlantsOnReload = (plantsInfo) => {
    CallTheCards.innerHTML = "";
    plantsInfo.forEach((plantData) => {
      CallTheCards.innerHTML += `
            <div class="md:h-[600px] w-[full] rounded-xl p-2 bg-white">
            <div class="rounded-xl">
              <img src="${plantData.image}" alt="" class="h-50 w-80 rounded-xl" />
            </div>
            <div class="">
              <h1 id="${plantData.id}" class="font-semibold mb-3 hover:cursor-pointer">${plantData.name}</h1>
              <p class="mb-3 h-32">
                ${plantData.description}
              </p>
            </div>
            <div class="flex justify-between items-center mb-3">
              <button class="btn rounded-4xl h-7 bg-[#c5ebd2] text-[#15803D]">
                ${plantData.category}
              </button>
              <p class="">৳<span>${plantData.price}</span></p>
            </div>
            <button
              id="${plantData.id}"
              class="btn hover:bg-[#c5ebd2] hover:text-black bg-[#15803D] border-none text-white rounded-3xl h-12 w-[100%]"
            >
              Add to Cart
            </button>
          </div>
            `;
    });
  };
};

CallTheCards.addEventListener("click", (event) => {
  if (event.target.localName === "button") {
    const name = event.target.parentNode.childNodes[3].children[0].innerText;
    const price = Number(event.target.parentNode.childNodes[5].children[1].children[0].innerText);
alert(`${name} Has been added to cart`)
    const cartItem = document.createElement("div");
    cartItem.className = "bg-white rounded-xl p-3 flex justify-between items-center";
    cartItem.innerHTML = `
      <div class="space-y-2">
        <p class="font-semibold text-xl">${name}</p>
        <p class="text-xl font-semibold text-gray-400">৳<span>${price}</span> x 1</p>
      </div>
      <div>
        <span class="delete-data text-xl font-semibold text-gray-400 hover:cursor-pointer">X</span>
      </div>
    `;
    addCartContainer.appendChild(cartItem);

    sum += price;
    sumOfAmount.innerText = sum;
  }

  if (event.target.tagName === "H1") {
  detailsInModal(event.target.parentNode.childNodes[1].id)
}

});


addCartContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-data")) {
    const cartItem = event.target.closest("div.bg-white");
    const price = Number(cartItem.querySelector("p span").innerText);

    sum -= price; 
    sum = Math.max(0, sum);
    sumOfAmount.innerText = sum;
    
    cartItem.remove();
  }
});


const detailsInModal = (id) =>{
  const url = `https://openapi.programming-hero.com/api/plant/${id}`
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    DisplayTheModalOnUi(data.plants)
  })
}

const DisplayTheModalOnUi= (plantsData) =>{

  TreeDetailsModalContainer.showModal();

  TreeDetailsModalContainer.innerHTML =`
   <div class="modal-box">

           <div class="Tree-Details">
            
           <div class="rounded-xl p-2 bg-white">
            <div class="">
              <h1 id="${plantsData.id}" class="font-semibold text-2xl mb-3 hover:cursor-pointer">
                ${plantsData.name} 
              </h1>
            </div>
            <div class="rounded-xl flex justify-center">
              <img src="${plantsData.image}" alt="" class="h-70 w-96 rounded-xl" />
            </div>

            <div class="justify-between items-center mb-3 space-y-5 mt-5">
              <h1 class="font-bold text-xl">Category : <span>${plantsData.category}</span></h1>
                
              <p class="font-bold text-xl">Price : ৳<span>${plantsData.price}</span></p>
            </div>

            <div class="">
              <p class="mb-3 h-32">
               <span class="text-xl font-semibold"> Description : </span><span>${plantsData.description}</span>
              </p>
            </div>
          </div>
           </div>

            <div class="modal-action">
              <form method="dialog">
                <button class="btn">Close</button>
              </form>
            </div>
          </div>
  `
}

const loadUp = () => {
  CallTheCards.innerHTML = `
    <div class="flex items-center justify-center col-span-3">
      <span class="loading loading-bars loading-xl"></span>
    </div>`;
};


reloadPlants();
callTheCategories();
