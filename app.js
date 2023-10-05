
let students = [];

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
    let imageInput = document.querySelector('input[type="file"]');
    let imageName = imageInput.files[0].name;
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
    
    students.push(new Student(fullName, dateOfBirth, gender, major, imageName, phone, grade));   

    document.getElementById("card-list").innerHTML += 
        `<div class="card m-2" style="width: 20rem; padding: 10px 20px;">
            <img src="images/${students[students.length-1].image}" class="card-img-top" alt="${students[students.length-1].image}">
            <div class="card-body">
                <h5 class="card-title">Name: ${students[students.length-1].name}</h5>
                <p class="card-text">Date of birth: ${students[students.length-1].dob}</p>
                <p class="card-text">Gender: ${students[students.length-1].gender}</p>
                <p class="card-text">Major: ${students[students.length-1].major}</p>
                <p class="card-text">Phone number: ${students[students.length-1].phone}</p>
                <p class="card-text">Grade: ${students[students.length-1].grade}</p>
            </div>
        </div>`;

        // set array in local storage
        // this if statement will delete any item inside the local storage if the index is 
        // akready set (it will delete the old one and replace it with the new one)
        if(localStorage.getItem(`student${students.length}`) != null){
            localStorage.removeItem(`student${students.length}`);
        }
        // this statement will add the new item to local Storage
        localStorage.setItem(`student${students.length}`, JSON.stringify(students[students.length-1]));
        console.log(localStorage);

}