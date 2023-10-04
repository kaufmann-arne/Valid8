export async function getActiveTabURL() {
    const tabs = await chrome.tabs.query({
        currentWindow: true,
        active: true
    });

    console.log(`this comes from inject ${tabs[0].url}`)
    
    return tabs[0].url;
}

