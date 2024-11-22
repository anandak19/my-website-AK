// side menu
var sidemeu = document.getElementById("sidemenu");

function openmenu() {
  sidemeu.style.right = "0";
}
function closemenu() {
  sidemeu.style.right = "-170px";
}

// Email send

function submitForm() {
  const namePattern = /^[a-zA-Z]+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Validation checks
  if (!namePattern.test(name) || name == "" || name == null) {
    alert("Enter a valid name");
    return;
  }
  if (!emailPattern.test(email) || email == "" || email == null) {
    alert("Enter a valid email address");
    return;
  }
  if (message == "" || message == null) {
    alert("Enter a message");
    return;
  }

  const params = {
    name: name,
    email: email,
    message: message,
  };

  const serviceId = "service_et7ex4m";
  const templateId = "template_ycprxnk";

  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      document.getElementById("msg").innerHTML =
        "I got your message 😊 Thank you";
    })
    .catch((err) => console.log(err));
}
