document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {method: "getText"}, function(response) {
        var post_body = []
        if (response.data.method == "POST"){
            var post_body = `body: JSON.stringify({
            name: 'checkly'
    }),`
        }
        if(response.method == "getText"){
          let formattedText = `
new ApiCheck('customer-api-check', {
    name: '${response.data.name}',
    alertChannels: [],
    degradedResponseTime: 10000,
    maxResponseTime: 20000,
    group,
    request: {
      url: '${response.data.url}',
      method: '${response.data.method}',
      ${post_body}
      followRedirects: true,
      skipSSL: false,
      assertions: [
        AssertionBuilder.statusCode().equals(200),
      ],
    }
  })
`;
          document.getElementById('output').value = formattedText.trim();
        }
      });
    });
  
    document.getElementById('copy').addEventListener('click', function() {
      document.getElementById('output').select();
      document.execCommand('copy');
    });
  });
  