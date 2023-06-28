let scrapedData = [];

// Listen for messages from the content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.command === "storeData") {
        scrapedData = request.data;  // Store the scraped data
        sendResponse({status: "Data received and stored."});
    } else if (request.command === "fetchData") {
        sendResponse({data: scrapedData});  // Send the stored data
    }
    return true;  // Will respond asynchronously
});
