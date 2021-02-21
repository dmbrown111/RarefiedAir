 type="text/javascript">
 (function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('user_2K3cXKUH62OWlnkSADuEb');
})();
 
 
            {/* // Form Validate */}
      validate = function() {
          
          var name =  document.getElementById('name')
          var email =  document.getElementById('email')
          var additional_info =  document.getElementById('additionalInfo')
          var email_regex = /^\S+@\S+$/
         
          if (name.value.trim() == "") {
            name.style.borderColor = "red"
            return false
          } else {
            name.style.borderColor = "none"
          }
console.log("test email regex", !email_regex.test(email.value))
          if (email.value.trim() == "" || !email_regex.test(email.value)) {
            email.style.borderColor = "red"
            return false
          } else {
            email.style.borderColor = "none"
          }

          if (additional_info.value.trim() == "") {
            additional_info.style.borderColor = "red"
            return false
          } else {
            additional_info.style.borderColor = "none"
          }

          return true
      }
            {/* // Loader */}
      showLoader = function() {
        document.getElementById("loader").style.display = 'block';
      }

      hideLoader = function() {
        document.getElementById("loader").style.display = 'none';
      }

      window.onload = function() {
          var contact_form = document.getElementById('form')
          var submit_button =  document.getElementById('submit')

          contact_form.addEventListener('submit', function(event) {
            console.log("triggered", this)
            event.preventDefault();
        
            var valid_form = validate()

            
            if (valid_form == true) {
              submit_button.disabled = true
              showLoader()
              emailjs.sendForm('service_9v6gatm', 'template_73hh16e', this)
                  .then(function() {
                      console.log('SUCCESS!');
                      contact_form.reset()
                      submit_button.disabled = false
                      hideLoader()
                      window.location.reload()

                  }, function(error) {
                      console.log('FAILED...', error);
                  });
            } else {
              console.log("form is invalid")
            }
          });
      }
