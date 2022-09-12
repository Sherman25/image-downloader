chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "get_images") {
        let formatted_images = [];
        
        let images = $('img').map((i, img) => {
            if ($(img).data('src')) {
                return ({
                    src: $(img).data('src')
                });
            } else if ($(img).src) {
                return ({
                    src: $(img).src
                });
            }
        })
        sendResponse({data: images});
    }
});
