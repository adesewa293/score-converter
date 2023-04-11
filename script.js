const numericEl = document.getElementById('numericGrade')
const gradeEl =document.getElementById ('grade')
function convert () {
 const value = numericEl.value;
 // console.log(value);
 gradeEl.innerText = value
 if (value >= 90) {
     gradeEl.innerText = "A";
 } else if (value >= 80) {
     gradeEl.innerText = "B";
 } else if (value >= 70) {
     gradeEl.innerText = "C";
 } else if (value >= 60) {
     gradeEl.innerText = "D";
 } else if (value >= 0) {
     gradeEl.innerText = "F";
 }
}