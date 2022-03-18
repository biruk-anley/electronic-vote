 
 function vote(){
   let age=document.getElementById("vote").value
   const val = document.getElementById('vote').style.borderColor = "rgb(247, 81, 81)"
   let votetext;
   if (isNaN(age)){
       votetext="texts are not allowed enter number please"
       document.getElementsByTagName(input)
   }


   else if(parseInt(age)<18){
   val
   votetext=" sorry you age is not enough to vote" + val
    }
      else if(age = " "){
        votetext = "you should enter your age";
    }
   else {
       votetext="you  vote has been successfully completed"
   }

   document.getElementById("paragrapgh").innerHTML=votetext
}

