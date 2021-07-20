let constraints = {
    video: true
};
let videoPlayer = document.querySelector("video");

let vidRecordBtn = document.querySelector("#video-record");
let captureBtn = document.querySelector("#click-picture");
let frame = document.querySelector(".frame");
frame.style["max-width"] = videoPlayer.offsetWidth + "px"
let recordState = false;
let chunks = [];
let mediaRecorder;
let zoom = 1;
let zoomIn = document.querySelector(".zoom-in");
let zoomOut = document.querySelector(".zoom-out");
zoomIn.addEventListener("click", function () {
    if (zoom < 2.5) {
        zoom += 0.1;
        videoPlayer.style.transform = `scale(${zoom})`
    }
})
zoomOut.addEventListener("click", function () {
    if (zoom > 1) {
        zoom -= 0.1;
        videoPlayer.style.transform = `scale(${zoom})`
    }
})
captureBtn.addEventListener("click", function () {
    capture();
})



let timerInterval;
let second = 0;
let minute = 0;
vidRecordBtn.addEventListener("click", function () {
    if (!recordState) {
        mediaRecorder.start();
        recordState = true;
        timerInterval = setInterval(() => {
            second++;
            if (second == 60) {
                minute++;
                second = 0;
            }
            if (minute < 10) {
                document.querySelector(".minute").innerText = "0" + minute;
            } else {
                document.querySelector(".minute").innerText = minute;
            }

            if (second < 10) {
                document.querySelector(".second").innerText = "0" + second;
            } else {
                document.querySelector(".second").innerText = second;
            }

        }, 1000);
        vidRecordBtn.innerText = "smart_display";
    } else {
        mediaRecorder.stop();
        recordState = false;
        clearInterval(timerInterval);
        second = 0;
        minute = 0;
        document.querySelector(".minute").innerText = "00";
        document.querySelector(".second").innerText = "00";
        vidRecordBtn.innerText = "movies";
    }
})

navigator.mediaDevices.getUserMedia(constraints).then(function (mediaStream) {
    videoPlayer.srcObject = mediaStream;
    mediaRecorder = new MediaRecorder(mediaStream);
    // console.log(mediaRecorder);
    mediaRecorder.ondataavailable = function (e) {
        chunks.push(e.data);
    }

    mediaRecorder.onstop = function () {
        let blob = new Blob(chunks, {
            type: "video/mp4"
        });
        chunks = [];
        let blobUrl = URL.createObjectURL(blob);
        // console.log(blobUrl);
        addData("video", blob);
        // let a = document.createElement("a");
        // a.href = blobUrl;
        // a.download = "temp.mp4";
        // a.click();
    }
})

function capture() {
    let canvas = document.createElement("canvas");
    canvas.width = videoPlayer.videoWidth;
    canvas.height = videoPlayer.videoHeight;
    let ctx = canvas.getContext("2d");
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.scale(zoom, zoom);
    ctx.translate(-(canvas.width / 2), -(canvas.height / 2));
    ctx.drawImage(videoPlayer, 0, 0);

    // let link = document.createElement("a");
    // link.download = "img.png";
    // link.href = canvas.toDataURL();
    addData("image", canvas.toDataURL());
    // link.click();
}
let allfilters = document.querySelectorAll(".filter");
for (let i of allfilters) {
    i.addEventListener("click", function (e) {
        let filters = e.currentTarget.style.backgroundColor;
        addfiltersToScreen(filters);
    })
}

function addfiltersToScreen(filter) {
    let prevFiler = document.querySelector(".screen-filter");
    if (prevFiler) {
        prevFiler.remove();
    }
    let filterScreen = document.createElement("div");
    filterScreen.classList.add("screen-filter");
    filterScreen.style.height = videoPlayer.offsetHeight + "px";
    filterScreen.style.width = videoPlayer.offsetWidth + "px";
    // filterScreen.style.height = videoPlayer.offsetHeight + "px";
    // filterScreen.style.width = videoPlayer.offsetWidth + "px";
    filterScreen.style.backgroundColor = filter;

    document.querySelector(".filter-screen-parent").append(filterScreen);

}
let showgallery = document.querySelector(".show-gallery");

showgallery.addEventListener("click", function () {
    let modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `<div class="title">
    <span >Gallery</span>
    <span class="close-modal" style="float: right; margin-top:10px; margin-right: 20px; cursor: pointer;">X</span>
</div>
<div class="gallery">
     
</div>`
    document.querySelector("body").append(modal);
    let closeModal = document.querySelector(".close-modal");
    closeModal.addEventListener("click", function () {
        document.querySelector(".modal").remove();
    })
    getData();
})

