/**
 * JavaScript file
 */

/**
 * Start Global variables
 */

const textInput = document.getElementById('text-input');
const numberInput = document.getElementById('number-input');
const generateButton = document.getElementById('button');
const final = document.getElementById('final');
const copy = document.getElementById('copy-button');
const copyStyle = document.getElementById('copy-button');

/**
 * End global variables
 */

// For testing:
console.log(textInput);
console.log(numberInput);
console.log(generateButton);
console.log(final);
console.log(copy);
console.log('\n');

/**
 * Start looping over the input text
 */

   
generateButton.addEventListener('click', function() {
    
    // Start count and loop
    let count = 1;
    while (count <= Number(numberInput.value)) {
        // textInput.value += ('');
        final.value = String(textInput.value).repeat(count);

        count++;
    };
});

/**
 * End looping over the input text
 */


/**
 * Adding functionality to copy button
 */

copy.addEventListener('click', function copyText() {
    copy.value = "Copied";
    copy.style.color = "blue";
    copyStyle.style.width = "77px";
    final.select();
    document.execCommand('copy');
});


/**
 * End adding functionality to copy button
 * End of script.
 */
