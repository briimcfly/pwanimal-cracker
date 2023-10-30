const butInstall = document.getElementById('buttonInstall');
let deferredPrompt;

// Logic for installing the PWA
//Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();

    //save the event for later use
    deferredPrompt = event;

    //UI logic
    butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    //hide the UI
    butInstall.style.display = 'none';

    deferredPrompt.prompt();

    const choiceResult = await defferredPrompt.userChoice;

    if (choiceResult.outcome === 'accepted') {
        console.log('User accepted prompt');
    } else {
        console.log('User dismissed prompt');
    }

    //reset the prompt
    deferredPrompt = null;
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('App installed')
});
