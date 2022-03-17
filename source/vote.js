 
 function vote(){
   let age=document.getElementById("vote").value
   if (isNaN(age)){
       votetext="texts are not allowed enter number please"
   }
   else if(age<18){
       votetext=" sorry you age is not enough to vote"
   }
   else{
       votetext="you  vote has been successfully completed"
   }

   document.getElementById("paragrapgh").innerHTML=votetext
}

