const form = document.getElementById('create-vehicle-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  fetch('/create-vehicle', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Vehicle created successfully!');
      window.location.href = '/list-vehicles';
    } else {
      alert('Error creating vehicle: ' + data.error);
    }
  });
});
