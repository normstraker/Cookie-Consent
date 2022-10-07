// grabs all necessary elements
const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");
const modalDisplayName = document.getElementsByClassName("modal-display-name");
const declineBtn = document.getElementById("decline-btn");
const modalChoiceBtns = document.getElementById("modal-choice-btns");

// disables X on popup when page loads
modalCloseBtn.disabled = true;

// controls when our modal popup appears
setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

// mouse enters element area and toggle class to row reverse
declineBtn.addEventListener("mouseenter", function () {
  modalChoiceBtns.classList.toggle("reverse");
});

// dynamically update a css property
modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// stops the browser from submitting data to url line
consentForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // access and use form data
  const consentFormData = new FormData(consentForm);
  const fullName = consentFormData.get("fullName");

  modalText.innerHTML = `
  <div class="modal-inner-loading">
  <img src="images/loading.svg" class="loading">
  <p id="uploadText">
  Uploading your data to the dark web...
  </p>
  </div>`;
  setTimeout(function () {
    document.getElementById("uploadText").textContent = `Making the sale...`;
  }, 1500);

  setTimeout(function () {
    document.getElementById("modal-inner").innerHTML = `
    <h2>Thanks <span class="modal-display-name">${fullName}</span>,
    you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
    <img src="./images/pirate.webp">
    </div>
    `;
    // disable close button unless info submitted
    modalCloseBtn.disabled = false;
  }, 3000);
});
