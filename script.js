function submitForm(){

    let Name = document.getElementById('na').value;
    let Number = document.getElementById('nu').value;
    let Mail = document.getElementById('ma').value.trim();

    if(Name==""){
        document.getElementById('a1').innerHTML = "Name is required";
        return false;
    }
    else{
        document.getElementById('a1').innerHTML = "";
    }

    if(Number==""){
        document.getElementById('a2').innerHTML = "Number is required";
        return false;
    }
    else if(isNaN(Number)){
        document.getElementById('a2').innerHTML = "Enter numbers only";
        return false;
    }
    else{
        document.getElementById('a2').innerHTML = "";
    }

    if(Mail==""){
        document.getElementById('a3').innerHTML = "E-mail is required";
        return false;
    }
    else {
        document.getElementById('a3').innerHTML = "";
    }

    document.getElementById('a3').innerHTML = "";

    alert("Form is submitted successfully!");
    return true;
   
}