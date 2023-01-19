const checkboxValidation = () => {
  var checker = document.getElementById("terms_of_service");
  var registerBtn = document.getElementById("register_btn");
  checker.checked
    ? (registerBtn.disabled = false)
    : (registerBtn.disabled = true);
};

const validationExpressions = {
  text: /^[a-z]+$/i,
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
};

const validate = (fieldId, validationType) => {
  console.log(validationType);
  var field = document.getElementById(fieldId);
  if (field.value.match(validationExpressions[validationType])) {
    field.style.border = `2px solid green`;
  } else {
    field.style.border = `2px solid red`;
  }
};

const passwordValidation = () => {
  var password = document.getElementById("password");
  if (!password.value.match(validationExpressions.password)) {
    document
      .getElementById("password_validation")
      .classList.remove("valid_password");

    document
      .getElementById("password_validation")
      .classList.add("invalid_password");
  } else {
    document
      .getElementById("password_validation")
      .classList.add("valid_password");

    document
      .getElementById("password_validation")
      .classList.remove("invalid_password");
  }
};

// function save() {
//   $("#register_btn").on("click", function () {
//     var $this = $(this); //submit button selector using ID
//     var $caption = $this.html(); // We store the html content of the submit button
//     var form = "#register_form"; //defined the #form ID
//     var formData = $(form).serializeArray(); //serialize the form into array
//     var route = $(form).attr("action"); //get the route using attribute action
//     $.ajax({
//       type: "POST", //we are using POST method to submit the data to the server side
//       url: route, // get the route value
//       data: formData, // our serialized array data for server side
//       beforeSend: function () {
//         //We add this before send to disable the button once we submit it so that we prevent the multiple click
//         $this.attr("disabled", true).html("Processing...");
//       },
//       success: function (response) {
//         //once the request successfully process to the server side it will return result here

//         response = JSON.parse(response);

//         // Check if there is has_error property on json response from the server
//         if (!response.hasOwnProperty("has_error")) {
//           // Reload lists of employees
//           all();

//           // We will display the result using alert
//           Swal.fire({
//             icon: "success",
//             title: "Success.",
//             text: response.response,
//           });

//           // Reset form
//           resetForm(form);
//         } else {
//           // We will display the result using alert
//           Swal.fire({
//             icon: "warning",
//             title: "Error.",
//             text: response.response,
//           });
//         }

//         $this.attr("disabled", false).html($caption);
//       },
//       error: function (XMLHttpRequest, textStatus, errorThrown) {
//         // You can put something here if there is an error from submitted request
//       },
//     });
//   });
// }
