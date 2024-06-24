// customScanner.js file

// Function to execute once the DOM is fully loaded
function onDocumentReady(callback) {
	if (document.readyState === "complete" || document.readyState === "interactive") {
		// Execute the callback after a short delay if the document is already ready
		setTimeout(callback, 1000);
	} else {
		// Wait for the DOMContentLoaded event if the document is not ready yet
		document.addEventListener("DOMContentLoaded", callback);
	}
}

// Call the function when the document is ready
onDocumentReady(function () {

	// Function to handle successful QR code scans
	function handleScanSuccess(decodedText, decodedResult) {
		// Display an alert with the decoded text and result
		alert("Your QR code content is: " + decodedText, decodedResult);
	}

	// Initialize the QR code scanner
	let qrCodeScanner = new Html5QrcodeScanner(
		"qr-reader-container",  // Element ID for the scanner
		{ fps: 10, qrbox: 250 }  // Scanner configuration
	);

	// Render the scanner and set the success callback
	qrCodeScanner.render(handleScanSuccess);
});
