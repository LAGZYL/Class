// //control flows
// //falsy values
// //block scope

let a = 21;

// if ( a < 10 ) {
//     console.log(a);
// } else if( a == 20){
//     console.log("we are equal");
    
// } else {    
//     console.log("print me");
// }

/**
 * a - 70 >
 * b 60-69
 * c 50-59
 * d 45-49
 * e 40 - 44
 * f - <= 39
 */


//&& - and 
// truth table
 //or || - 1 || 1 -true, 1 || 0 -true, 0 || 0 -false
 //and && 1 && 1 - true, 1 && 0 - false

//  let score = 900;

// if(score >= 70 && score <= 100) {
//     console.log(`you have an a`);
// } else if (score >= 60 && score <= 69) {
//     console.log('you have b');   
// } else if (score > 50 && score <= 59) {
//     console.log("you have c");
// }
// else if (score > 45 && score <= 49) {
//     console.log("you have d");
// } else if (score > 40 && score <=44) {
//     console.log("you have e");
//  }
//  else if (score <=39) {
//     console.log("you have f");
//  } else {
//     console.log("you have entered an invalid score"); 
// }

// // Write a JavaScript program that checks if a number is positive, negative, or zero.
// let number = 0

// if (number > 0) {
//     console.log("i am a positive number");
// } else if (number < 0) {
//     /console.log("i am a negative number")
// } else if (number == 0){
//     console.log("i am a zero");
// }

// Write a program that checks if a person is eligible to vote. The person must be 18 years or older to vote.
let age = 18
if (age >= 18) {
    console.log("you are eligible to vote");
} else {
console.log("you are  not eligible to vote");
 }

 //Write a program that checks if a number is even or odd.
 // number3 % 2 == 0 
 let number3 = 9;
 if ( number3 % 2 == 0 ) {
    console.log("this is even number");
    }else if (number3 % 2 == 1) {
        console.log("this is old number");
    }
    
    //Write a program that checks if a user-provided password is correct. The correct password is "admin123".
    let password = "admin12"
    if (password == "admin123") {
        console.log("this is correct");
    } else {
      console.log("this is wrong");
        
    }

    //Write a program that checks which of two numbers is greater, or if they are equal.
    let _number = 20
    let number6 = 11
    if (number6 > _number ) {
        console.log("number6 is not greater");
    } else if (number6 == _number) {
      console.log("they are equal");
    } else {
        console.log("_number is greater than number6");
        
    }

    //Write a program that checks if the temperature is hot, warm, or cold.
    /**
     * Hint:

      temp >= 30 → hot

       temp >= 20 → warm

      otherwise → cold
     */

      //Write a program that checks if someone is old enough to watch a PG-18 movie.

      //Write a program that checks if a user gets a discount for spending more than ₦10,000.

      //Write a program that checks if the current time is before 6 AM and reminds the user to keep sleeping.

      // Write a program that gives a discount on transport fare to children under 12 and elderly over 60.
        
      let temp1 = 10;
      if (temp1 >= 30) {
        console.log("the temperature is hot");
        
      } else if (temp1 >= 20 && temp1 < 30) {
        console.log("the temperature is warm");
        
      } else {
        console.log("the temperature is cold");
      }



        let pgmoviewatcher = 18
        if (pgmoviewatcher >= 18) {
            console.log("eligible to watch the movie");
        } else{
            console.log("not eligible to watch the movie");
        }



        let time1 = "6am"
        if ( time1 < "6am") {
            console.log("keep sleeping");
            
        } else {
            console.log(" wake up");
        }
      
        

        let spend = 10000
        if (spend > 10000) {
            console.log("discount apply");
        } else {
            console.log("no discount");
        }



        let _age = 60
        if (_age >= 60 && _age <= 12) {
            console.log("transport fare is given");
        } else {
            console.log("transport fare not given");
            
        }

        // tenary operater
       // (conditin) ? "true" : "false";

        let money = 1000;
        (money >= 1000) ? console.log("discount appilexd") : console.log("not applies");
        
        let age9 = 60;
        (age9 >= 60 && age9 <= 12) ? console.log("transport fare is given") : console.log("transport fare not given");

        let time = "6am";
        (time <  "6am") ? console.log("keep sleeping") : console.log("wake up");
        
        
        let moviewather = 18;
        (moviewather >= 18) ? console.log("eligible to watch the movie") : console.log("not eligible to watch the movie");
        
        let grade = 'x'
        switch (grade) {
            case 'a':
                console.log("excellent");
                break;
            case 'b':
                console.log("very good");
                break;
            case 'c':
                console.log("good");
                break;
            case 'd':
                console.log("fair");
                break;
            case "e":
                console.log("pass");
                break;
            case "f":
                console.log("failed");
                break;
        
            default:
                console.log("wrong grade");
                break;
        }
        

        // Write a program that takes a number between 1 and 7 and prints the corresponding weekday, If the number is not between 1 and 7, print "Invalid day".

        let numberx = 7
        switch (numberx) {
            case 1:
                console.log("sunday");
                break;
        case 2:
            console.log("monday");
            break;
        case 3:
            console.log("tuesday");
            break;
        case 4:
           console.log("wednesday");
            break;
        case 5:
            console.log("thursady");
            break;
        case 6:
            console.log("friday");
            break;
        case 7:
            console.log("saturday");
            break;
            
            default:
                console.log("invalid day");
                break;
        }


        //nested if..else

        // write a code to check if a citizen is from continent, country and tribe.

        /**
         * Write a program that takes a person's age and whether they have a ticket (yes or no) and determines
         *  if they are allowed to enter a movie theater.

Rules
If the person is 18 or older:
If they have a ticket, print "Access granted"
If they don’t have a ticket, print "Ticket required"
If the person is under 18:

If they have a ticket, print "Parental guidance required"

If they don’t have a ticket, print "Access denied"
         */

let personage = 15;
let hasticket = "no";

personage >= 18 ? (hasticket == "yes") ? console.log("access granted") : console.log("ticket required") :
 (hasticket == "yes") ?  console.log('parental guidance required') : console.log("access denied");

if (personage >= 18){
    if(hasticket == "yes"){
        console.log("access granted");
    } else {
        console.log("ticket required");  
    }
} else {
    if (hasticket == "yes"){
        console.log('parental guidance required');  
    } else {
        console.log("access denied");   
    }
}

/**
 * Write a program that takes a student's score (0–100) and checks if the student passed or failed.
Rules:
If the score is 50 or above, the student passed.
If the score is 90 or above, print "Excellent pass"
If the score is between 70 and 89, print "Good pass"
If the score is between 50 and 69, print "Fair pass"
If the score is below 50, print "Fail"
 */
let studentscore1 = 35;
if (studentscore1 >= 50){
    console.log("student passed");
    if (studentscore1 >= 90) {
        console.log("excellent pass");    
    } else if (studentscore1 >= 70 && studentscore1 <=89){
        console.log("good pass"); 
    } else if (studentscore1 >= 50 && studentscore1 <= 69){
        console.log("fair pass");
    }
} else if (studentscore1 < 50) {
    console.log("fail");
    
}

if (studentscore1 >= 50) {
    console.log("student passed");
} else if (studentscore1 >= 90) {
    console.log("excellent pass");  
}else if (studentscore1 >= 70 && studentscore1 <= 89) {
    console.log("good pass");
}else if (studentscore1 >= 50 && studentscore1 <= 69) {
    console.log("fair pass");
} else {
    console.log("fail");
    
}

//assignment

/**
 * Write a program that suggests what to wear based on the temperature and weather condition.
If the temperature is above 25°C:
    If the weather is "sunny", print "Wear sunglasses and light clothes"
    If the weather is "cloudy", print "Wear light clothes"  
If the temperature is 15–25°C:
    If the weather is "sunny", print "Wear a t-shirt and jeans"
    If the weather is "rainy", print "Wear a jacket and carry an umbrella"
If the temperature is below 15°C, print "Wear a sweater or coat"
 */
let temperature = 4;
let weathercondition = "sunny";

if (temperature > 25) {
    if (weathercondition == "sunny"){
        console.log("wear sunglasses and light clothes");
        
    } else if (weathercondition == "cloudy"){
        console.log("wear light clothes");
        
    }
} else if (temperature >= 15 && temperature <= 25) {
    if (weathercondition == "sunny"){
        console.log("wear a t-shirt and jeans");
    } else if( weathercondition == "rainy"){
        console.log("wear a jacket and carry an umbrella");
        
    }
} else if (temperature < 15) {
    console.log("wear a sweater or coat");
}



/**
 * Write a program to simulate a simple ATM withdrawal process.
If the user has enough balance to withdraw:
If the amount is more than 50,000, print "Transaction needs extra verification"
If the amount is 50,000 or less, print "Withdrawal successful"
If the user has insufficient balance, print "Insufficient funds"
 */

let balance = 50;

if (balance > 0){
    console.log("has balance to withdraw");
if (balance > 50000) {
     console.log("transaction need extra verification");    
} else if (balance <= 50000) {
    console.log("transaction succesful");
}
} else if ( balance <= 0){
console.log("insuffievient fund");
} 


// falsy values - false, "", null, undefined, nan, 0
let falsy = false;
console.log(Boolean(false));
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));


    
