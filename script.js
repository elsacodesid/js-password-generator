const generatedPass = document.querySelector("#generated-pass")

document.getElementById('refresh-btn').addEventListener('click', function() {
    location.reload();
})



const passLength = 16
const includeLowerCase = true
const includeUpperCase = true
const includeNumbers = true
const includeSymbols = true

const pass = generatePass(passLength,
                          includeLowerCase, 
                          includeUpperCase, 
                          includeNumbers, 
                          includeSymbols)

// Random Password Generator



function generatePass(length,             
                      includeLowerCase, 
                      includeUpperCase, 
                      includeNumbers, 
                      includeSymbols){

    const lowerCaseChars = "abcdefghijklmnopqrstuvwzyz"
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numberChars = "0123456789"
    const symbolChars = "~!@#$%^&*()_+=:;,.?/\'\`[]-|\""

    let allowedChars = ""
    let pass = ""

    allowedChars += includeLowerCase ? lowerCaseChars : ""
    allowedChars += includeUpperCase ? upperCaseChars : ""
    allowedChars += includeNumbers ? numberChars : ""
    allowedChars += includeSymbols ? symbolChars : ""

    if (length <= 0){
        return ("password length must be at least 1")
    }
    if (allowedChars.length === 0){
        return "(At least 1 set of character needs to be selected)"
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length)
        pass += allowedChars[randomIndex]
    }

    return generatedPass.innerHTML = pass

}
 


