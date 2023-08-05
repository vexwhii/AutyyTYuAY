function copyToClipboard() {
    const numberElement = document.getElementById('number');
    const numberText = numberElement.textContent || numberElement.innerText;

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(numberText)
            .then(() => {
                setCopied();
            })
            .catch((err) => {
                console.error('Failed to copy to clipboard: ', err);
            });
    } else {
        const textarea = document.createElement('textarea');
        textarea.value = numberText;
        textarea.style.position = 'fixed'; // Prevent scrolling to bottom of page on mobile
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            setCopied();
        } catch (err) {
            console.error('Failed to copy to clipboard: ', err);
        } finally {
            document.body.removeChild(textarea);
        }
    }
}

function setCopied() {
    const copyButton = document.querySelector('.copy-button');
    copyButton.textContent = 'Copied';
    copyButton.disabled = true;
    setTimeout(() => {
        copyButton.textContent = 'Copy to Clipboard';
        copyButton.disabled = false;
    }, 5000);
}
