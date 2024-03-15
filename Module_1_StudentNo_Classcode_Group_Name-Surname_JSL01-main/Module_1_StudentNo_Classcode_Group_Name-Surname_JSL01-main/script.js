function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let result = ''; // Placeholder for validation result

    // Regular expression to check if input starts with 'pet_' and followed by alphanumeric characters
    let regex = /^pet_\d{4}[a-zA-Z]+$/;

    // Check if the input matches the regular expression
    if (regex.test(input)) {
        // If the input matches the pattern, set the result to "Valid Syntax"
        result = "Valid Syntax";
    } else {
        // If the input does not match the pattern, set the result to "Invalid Syntax"
        result = "Invalid Syntax";
    }

    // Display the validation result
    document.getElementById('result').innerText = result;
}



