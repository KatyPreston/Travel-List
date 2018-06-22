document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript Loaded");


  const form = document.querySelector("#new-item-form");
    console.log(form);
    const handleFormSubmit = function(event){
      event.preventDefault();

      const form = event.target;

      const country = form.country.value;
      const reason = form.reason.value;
      const urgency = form.urgency.value;

      const result = document.querySelector("#travel-bucket-list");
      item = `${country}, ${reason}, ${urgency}`;

      createTravel(item, result);

      form.reset();
    }


  form.addEventListener("submit", handleFormSubmit);

  const createTravel = function(content, container){
    const stuff = document.createElement('p');
    stuff.textContent = content;
    container.appendChild(stuff);
  };

});
