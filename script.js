function copyToClipboard() {
    const numberElement = document.getElementById('number');
    const numberText = numberElement.textContent || numberElement.innerText;
    const copyButton = document.getElementById('copyButton');

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(numberText)
            .then(() => {
                copyButton.textContent = 'Copied';
                setTimeout(() => {
                    copyButton.textContent = 'Copy to Clipboard';
                }, 5000);
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
            copyButton.textContent = 'Copied';
            setTimeout(() => {
                copyButton.textContent = 'Copy to Clipboard';
            }, 5000);
        } catch (err) {
            console.error('Failed to copy to clipboard: ', err);
        } finally {
            document.body.removeChild(textarea);
        }
    }
}
