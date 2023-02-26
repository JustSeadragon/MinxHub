// Global Variables //
let sm1 = "MinxHub has been executed.";

alert(sm1);

// Function to ask for API token
function askAPI() {
  let token = prompt("API Token?");
  if (token === "TWlueEh1YkFQSVRva2Vu") {
    alert("Logging in!");
  } else {
    alert("Invalid token!");
  }
}

askAPI();
