'use strict';

var bio = {
    name: "Darshana Shah",
    role: "Front-end Developer",
    contacts: {
        mobile: "123-123- 1234",
        email: "xyz@gmail.com",
        github: "darshan.io",
        location: "Parsippany, NJ"
    },
    myImg: ""
    welcomeMessage: "Welcome to Darshana's Page!",
    skills: ['HTML', 'CSS', 'JavaScript', 'jQuery']
 };


$("#name").text(bio.name);
$("#role").text(bio.role);

var bioElem = document.querySelectorAll(".white-text");
console.log(bioElem);
$(bioElem[0]).text(bio.contacts.mobile);
$(bioElem[1]).text(bio.contacts.email);
$(bioElem[2]).text(bio.contacts.github);
$(bioElem[3]).text(bio.contacts.location);







