// function validate(){
//   var name = document.getElementById("name").value;
//     var number = document.getElementById("phoneNumber").value;
//     var date = document.getElementById("dob").value;
//     var email = document.getElementById("email").value;
//     // if(name==null||number==null||date==null||email==null){
//     //   document.getElementById("submit").disabled=true;
//     // }
//     var maritalStatus=document.getElementById("Married").checked?"Married":"Single";
//     var url = new URL("http://127.0.0.1:5501/Views/result.html");
//     url.searchParams.append("name",name);
//     url.searchParams.append("phoneNumber",number);
//     url.searchParams.append("dob",date);
//     url.searchParams.append("email",email);
//     url.searchParams.append("maritalStatus",maritalStatus);
//     var myWindow=window.open(url,"","width:100px","height:100px");  
//     setTimeout(function() {myWindow.close()}, 3000);
// }

function validate(){
  var validation=true;
  var Values=[document.getElementById("name"),document.getElementById("dob"),
  document.getElementById("phoneNumber"),document.getElementById("email"),document.getElementById("country")];
  Values.forEach(element => {
    if(element.value==null||element.value==""){
      validation=false;
    }
  });
  document.getElementById("submit").disabled=validation?false:true;
}


// function display () {

//   const urlParams = new URLSearchParams(window.location.search);
//   const name = urlParams.get('name');
//   document.write("<br>Name:");
//   document.write(name);
//   console.log(name);

//   const phoneNumber = urlParams.get('phoneNumber');
//   document.write("<br>Phone Number:");
//   document.write(phoneNumber);
//   console.log(phoneNumber);

//   const dob = urlParams.get('dob');
//   document.write("<br>Date of Birth:");
//   document.write(dob);     
//   console.log(dob);   
        
//   const email = urlParams.get('email');
//   document.write("<br>Email:");
//   document.write(email);        
//   console.log(email);

//   const maritalStatus=urlParams.get('maritalStatus');
//   document.write("<br>Marital Status:");
//   document.write(maritalStatus=="on"?"Married":"Single");
//   console.log(maritalStatus);

//   console.log("success");
//   document.write("<br><br>Values sumbmitted sucessfully!!!!")
// }
result=()=>{
	parameters=new URLSearchParams(window.location.search)
  parameters.forEach((value,key) => {
    console.log(value);
    if(key=="maritalStatus"){
      document.write("Marital Status:")
      document.write(value!="on"?"Married<br>":"Single<br>");
    }else{
    document.write(key +":" +value + "<br>");
    }
  });
}
