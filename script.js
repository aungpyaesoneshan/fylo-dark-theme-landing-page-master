const errorMessage = document.querySelector(".footer-form-error");
const submitButton = document.querySelector(".footer-form-submit-button");
const inputTag = document.querySelector(".footer-form-input");
submitButton.addEventListener("click", () => {
  if (!validateEmail(inputTag.value)) {
    errorMessage.style.display = "block";
  }
});
inputTag.addEventListener("click", () => {
  inputTag.value = "";

  errorMessage.style.display = "none";
});
function validateEmail(emailAdress) {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) {
    return true;
  } else {
    return false;
  }
}
