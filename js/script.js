const codeReader = new ZXing.BrowserQRCodeReader();
const video = document.getElementById('preview');

// Request permission to use the camera
navigator.mediaDevices.getUserMedia({ video: true })
	.then(function(stream) {
		// Set the video source to the camera stream
		video.srcObject = stream;
		// Start scanning for QR codes
		codeReader.decodeFromVideoDevice(null, 'preview', function(result) {
		// Check if a QR code was detected
		if (result !== null) {
			// Display the decoded result in an alert
			alert(result.text);
		}
	});
})
.catch(function(error) {
	console.log(error);
	alert('Unable to access the camera');
});