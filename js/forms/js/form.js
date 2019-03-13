// window.onload = function() {
    
//     document.querySelector('.input-name').onkeypress = function(element) {
//         // console.log(element.keyCode);
//         let input = document.querySelector('.input-name');
//         // console.log(input);

//         if (element.keyCode >=1040 && element.keyCode <= 1103) {
//             input.classList.add("border-red");
//             alert("Use only latin alphabet");
//             return false;
//         } else if (element.keyCode >=48 && element.keyCode <= 57) {
//             alert("Do not use numbers in this fild");
//             return false;
//         } else if (element.keyCode >= 65 && element.keyCode <= 122) {
//             input.classList.remove("border-red");
//         }  
//     }

//     document.querySelector('.input-name').onkeypress = function(element) {
//         // console.log(element.keyCode);
//         let input = document.querySelector('.input-name');
//         // console.log(input);

//         if (element.keyCode >=1040 && element.keyCode <= 1103) {
//             input.classList.add("border-red");
//             alert("Use only latin alphabet");
//             return false;
//         } else if (element.keyCode >=48 && element.keyCode <= 57) {
//             alert("Do not use numbers in this fild");
//             return false;
//         } else if (element.keyCode >= 65 && element.keyCode <= 122) {
//             input.classList.remove("border-red");
//         }  
//     }

//     document.querySelector('.submit').onclick = validate;

//     function validate() {
//         let name = document.querySelector(".input-name").value;

//         if (name == "") {
//             alert("Please fill all inputs!");
//         }
//     }









// }

document.querySelectorAll(".input-text").forEach(function(element) {
    element.onkeypress = validate;
});

function validate(element) {

    if (element.keyCode >=1040 && element.keyCode <= 1103) {
            alert("Use only latin alphabet");
            return false;
        } else if (element.keyCode >=48 && element.keyCode <= 57) {
            alert("Do not use numbers in this fild");
            return false;
        } else if (element.keyCode >= 65 && element.keyCode <= 122) {
    }  

    document.querySelector(".input-email").onkeypress = function(element) {
        if (element.keyCode >=1040 && element.keyCode <= 1103) {
            alert("Use only latin alphabet");
            return false;
        }
    }
    
}