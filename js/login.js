// Below function Executes on click of login button.
function validate() {
    var username = $("#username").val();
    var password = $("#password").val();
    if (username == "guest" && password == "guest") {
        console.log("Login successfully");
        
        var options = {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
                loginMode: 8
            })
        }

        fetch('https://demo.microstrategy.com/MicroStrategyLibrary' + '/api/auth/login', options)
            .then(function (response) {
                if (response.ok) {
                    console.log(response.headers.get('x-mstr-authToken'));
                    // document.querySelector("h2").innerHTML = response.headers.get('x-mstr-authToken')
                    return response.headers.get('x-mstr-authToken');
                    // window.location = "http://127.0.0.1:5555/Updated%20Code%2020062022/index.html";
                   
                } else {
                    throw (new Error("Login Error"));
                }
            })
    }
    else {
        console.log("Wrong Pasword");
    }
}