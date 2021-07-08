// login form validation 

      function formValidation(){
             let email = document.querySelector('.login-email input'),
                 password = document.querySelector('.login-password input'),
                 emailError = document.querySelector('.email-error'),
                 passwordError = document.querySelector('.password-error'),
                 loginForm = document.querySelector('form');

                 //check for wrong input when submit button was clicked...

                 loginForm.addEventListener('submit', (ev) => {
                         ev.preventDefault();

                         //check email

                         if(email.value == ''){
                               emailError.innerHTML = 'error! email address should not be empty.'
                                emailError.style.animation = `change-color 2s 3 2s`
                         }
                                if(email.value.endsWith('@gmail.com') !== true &&
                                   email.value != ''){
                                       emailError.innerHTML = `error! please use a valid email
                                       address`
                                   }    
                            else if(email.value != '' && email.value.endsWith('@gmail.com') == true){
                                     emailError.innerHTML = ''
                            }

                        //check password
                        
                        if(password.value == ''){
                             passwordError.innerHTML = 'error! password field should not be empty.'
                                passwordError.style.animation = `change-color 2s 3 2s`
                        }
                        else if(password.value != ''){
                               passwordError.innerHTML = ''
                        }

                       
                          
                 })
      }
       formValidation();