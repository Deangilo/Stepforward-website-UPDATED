console.log("running");

function Sendinfo(){
	var firstname=document.getElementById('firstname').value;
	var lastname=document.getElementById('lastname').value;
	var email=document.getElementById('email').value;
	var message=document.getElementById('message').value;
	validation();
	alert("Thank you for contacting me, I will get back to you as soon as possible! Information entered:\n First Name: "+firstname+"\n Last Name: "+lastname+"\n Email: "+email+"\n Message: "+message);
}
function validation(){
var firstname = document.getElementById("firstname").value;
var lastename = document.getElementById("lastname").value;
var email = document.getElementById("email").value;
var emailReg = /@/;
if( firstname ==='' || lastname ==='' || email ==='' ){
alert("Please fill all fields");
}
if (emailReg.test(email)== false){
alert("Invalid Email Format");
return false;
}else{
return true;
}
}