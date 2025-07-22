const formData = document.getElementById('formData');
const rowData = document.getElementById('rowData');

const customerName = document.getElementById('customerName');
const customerNumber = document.getElementById('customerNumber');
const customerLocation = document.getElementById('customerLocation');

const customers = [];

const renderData = () => {
  rowData.innerHTML = '';
  customers.forEach(customer => {
    rowData.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${customer.name}</h5>
            <p class="card-text mb-1">📞 ${customer.number}</p>
            <p class="card-text">📍 ${customer.location}</p>
            <div class="pt-3 w-100 d-flex justify-content-evenly">
             <button class="btn text-white btn-warning">✏️Edit</button>
             <button class="btn text-white btn-danger">🗑️Delete</button>
           </div>
         </div>
          </div>
      </div>
    `;
  });
};

formData.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = customerName.value.trim();
  const number = customerNumber.value.trim();
  const location = customerLocation.value.trim();

  if (!name || !number || !location) {
    return;
  }

  customers.push({ name, number, location });

  renderData();

  // Clear inputs
  customerName.value = '';
  customerNumber.value = '';
  customerLocation.value = '';

  // Show Toastify success message
  Toastify({
    text: "Customer added successfully!",
    duration: 3000,
    gravity: "top",
    position: "right",
    backgroundColor: "#28a745",
    stopOnFocus: true
  }).showToast();
});

// Initial render (optional)
renderData();