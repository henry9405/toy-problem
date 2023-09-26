function calculateGrade() {
    const marks = parseFloat(prompt("Enter student marks (0-100):")); //parseFloat converts string to a number
    
    if (!isNaN(marks) && marks >= 0 && marks <= 100) {
        if (marks > 79) {
            return 'A';
        } else if (marks >= 60) {
            return 'B';
        } else if (marks >= 50) {
            return 'C';
        } else if (marks >= 40) {
            return 'D';
        } else {
            return 'E';
        }
    } else {
        return 'Invalid input. Please enter a number between 0 and 100.';
    }
}

const grade = calculateGrade();
console.log(`The student's grade is: ${grade}`);


