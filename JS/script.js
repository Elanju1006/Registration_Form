function urlConstruct(){
    
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