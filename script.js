function copyToClipboard() {
    const numberElement = document.getElementById('number');
    const numberText = numberElement.textContent || numberElement.innerText;

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(numberText)
            .then(() => {
                alert('Number copied to clipboard!');
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
            alert('Number copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy to clipboard: ', err);
        } finally {
            document.body.removeChild(textarea);
        }
    }
}
