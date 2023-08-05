function copyToClipboard() {
    var numberElement = document.getElementById("number");
    var range = document.createRange();
    range.selectNode(numberElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");

    var copyButton = document.getElementById("copyButton");
    copyButton.innerText = "Copied!";
    copyButton.disabled = true;

    setTimeout(function() {
        copyButton.innerText = "Copy to Clipboard";
        copyButton.disabled = false;
    }, 5000);
}
