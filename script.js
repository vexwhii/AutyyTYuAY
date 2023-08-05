function copyToClipboard() {
    const numberElement = document.getElementById('number');
    const numberText = numberElement.textContent || numberElement.innerText;

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(numberText)
            .then(() => {
                updateCopyButton(true);
            })
            .catch((err) => {
                console.error('Failed to copy to clipboard: ', err);
                updateCopyButton(false);
            });
    } else {
        const textarea = document.createElement('textarea');
        textarea.value = numberText;
        textarea.style.position = 'fixed'; // Prevent scrolling to bottom of page on mobile
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            updateCopyButton(true);
        } catch (err) {
            console.error('Failed to copy to clipboard: ', err);
            updateCopyButton(false);
        } finally {
            document.body.removeChild(textarea);
        }
    }
}

function updateCopyButton(success) {
    const copyButton = document.querySelector('.copy-button');
    if (success) {
        copyButton.textContent = 'Copied';
        copyButton.disabled = true;
    } else {
        copyButton.textContent = 'Copy to Clipboard';
    }
}
