function select() {
    let partyholder;
    let partyName = document.querySelector("input[name='fav_language']:checked");
    console.log(partyName)
    if (partyName ==null) {
        partyholder = "please select the party";
        document.getElementById("errormessage").innerHTML = partyholder;
        
    }
    else if(partyName!=null){
        return window.location.href = "successfull.html";
    }

}



document.getElementById("partysubmit").addEventListener('click', (event) => {
    event.preventDefault();
    select();

})
    
    