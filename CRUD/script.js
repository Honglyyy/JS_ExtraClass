const form = document.getElementById("contactForm");
const cardContainer = document.getElementById("cardContainer");

let editingCard = null; // Track the card being edited

function createCard(name, phone, address) {
  const card = document.createElement("div");
  card.className = "cards bg-white rounded-3xl shadow-lg p-8 hover:shadow-indigo-400 transition-shadow duration-300 cursor-pointer relative group";

  card.innerHTML = `
    <h3 class="text-xl font-semibold text-gray-900 mb-2">
      Name: <span class="font-normal name-text">${name}</span>
    </h3>
    <h3 class="text-xl font-semibold text-gray-900 mb-2">
      Phone: <span class="font-normal phone-text">${phone}</span>
    </h3>
    <h3 class="text-xl font-semibold text-gray-900">
      Address: <span class="font-normal address-text">${address}</span>
    </h3>

    <div class="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
      <button class="edit-btn bg-yellow-400 hover:bg-yellow-500 p-2 rounded-full shadow-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" title="Edit">
        Edit
      </button>
      <button class="delete-btn bg-red-600 hover:bg-red-700 p-2 rounded-full shadow-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600" title="Delete">
        Delete
      </button>
    </div>
  `;

  // Edit button
  card.querySelector(".edit-btn").addEventListener("click", (e) => {
    e.preventDefault();
    editingCard = card;

    form.name.value = card.querySelector(".name-text").textContent;
    form.phone.value = card.querySelector(".phone-text").textContent;
    form.address.value = card.querySelector(".address-text").textContent;

    form.querySelector("button[type='submit']").textContent = "Update";
  });

  // Delete button
  card.querySelector(".delete-btn").addEventListener("click", (e) => {
    e.preventDefault();

    const name = card.querySelector(".name-text").textContent;

    card.remove();

    if (editingCard === card) {
      editingCard = null;
      form.reset();
      form.querySelector("button[type='submit']").textContent = "Submit";
    }

    Toastify({
      text: `${name} deleted`,
      duration: 2500,
      close: true,
      gravity: "top",
      position: "right",
      backgroundColor: "linear-gradient(to right, #dc2626, #b91c1c)",
      stopOnFocus: true,
    }).showToast();
  });

  return card;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const address = form.address.value.trim();

  if (!name || !phone || !address) {
    Toastify({
      text: "Please fill out all fields.",
      duration: 2500,
      close: true,
      gravity: "top",
      position: "right",
      backgroundColor: "linear-gradient(to right, #ef4444, #b91c1c)",
      stopOnFocus: true,
    }).showToast();
    return;
  }

  if (editingCard) {
    editingCard.querySelector(".name-text").textContent = name;
    editingCard.querySelector(".phone-text").textContent = phone;
    editingCard.querySelector(".address-text").textContent = address;

    Toastify({
      text: "Contact updated!",
      duration: 2500,
      close: true,
      gravity: "top",
      position: "right",
      backgroundColor: "linear-gradient(to right, #10b981, #047857)",
      stopOnFocus: true,
    }).showToast();

    editingCard = null;
    form.querySelector("button[type='submit']").textContent = "Submit";
  } else {
    const newCard = createCard(name, phone, address);
    cardContainer.appendChild(newCard);

    Toastify({
      text: "Contact saved successfully!",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "right",
      backgroundColor: "linear-gradient(to right, #10b981, #047857)",
      stopOnFocus: true,
    }).showToast();
  }

  form.reset();
});
