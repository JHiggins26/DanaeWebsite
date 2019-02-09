function submitForm() {

    if (validateEmail(document.getElementById('subscribeText').value)) {

        let frm = document.getElementsByName('subForm')[0];
        frm.submit(); // Submit the form
        frm.reset();  // Reset all form data

        // Display popup
        Swal.fire({
            position: 'center',
            type: 'success',
            title: 'Nice! You are now subscribed!',
            showConfirmButton: false,
            width: 600,
            timer: 2500
        });

        $('#errorId').hide();

        return false; // Prevent page refresh
    }
    else {
        //Invalid Email
        document.getElementById('subscribeText').select();
        $('#errorId').show();

    }
}

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function textboxListener() {
    if (validateEmail(document.getElementById('subscribeText').value)) {
        $('#errorId').hide();
    }
}