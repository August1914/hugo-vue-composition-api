const baseUrl = "http://localhost:3000";

function toJson(response){
    return response.json();
}

function fetchBooks(){
    return fetch(`${baseUrl}/src/books/`)
        .then(toJson)
}

function fetchBook(id){
    return fetch(`${baseUrl}/src/books/${id}`)
        .then(toJson)
}

export default {fetchBooks, fetchBook };