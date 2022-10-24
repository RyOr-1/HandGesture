Webcam.set({
    width: 350,
    height: 400,
    image_format: "jpeg",
    jpeg_quality: 100
})
Webcam.attach('webcam')

function captureImg() {
    Webcam.snap(function(dataUri) {
        document.getElementById("result").innerHTML = "<img id='capImg' src='" + dataUri + "'>"
    })
}

console.log(ml5.version)