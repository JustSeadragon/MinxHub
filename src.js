// Global Variables //
let sm1 = "MinxHub has been executed.";

alert(sm1);

// Function to ask for API token
function askAPI() {
  let token = prompt("API Token?");
  console.log("%c", "padding: 50px; background:url(https://user-images.githubusercontent.com/82759997/221420603-e2de8ea7-0907-489a-a627-f32426a46251.png) no-repeat;");
  if (token === "TWlueEh1YkFQSVRva2Vu") {
    alert("Logging in!");
  } else {
    alert("Invalid token!");
  }
}

askAPI();
