const encuesta = document.getElementById('encuesta');
const instagram = document.getElementById('instagram');

encuesta.addEventListener("click", function(){
    event.preventDefault()
    window.location.href = "https://docs.google.com/forms/d/1VRMDM5q_jdcSt79O-LFv6hW9wd11BjX4Ka-5a4ldJIo/viewform?ts=65d90f2f&edit_requested=true"
})
instagram.addEventListener("click", function(){
    event.preventDefault()
    window.location.href = "https://www.instagram.com/friendsincommon.mx/?hl=en"
})
