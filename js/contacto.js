function planBasico() {
    document.contactForm.asunto.value = "¡Me interesa el plan básico!";
}

function planPro() {
    document.contactForm.asunto.value = "¡Me interesa el plan professional!";
}

function planPremium() {
    document.contactForm.asunto.value = "¡Me interesa el plan premium!";
}

$('#contactForm').submit(function(e){
    e.preventDefault()
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Gracias por contactarme!',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        iconColor: '#ff9800',
    })
});