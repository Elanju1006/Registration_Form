function urlConstruct(){
    var name=document.getElementById("name").value;
    var number=document.getElementById("phoneNumber").value;
    var date=document.getElementById("dob").value;
    var email=document.getElementById("email").value;
    var Designation=document.getElementById("Designation").value;
    var url=new URL("http://127.0.0.1:5501/Views/result.html");
    url.searchParams.append("name",name);
    url.searchParams.append("phoneNumber",number);
    url.searchParams.append("dob",date);
    url.searchParams.append("email",email);
    url.searchParams.append("Designation",Designation);
    window.location.href=url;
    
  }

function display(){
    const urlParams = new URLSearchParams(window.location.search);
        const name = urlParams.get('name');
        document.write("Name:");
        document.write(name);

        const phoneNumber = urlParams.get('phoneNumber');
        document.write("<br>Phone Number:");
        document.write(phoneNumber);

        const dob = urlParams.get('dob');
        document.write("<br>Date of Birth:");
        document.write(dob);        
               
        const email = urlParams.get('email');
        document.write("<br>Email:");
        document.write(email);        
               
        const designation = urlParams.get('Designation');
        document.write("<br>Designation:");
        document.write(designation);        
}