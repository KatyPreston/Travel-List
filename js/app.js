document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript Loaded");


  const form = document.querySelector("#new-item-form");
    console.log(form);
    const handleFormSubmit = function(event){
      event.preventDefault();

      console.log("form logged")
      const form = event.target;

      const country = form.country.value;
      const reason = form.reason.value;
      const urgency = form.urgency.value;

      const result = document.querySelector("#travel-bucket-list");
      result.textContent = `${country}, ${reason}, ${urgency}`;

      form.reset();
    }


  form.addEventListener("submit", handleFormSubmit);

});
