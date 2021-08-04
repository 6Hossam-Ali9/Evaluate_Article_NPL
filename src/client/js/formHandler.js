function handleSubmit(event) {
    event.preventDefault()

    var input = document.getElementById('url')//select the input value

    if(Client.checkForUrl(JSON.parse(JSON.stringify(input.value)))) //checking the URL
    {
        fetch('http://localhost:3000/api', { //we used 3000/api as this what i choosed for retriving the data from api
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({text: input.value})
        })
        .then(res => res.json())
        .then(function(res) {
            console.log(res); 
            document.getElementById('agreement').innerHTML = res.agreement
            document.getElementById('subjectivity').innerHTML = res.subjectivity
            document.getElementById('confidence').innerHTML = res.confidence
            document.getElementById('irony').innerHTML = res.irony
        })

    }else{
        var error = document.getElementById('error');
        error.innerHTML = "URL is not valid. Please enter a valid url!!"
    } 
}

export { handleSubmit }