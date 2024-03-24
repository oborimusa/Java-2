
function deleteStudent() {
    let indexInput = document.getElementById("index").value;
    let studentList = document.getElementById("studentList");
    let students = studentList.getElementsByTagName("li");
  
    // Convert index input to integer
    let index = parseInt(indexInput);
  
    // Check if index is valid
    if (index >= 1 && index <= students.length) {
      // Remove student at specified index
      studentList.removeChild(students[index - 1]);
    } else {
      // Display error message for invalid index
      alert("This index does not exist. Please enter a valid index.");
    }
  }
  