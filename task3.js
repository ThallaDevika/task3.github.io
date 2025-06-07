document.getElementById("submit").addEventListener("click", function () {
    let name = document.getElementById("name").value;
    let recipient=document.getElementById("recipient").value;
    let message = document.getElementById("message").value;
    let event = document.getElementById("event").value;

    const greetingMessage = `<h2>Dear, ${recipient}</h2>

<p>'Wishing you a wonderful ${event} filled with love,laughter, and joy!may thhis special day bring happiness and beutiful moments that you cherish forever.${message}</p>
<p>May your day be filled with joy, laughter, and all the happiness you deserve! Know that you are deeply cherished, and my best wishes will always be with you.
<br><p>Sending warm wishes and lots of smiles your way!

<h3>From, ${name}</h3>`;

    // Hide the form
    document.getElementById('inputId').style.display = 'none';

    // Display greeting message
    document.querySelector('.greeting').innerHTML = greetingMessage;
});