document.getElementById('fillForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const firstName = document.getElementById('firtName');
    const errorName = document.getElementById('errorName');

    const secondName = document.getElementById('lastName');
    const errorLast = document.getElementById('errorLast');

    const email = document.getElementById('email'); //for email section
    const emailError = document.getElementById('emailError');

    const query = document.getElementsByName('query'); // Query section
    const queryerror = document.getElementById('queryerror');

    const message = document.getElementById('message');// For text area
    const messageError = document.getElementById('messageError');

    const checkbox = document.getElementById('checkbox');// Check area
    const checkError = document.getElementById('checkError');
    const success = document.getElementById('sent');

    let notValid = true;
    
    if (firstName.value.trim() === '') {
        errorName.innerText = 'This field is required';
        errorName.style.color = "hsl(0, 100%, 50.00%)";
        firstName.style.border = '1px solid hsl(0, 100%, 50%)';
        firstName.style.boxShadow = '1px 2px 5px 1px hsl(187, 24%, 22%)';
        notValid = false;
    } else {
        errorName.innerText = '';
    }
    if (secondName.value.trim() === '') {
        errorLast.innerText = 'This field is required';
        errorLast.style.color = "hsl(0, 100%, 50%)";
        secondName.style.border = '1px solid hsl(0, 100%, 50%)';
        secondName.style.boxShadow = '1px 2px 5px 1px hsl(187, 24%, 22%)';
        notValid = false;
    } else {
        errorLast.innerText = '';
    }
    if (email.value.trim() === '') {
        emailError.innerText = 'Please enter a valid email address';
        emailError.style.color = 'hsl(0, 100%, 50%)';
        email.style.border = '1px solid hsl(0, 100%, 50%)';
        email.style.boxShadow = '1px 2px 5px 1px hsl(187, 24%, 22%)';
        notValid = false;
    } else {
        emailError.innerText = '';
    }
    let checkedArea = false;
    for (let g = 0; g < query.length; g++) {
        if (query[g].checked) {
            checkedArea = true;
            break;
        } 
    }
    if (!checkedArea) {
        queryerror.innerText = 'Please select a query type';
        queryerror.style.color = 'hsl(0, 100%, 50%)';
    } else {
        queryerror.innerText = '';
    }
    if (message.value.trim() === '') {
        messageError.innerText = 'This field is required';
        messageError.style.color = 'hsl(0, 100%, 50%)';
        message.style.border = '1px solid hsl(0, 100%, 50%)';
        message.style.boxShadow = '1px 2px 5px 1px hsl(187, 24%, 22%)';
        notValid = false;
    } else {
        messageError.innerText = '';
    }
    if (!checkbox.checked) {
        checkError.innerText = 'To submit this form, please consent to being contacted';
        checkError.style.color = 'hsl(0, 100%, 50%)';
        notValid = false;
    } else {
        checkError.innerText = '';
    }
    if (notValid) {
        success.style.display = 'block';
        setTimeout(() => {
            success.style.display = 'none'
        }, 6000)
    }

    
   document.getElementById('fillForm').reset();
});
