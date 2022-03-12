function gradebtn() {
  let gradeInput = document.getElementById("input");
  let gradeValue = gradeInput.value;
  // let num = parseInt(gradeInput);
  gradeInput.value = "";

  if (gradeValue > 100) {
    alert("You cannot get more than 100 marks");
  } else if (gradeValue >= 90) {
    let result = document.getElementById("result");
    result.innerHTML = `Your grade is A+`;
    // console.log("your grade is A+");
  } else if (gradeValue >= 80) {
    let result = document.getElementById("result");
    result.innerHTML = `Your grade is A`;
    // console.log("your grade is A");
  } else if (gradeValue >= 70) {
    let result = document.getElementById("result");
    result.innerHTML = `Your grade is B`;
    // console.log("your grade is B");
  } else if (gradeValue >= 60) {
    let result = document.getElementById("result");
    result.innerHTML = `Your grade is C`;
    // console.log("your grade is C");
  } else if (gradeValue >= 50) {
    let result = document.getElementById("result");
    result.innerHTML = `Your grade is D`;
    // console.log("your grade is D");
  } else if (gradeValue == "") {
    alert("type a number first");
    // console.log(gradeValue);
  } else if (gradeValue <= 49 && gradeValue >= 0) {
    let result = document.getElementById("result");
    result.innerHTML = `Your grade is F`;
    // console.log("Your grade is F");
  } else if (gradeValue < 0) {
    alert("input a positive number");
  } else {
    alert("input must be a number");
    console.log(gradeValue);
  }
}
