const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    burger.addEventListener('click', ()=>{

        //toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            } else{
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 1.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');


    });

}


function msg() {
    alert("Thank you for Connecting with us! We'll see you in your mail box!")
}

navSlide();

var Connect = document.getElementById('txt');

document.querySelector('form.userForm').addEventListener('submit', function(e){
    e.preventDefault();

    Email.send({
        Host : "smtp.gmail.com",
        Username: "anugrahbhatt16",
        Password: "anugrah12345",
        To: "bhattanugrah@gmail.com",
        From: "bhattanugrah@gmail.com",
        Subject: "This is regarding your interest in my Website: Anugrah Bhatt",
        Body: "Hello Thank you for Connecting with us! Please mail me your requirements and we'll see how can i be of any help!",
    }).then(
        message => alert("Thank you for this Oppurtunity! Let's meet at your email!")
    );
});


/*
Email.send({
    Host : "smtp.gmail.com",
    Username: "anugrahbhatt16",
    Password: "anugrah12345",
    To: Connect,
    From: "bhattanugrah@gmail.com",
    Subject: "This is regarding your interest in my Website: Anugrah Bhatt",
    Body: "Hello Thank you for Connecting with us! Please mail me your requirements and we'll see how can i be of any help!",
}).then(
    message => alert("Mail Sent!")
);*/