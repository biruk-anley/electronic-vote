// this one will validate age
function age() {
  let age = document.getElementById("forms").value;

  let votetext;
  if (isNaN(age)) {
    votetext = "texts are not allowed enter number please";
    document.getElementById("paragrapgh").innerHTML = votetext;
    return false;
  } else if (parseInt(age) < 18) {
    votetext = " sorry you age is not enough to vote";
    document.getElementById("paragrapgh").innerHTML = votetext;
    return false;
  } else if (parseInt(age) > 18) {
    return true;
  } else if ((age = " ")) {
    votetext = "you should enter your age";
    document.getElementById("paragrapgh").innerHTML = votetext;
    return false;
  }
}
// this one will validate first name
function firstName() {
  let holders = document.getElementById("firstName").value;
  let holderde;

  if (holders === "") {
    holderde = "please enter your first name";
    document.getElementById("errmesagefirst").innerHTML = holderde;
    return false;
  } else {
    return true;
  }
}

// this one will validate second name
function SecondName() {
  let holders = document.getElementById("SecondName").value;

  if (holders === "") {
    let holderde = "please enter your first name";
    document.getElementById("errmesagesecond").innerHTML = holderde;
    return false;
  } else {
    return true;
  }
}

// this one will validate last name
function lastName() {
  let holder = document.getElementById("lastName").value;
  if (holder === "") {
    let holderd = "please enter your name";
    document.getElementById("errmesage").innerHTML = holderd;
    return false;
  } else {
    return true;
  }
}

// this one will validate email

function email() {
  let holder = document.getElementById("Email").value;
  if (holder === "") {
    let holderd = "enter your email";
    document.getElementById("errmesageemail").innerHTML = holderd;
    return false;
  } else {
    return true;
  }
}

// this one will validate Region

function region() {
  let holder = document.getElementById("Region").value;
  if (holder === "") {
    let holderd = "enter your region";
    document.getElementById("errmesageregion").innerHTML = holderd;
    return false;
  } else {
    return true;
  }
}

// this one will validate city

function city() {
  let holder = document.getElementById("City").value;
  if (holder === "") {
    let holderd = "enter your city";
    document.getElementById("errmesagecity").innerHTML = holderd;
    return false;
  } else {
    return true;
  }
}

// this one will validate woreda

function woreda() {
  let holder = document.getElementById("woreda").value;
  if (holder === "") {
    let holderd = "enter your woreda";
    document.getElementById("errmesageworeda").innerHTML = holderd;
    return false;
  } else {
    return true;
  }
}

// this one will zone

function zone() {
  let holder = document.getElementById("zone").value;
  if (holder === "") {
    let holderd = "enter your Zone";
    document.getElementById("errmesagezone").innerHTML = holderd;
    return false;
  } else {
    return true;
  }
}

// this one will validate all of the function
function validate() {
  if (
    age() &&
    lastName() &&
    firstName() &&
    SecondName() &&
    email() &&
    region() &&
    city() &&
    zone() &&
    woreda()
  ) {
    window.location.href = "source/party.html";
  }
}

document.getElementById("sub").addEventListener("click", (event) => {
  event.preventDefault();
  validate();
});
