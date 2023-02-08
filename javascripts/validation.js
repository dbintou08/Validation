function emailValidation() {
  const form = document.getElementById('form');
  const emailComfirmField = document.getElementById('email_confirm');
  const element = document.createElement('p');
  const message = document.createTextNode("Les e-mails ne correspondent pas");
  element.appendChild(message);
  element.classList.add("alert_color");
  element.setAttribute('id', 'alert');
  const contentField = document.getElementById('content_field');
  emailComfirmField.addEventListener('input', e => {
    if (form.email.value !== form.email_confirm.value) {
      if (!document.getElementById('alert')) {
        contentField.parentNode.insertBefore(element, contentField);
        emailComfirmField.classList.add("alert_bg");
      }
    } else {
      emailComfirmField.classList.remove("alert_bg");
      element.parentNode.removeChild(element);
    }
  });
};
window.onload = function () {
  emailValidation();
};