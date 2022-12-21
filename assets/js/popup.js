redirect();
function redirect(){
    //Get current tab
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        //Get current URL
        let videoID = tabs[0].url.split('/');
        //Check if website is youtube
        if (videoID[2]=="www.youtube.com" && videoID[3]=="shorts"){
            //Redirect to video URL
            let redirectURL = videoID[0] + "//"+videoID[2]+"/watch?v="+videoID[4];
            chrome.tabs.update({url:redirectURL});
        }
    });
    //Close Popup window
    window.close();
}
