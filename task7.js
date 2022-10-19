 //Given stored username and password and input username and password, Print if the user can log in or not.
//Username and password stored in Data Base.

let DB_Username = "sahil";
let DB_Password = "AJ123";

//Username and password used for login

let username = "sahil";
let password = "AJ123";

if (DB_Username == username){
  
  if(DB_Password == password)
    
    {
        console.log("login sucessful");
      
    } else {
      
       console.log("wrong password");
     }
  
    } else {
     
     console.log("invalid user");
  
    }

  


