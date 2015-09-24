var validateForm = function(){
    var x = document.forms["loginForm"]["username"].value;
    var y = document.forms["loginForm"]["password"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }
    if (y == null || y =="") {
      alert("Password must be filled out");
      return false;
    }
    if ((x == null || x =="") && (y == null || y =="")){
      alert("Please fill in your username and password");
      return false;
    }
    else{
      alert("User is logged in");
    }
};

var quickContact = function(){
  var x = document.forms["quickContact"]["quick-contact-name"].value;
  var y = document.forms["quickContact"]["quick-contact-email"].value;
  if (x == null || x == "") {
      alert("Name must be filled out");
      return false;
  }
  if (y == null || y =="") {
    alert("Emailaddress must be filled out");
    return false;
  }
  if ((x == null || x =="") && (y == null || y =="")){
    alert("Please fill in your Name and Emailaddress");
    return false;
  }
  /*
  if (y !== "@" || y !== ".") {
    alert("Not a valid emailaddress");
    return false;
  }
  */
  else{
    alert("We'll get in touch");
  }
};

var generateQuote = function(){
  alert("You never get what you want. But if you try, you get what you need.");
};
