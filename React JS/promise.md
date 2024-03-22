A promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation, and its resulting value. Promises provide a way to handle asynchronous operations more easily, avoiding deeply nested callback functions and improving code readability and maintainability.

Promise States:
Pending: Initial state, before the promise is resolved or rejected.
Fulfilled (Resolved): The operation was completed successfully.
Rejected: The operation failed or encountered an error.
Promise Chain:
Promises can be chained together using the .then() method. This method is used to handle the fulfillment of the promise (when it's resolved) or the rejection of the promise (when it's rejected). Each .then() call returns a new promise, allowing you to chain multiple asynchronous operations together in a sequence.

javascript
Copy code
asyncFunctionReturningPromise()
    .then(result => {
        // Handle successful result
        return anotherAsyncFunctionReturningPromise(result);
    })
    .then(newResult => {
        // Handle the result of the second asynchronous operation
    })
    .catch(error => {
        // Handle errors from any step in the chain
    });
Promise.all():
The Promise.all() method takes an array of promises as input and returns a single promise that resolves when all of the promises in the array have resolved, or rejects when any one of the promises rejects. It's useful when you need to wait for multiple asynchronous operations to complete before proceeding.

javascript
Copy code
const promises = [promise1, promise2, promise3];

Promise.all(promises)
    .then(results => {
        // Handle array of results from all promises
    })
    .catch(error => {
        // Handle error if any of the promises fail
    });
Use of fetch() & then():
The fetch() function is used to make network requests to fetch resources from the web. It returns a promise that resolves to the Response object representing the response to the request.

javascript
Copy code
fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse JSON response
    })
    .then(data => {
        // Handle the parsed data
    })
    .catch(error => {
        // Handle errors
    });
In this example, fetch() is used to make a network request, and the .then() method is used to handle the response asynchronously. The first .then() handles the response object, checking if the request was successful and parsing the JSON response. The second .then() handles the parsed data. Any errors that occur during the fetch operation or parsing are caught and handled in the .catch() block.