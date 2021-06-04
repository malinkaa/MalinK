// Oppgave Lists 
fetch('./json.json')
    .then(response => response.json())
    .then(data => {



        data.forEach((person) => {
            let tr = document.createElement('tr').innerHTML +=
                <td>${person.firstname}</td>, <td>${person.age}</td>, <td>${person.city}</td>
        });


    });
// Oppgave Quiz
// function name(params) {
//     document.getElementById('correct').oneclick =
//         }


// Oppgave Contact
let firstname = document.getElementById('fname')
let lastname = document.getElementById('lname')
let age = document.getElementById('age')
let mail = document.getElementById('mail')
let Adress = document.getElementById('adress')
let city = document.getElementById('city')

submit.oneclick = function () {
    let sub = firstname.value
    let sub2 = lastname.value
    let sub3 = age.value

    console.log(sub)

    localStorage.setItem(sub, sub2, sub3)
}






