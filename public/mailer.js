const contactForm = document.getElementById('contact-form');
const name = document.getElementById('contact-form-name');
const email = document.getElementById('contact-form-email');
const subject = document.getElementById('contact-form-subject');
const message = document.getElementById('contact-form-message');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value
  };

  // const xhr = new XMLHttpRequest();
  // xhr.open('POST', '/');
  // xhr.setRequestHeader('content-type', 'application/json');
  // xhr.onload = function() {
  //   if (xhr.responseText === 'success') {
  //     alert("email send");
  //     name.value = "";
  //     email.value = "";
  //     subject.value = "";
  //     message.value = "";
  //   } else {
  //     alert("Something went wrong");
  //   }
  // };

  // xhr.send(JSON.stringify(formData));

  fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.text())
    .then(data => {
      if (data === 'success') {
        alert("email send");
        name.value = "";
        email.value = "";
        subject.value = "";
        message.value = "";
      } else {
        alert("Something went wrong");
      }
    });
});
