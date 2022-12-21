
var callback = function(details) {
    chrome.storage.sync.get('redirect',function(result){
        //Check AutoRedirect setting
        if(result.redirect){
            //Only let GET requests redirect, do not interfer with POST
            if (details.method != 'GET'){
                return {};
            }
            
            /* 
            Seperate URL into constituent parts
            0: protocol
            1: ignore ('//'')
            2: youtube.com
            3: shorts
            4: videoID
            */
            let videoID = details.url.split('/')
            
            //Redirect to video URL
            let redirectURL = videoID[0] + "//"+videoID[2]+"/watch?v="+videoID[4];
            // console.log(redirectURL);
            chrome.tabs.update({url:redirectURL});
        };
    });
    
    
};

var filter = {urls: ["http://www.youtube.com/shorts/*","https://www.youtube.com/shorts/*"]};
var opt_extraInfoSpec = [];

// chrome.browserAction.onClicked.addListener(redirect);
chrome.webRequest.onBeforeRequest.addListener(callback, filter, opt_extraInfoSpec);