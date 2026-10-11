let loop = true;

while (loop == true) {
    
    let input = prompt("Enter a number:");
    let number = Number(input);
    
    let type;
    if (number % 2 == 0) {
        type = "even";
    } else {
        type = "odd";
    }
    
    function table(n) {
        for (let i = 1; i <= 10; i++) {
            console.log(n + " x " + i + " = " + (n * i));
        }
    }
    table(number);
    
    let sum = 0;
    for (let j = 1; j <= number; j++) {
        sum = sum + j;
    }
    
    if (type == "even") {
        for (let r = 1; r <= number; r++) {
            let row = "";
            for (let c = 1; c <= number; c++) {
                row = row + "*";
            }
            console.log(row);
        }
    } else {
        for (let r = 1; r <= number; r++) {
            let row = "";
            for (let c = 1; c <= r; c++) {
                row = row + "*";
            }
            console.log(row);
        }
    }
    
    alert("Your number is " + type + "\nThe sum from 1 to " + number + " is " + sum);
    
    loop = confirm("Do you want to try another number?");
}





