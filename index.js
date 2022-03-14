const myObject = {
    firstName : "MIAN",
    secondName : "MUHAMMAD",
    lastName : "BILAL",
    fullName : function(){
    return this.firstName + this.secondName + this.lastName;
    }
    
    
    }
    document.getElementById("demo").innerHTML = myObject.fullName(); 


   