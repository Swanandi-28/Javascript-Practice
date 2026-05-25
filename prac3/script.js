function generatePassword(){

    let length = document.getElementById("length").value;

    if(length <= 0){
        alert("Enter valid length");
        return;
    }

    let chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let password = "";

    for(let i = 0; i < length; i++){

        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];

    }

    document.getElementById("result").innerHTML = password;
}

