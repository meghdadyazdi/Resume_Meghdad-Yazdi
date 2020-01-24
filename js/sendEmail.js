// $(document).ready(function () {

// console.log("Hellommmmmmmmmmmm")

// console.log($("#fullname").name)
// console.log($("#emailaddress").emailaddress)
// console.log($("#projectsummary").projectsummary)
//  });

function sendMail(contactForm) {
    emailjs.send("gmail", "meghdad", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            })
}