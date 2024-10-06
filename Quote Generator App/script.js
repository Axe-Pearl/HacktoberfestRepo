//Note: Replay the apiKey with you API KEY from api-ninjas 
var apiKey = 'YOUR_API_KEY';
var category = 'happiness';

// Function to fetch a random quote from the API
function fetchQuote() {
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
        headers: { 'X-Api-Key': apiKey },
        contentType: 'application/json',
        success: function(result) {
            if (result.length > 0) {
                displayQuote(result[0].quote, result[0].author);
            } else {
                displayError('No quotes available.');
            }
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
            displayError('An error occurred while fetching the quote.');
        }
    });
}

// Function to display the fetched quote
function displayQuote(quote, author) {
    $('#quote').text('"' + quote + '"');
    $('#author').text('- ' + author);
}

// Function to display an error message
function displayError(message) {
    $('#quote').text(message);
    $('#author').text('');
}

// Event listener for button click to fetch a new quote
$('#quote-btn').on('click', fetchQuote);

// Fetch an initial quote when the page loads
$(document).ready(fetchQuote);
