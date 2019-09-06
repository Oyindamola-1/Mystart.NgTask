function validation (){
    var name = document.getElementById("name").value;
    var title = document.getElementById("title").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding = "10px";

    if(name.length <4){
        text = "Please Enter Valid Name";
        error_message.innerHTML = text;
        return false;
     }
     if(title.length <3){
        text = "Please Enter Valid title";
        error_message.innerHTML = text;
        return false;
     }
     if(isNaN(phone) || phone.length !=11){
        text = "Please Enter a Valid Phone Number";
        error_message.innerHTML = text;
        return false;
     }
     if(email.indexOf("@") == -1 || email.length <6){
      text = "Please Enter Valid Phone Email";
      error_message.innerHTML = text;
      return false;
     }
     if(message.length <= 140){
      text = "Please Enter More Than 20 Characters";
      error_message.innerHTML = text;
      return false;
      } 
      alert ("Successful")
      return true;
} 