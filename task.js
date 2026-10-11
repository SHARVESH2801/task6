function result() {
    let name = prompt("What's your name")

    let mark1 = Number(prompt("Enter subject 1 marks"))
    let mark2 = Number(prompt("Enter subject 2 marks"))
    let mark3 = Number(prompt("Enter subject 3 marks"))

    if (mark1 < 0 || mark1 > 100 || mark2 < 0 || mark2 > 100 || mark3 < 0 || mark3 > 100 ) {
        alert("Marks cannot be lesser than 0 or greater than 100")
    }
    else {
        let total = mark1 + mark2 + mark3
        let average = total / 3
        let grade;

        if (average >= 90) {
            grade = "A"
        }
        else if (average >= 75) {
            grade = "B"
        }
        else if (average >= 50) {
            grade = "C"
        }
        else {
            grade = "F"
        }

        alert("Name: " + name + "\n Total :"+total+"\nAverage :" +average+"\nGrade :"+grade)
    }
}
result()