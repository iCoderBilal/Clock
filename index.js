const myObject = {
    firstName : "MIAN",
    secondName : "MUHAMMAD",
    lastName : "BILAL",
    fullName : function(){
    return this.firstName + this.secondName + this.lastName;
    }
    
    
    }
    document.getElementById("demo").innerHTML = myObject.fullName(); 

let myName = "Mian Muhammad Bila0";
function myFunction(){

if(myName=="Mian Muhammad Bila0"){
    console.log('You are right')


}else{

console.log("you are wrong")
}
}
   