document.addEventListener('DOMContentLoaded', () => { 
  function showSpinner() {
    document.getElementById('loading').hidden = false;
  }
  
  function hideSpinner() {
    document.getElementById('loading').hidden= true;
  }
  
  function makeRequest({ url, element }) {
    showSpinner();
    fetch(url)
      .then(response => response.json())
      .then(data => {
        document.getElementById(element).innerHTML = data.name;
        throw Error('Gigantic Error Message');
      })
      .catch(error => {
        document.getElementById(element).innerHTML = error;
      })
      .finally(() => {
        hideSpinner();
      });
  }
  
  makeRequest({
    url: 'https://swapi.co/api/people/1',
    element: 'response'
  });
});