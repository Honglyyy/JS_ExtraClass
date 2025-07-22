const formData = document.getElementById('formData');
const rowData = document.getElementById('rowData');

const customers = [];

const renderData = () => {
  rowData.innerHTML = ''; // Clear old data before re-rendering
  customers.forEach(customer => {
    rowData.innerHTML += `
      <div class="col-3 p-3">
        <div class="w-100 p-3 shadow-lg rounded-2">
          <h4>${customer.name}</h4>
          <p class="m-0 py-1">📞${customer.number}</p>
          <p class="m-0">📍${customer.location}</p>
          <div class="pt-3 w-100 d-flex justify-content-evenly">
            <button class="btn text-white btn-warning">Edit</button>
            <button class="btn text-white btn-danger">Delete</button>
          </div>
        </div>
      </div>
    `;
  });
};

formData.addEventListener('submit', (e) => {
  e.preventDefault();

const nameEl = document.getElementById('customerName');
const numberEl = document.getElementById('customerNumber');
const locationEl = document.getElementById('customerLocation');

  const name = nameEl.value.trim();
  const number = numberEl.value.trim();
  const location = locationEl.value.trim();

  if (!name || !number || !location) {
    alert("Please fill in all fields");
    return;
  }

  customers.push({ name, number, location });

  renderData();

  // Clear form fields after submission
  nameEl.value = '';
  numberEl.value = '';
  locationEl.value = '';
});

// Initial render
renderData();