class Student{
    constructor(name, dob, gender, major, image, phone, grade){
        this.name = name;
        this.dob = dob;
        this.gender = gender;
        this.major = major;
        this.image = image;
        this.phone = phone;
        this.grade = grade;
    }
}
function addnew(){
    let fullName = document.getElementById('fname').value;
    let dateOfBirth = document.getElementById('bday').value;
    let major = document.getElementById('major').value;
    let image = document.getElementById('img-url').value;
    let phone = document.getElementById('phone').value;
    let grade = document.getElementById('grade').value;

    let gender
    if(document.getElementById("male").checked){
        gender = "Male";
    }
    else if (document.getElementById("female").checked){
        gender = "Female";
    }
    else {
        gender = "Not specified";
    }
    
    students.push(new Student(fullName, dateOfBirth, gender, major, image, phone, grade));   

    // set array items in local storage
    // this statement will add the new item to local Storage
    localStorage.setItem(`${localStorage.length}`, JSON.stringify(students[students.length-1]));
    console.log(localStorage);
}
// localStorage.clear();

let students = [];
let cards = '';

for(i=0; i<localStorage.length; i++){
    let key = localStorage.key(i);
    let student = JSON.parse(localStorage.getItem(key));

    // adding local storage elements as card to be added in html
    cards += `<div class="card m-2" style="width: 20rem; padding: 10px 20px;">
                <img src="${student.image}" class="card-img-top" alt="Student's Avatar">
                <div class="card-body">
                    <h5 class="card-title">Name: ${student.name}</h5>
                    <p class="card-text">Date of birth: ${student.dob}</p>
                    <p class="card-text">Gender: ${student.gender}</p>
                    <p class="card-text">Major: ${student.major}</p>
                    <p class="card-text">Phone number: ${student.phone}</p>
                    <p class="card-text">Grade: ${student.grade}</p>
                </div>
            </div>`;

}

document.getElementById("card-list").innerHTML = cards;
console.log(localStorage);
