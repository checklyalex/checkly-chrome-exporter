chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getText"){

      let inputs = document.querySelectorAll('.rk-input-container input');
      let url = (inputs.length > 2) ? inputs[2].value : 'URL input not found';
      let title = document.title;
      
      let methodOption = document.querySelector('option[aria-selected="true"]');
      let method = methodOption ? methodOption.value : 'Method not found';
      
      let nameInput = document.querySelector('input[name="name"]');
      let name = nameInput ? nameInput.value : 'Name input not found';
  
      let currentUrl = window.location.href;
  
      let dataObj = {
        url: url,
        title: title,
        method: method,
        name: name,
        currentUrl: currentUrl
      };
      
      sendResponse({data: dataObj, method: "getText"});
    }
  });
  