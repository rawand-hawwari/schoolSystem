
let students = [];

class Student{
    constructor(name, dob, gender, major, phone, grade){
        this.name = name;
        this.name = dob;
        this.name = gender;
        this.name = major;
        this.name = phone;
        this.name = grade;
    }
}
function addnew(){
    let fullName = document.getElementById('fname').value;
    let dateOfBirth = document.getElementById('bday').value;
    let gender = document.getElementById('gender').value;
    let major = document.getElementById('major').value;
    let phone = document.getElementById('phone').value;
    let grade = document.getElementById('grade').value;

    students.push(new Student(fullName, dateOfBirth, gender, major, phone, grade));    
}


