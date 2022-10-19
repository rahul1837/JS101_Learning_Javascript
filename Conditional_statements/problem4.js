// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.



let reg_userName = "rahul123";
let reg_password = 12345;
let ent_userName = "rahul123";
let ent_password = 12345;
if(reg_userName === ent_userName){
  
  if(ent_password === reg_password){
    console.log("Login successful")
  } 
      else{
            console.log("wrong password");
       }
}    
   else{
        console.log("wrong credentials")
  
      }
       