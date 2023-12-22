// function declaration
// function greet_user(){
//     console.log("welcome  mr.asad")
// }

// calling a function
// greet_user()
// greet_user()
// greet_user()


// a function with parameter : parametrized function
// function greet_user(username){
//     console.log(`Welcome Mr.${username}`)
// }
// greet_user('Ali')


// function konbarahy(a,b){
//     if(a>b){
//         console.log("A bra hy")
//     }
//     else{
//         if(b>a){
//             console.log("B bra hy")
//         }
//         else{
//             console.log("koi bara nahe hy")
//         }
//     }

// }
// konbarahy(20,13)
// konbarahy(20,20)
// konbarahy(14,15)
// function whoiselder(Ali,Asim){
//     if(Ali>Asim){
//         console.log("Alis is elder than Ali")
//     }
//     else{
//         if(Asim>Ali){
//             console.log("Asim is elder than Ali")
//         }
//         else{
//             console.log("NO One is Elder")
//         }
//     }
// }

// whoiselder(20,30)
// whoiselder(15,20)

// write a function that calculate BMI 
// ask user hig weight and height (bmi=w/h**2)

function obese_Calc(weight,height){
   
    BMI =weight/(height**2)
    if (BMI>=40){
        return "obese"
    }
    else if (BMI>=25 && BMI<40){
        return "over weight"
    }
    else if (BMI>=18.5 && BMI<25){
        return "Normal"
    }
    else{
        return "under weight"
    }

    return BMI
}
let weight_kg = parseFloat(prompt("Please Enter your Weight in kg"))
let height_m = (parseFloat(prompt("Enter your  Height in ft")))/3.3

alert(`Dear sir your are ${obese_Calc(weight_kg,height_m)}`)