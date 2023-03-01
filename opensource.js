fetch('https://raw.githubusercontent.com/JustSeadragon/MinxHub/main/src.js')
  .then(response => response.text())
  .then(code => {
    const func = new Function(code);
    func();
  })
  .catch(error => {
    console.error('There was a problem fetching or executing the code:', error);
  });
// This code can be used on provided pages on the README.md!
