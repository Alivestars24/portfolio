(function(){
    emailjs.init("CqpMPdxcUYmg6XNXH");
 })();
 const serviceId = "service_ysb6sl3";
 const templateId = "template_3sutbve";
 const handleSubmit=() => {
    const userName = document.querySelector(".name").value;
    const email = document.querySelector(".email").value;
    const message = document.querySelector(".message").value;
    if(userName ===""){
        alert("Name is required");
    }
    else if(email ===""){
        alert("Email is required");
    }
    else if(message ===""){
        alert("Message is required");
    }
    else {var params={
        name:userName,
        email:email,
        message:message,
    };
    emailjs
       .send(serviceId,templateId,params)
       .then((res) => {
         document.querySelector(".name").value="";
         document.querySelector(".email").value="";
         document.querySelector(".message").value="";
         alert("Mail has been sent succesfully!");
       })
       .catch((err) =>{
         console.log("An error has been occured");
       });}
 };