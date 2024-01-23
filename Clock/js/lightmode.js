document.addEventListener('DOMContentLoaded', function(){
    const btnToggle = document.getElementById("btnToggle");
    const container = document.querySelector(".container");
    const clock = document.querySelector(".clock");
    const btnColor = document.getElementById("btnToggle");

    btnToggle.addEventListener('click', function(){
        container.classList.toggle("lightModeBg");
    });

    btnToggle.addEventListener('click', function(){
        clock.classList.toggle("lightModeText");
    });

    btnToggle.addEventListener('click', function(){
        btnColor.classList.toggle("btnColor");
    });


});