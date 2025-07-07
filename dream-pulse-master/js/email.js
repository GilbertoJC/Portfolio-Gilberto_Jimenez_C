const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_eve02ul';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
       this.reset(); // Limpia los campos del formulario
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});