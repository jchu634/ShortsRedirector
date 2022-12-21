document.getElementById("redirect-switch").addEventListener("change",setRedirect);
updateSettings();

function updateSettings(){    
    // document.getElementById("redirect-switch").checked = true;
    
    setSwitch();
}

//Storage + Retrieval of settings
function setRedirect(){
    let state = document.getElementById("redirect-switch").checked;
    chrome.storage.sync.set({redirect:state},function(){
    });
}
function setSwitch(){
    chrome.storage.sync.get(['redirect'],function(result){
        document.getElementById("redirect-switch").checked = result.redirect;
    });
}