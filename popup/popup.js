chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {action: "get_images"}, response => {
        $('.gallery').html('');
        response.map((img) => {
            console.log(img.src);
            $('.gallery').append(`<img src="${img.src}">`)
        });
    });
});
