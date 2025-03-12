    /*
    This is the old code that I used to process the video.
    And it use canvas to display the video and black out the frame at 4s.
    */
    
    // const processor = {};

    // processor.doLoad = function doLoad() {
    //     const video = document.getElementById("video");
    //     this.video = video;

    //     this.c1 = document.getElementById("c1");
    //     this.ctx1 = this.c1.getContext("2d");

    //     this.c2 = document.getElementById("c2");
    //     this.ctx2 = this.c2.getContext("2d");

    //     // Set initial canvas size when metadata is loaded
    //     video.addEventListener('loadedmetadata', () => {
    //         // Set canvas dimensions to match video's native dimensions
    //         this.width = video.videoWidth;
    //         this.height = video.videoHeight;

    //         console.log({ width: this.width, height: this.height });

    //         // Set both canvases to match video dimensions
    //         this.c1.width = this.width;
    //         this.c1.height = this.height;
    //         this.c2.width = this.width;
    //         this.c2.height = this.height;
    //     });

    //     video.addEventListener(
    //         "play",
    //         () => {
    //             // Ensure dimensions are set
    //             this.width = video.videoWidth;
    //             this.height = video.videoHeight;
    //             this.timerCallback();
    //         },
    //         false,
    //     );

    //     const playButton = document.getElementById('playButton');
    //     const playIcon = playButton.querySelector('.play-icon');

    //     playButton.addEventListener('click', () => {
    //         if (video.paused) {
    //             video.play();
    //             playIcon.textContent = '⏸'; // Change to pause icon
    //         } else {
    //             video.pause();
    //             playIcon.textContent = '▶'; // Change back to play icon
    //         }
    //     });

    //     // Update button icon when video ends
    //     video.addEventListener('ended', () => {
    //         playIcon.textContent = '▶';
    //     });
    // };

    // processor.timerCallback = function timerCallback() {
    //     if (this.video.paused || this.video.ended) {
    //         return;
    //     }
    //     this.computeFrame();
    //     setTimeout(() => {
    //         this.timerCallback();
    //     }, 0);
    // };

    // processor.computeFrame = function () {
    //     this.ctx1.drawImage(this.video, 0, 0, this.width, this.height);
    //     const frame = this.ctx1.getImageData(0, 0, this.width, this.height);
    //     const data = frame.data;

    //     const currentTimeOfVideo = this.video.currentTime;
    //     const currentTimeOfVideoInSeconds = Math.floor(currentTimeOfVideo);
    //     const currentTimeOfVideoInMilliseconds = currentTimeOfVideo * 1000;

    //     console.log({ currentTimeOfVideoInSeconds, currentTimeOfVideoInMilliseconds });

    //     for (let i = 0; i < data.length; i += 4) {
    //         // const red = data[i + 0];
    //         // const green = data[i + 1];
    //         // const blue = data[i + 2];
    //         // if (green > 100 && red > 100 && blue < 43) {
    //         //     data[i + 3] = 0;
    //         // }
    //         if (currentTimeOfVideoInSeconds === 4) {
    //             data[i + 0] = 0;
    //             data[i + 1] = 0;
    //             data[i + 2] = 0;
    //             // data[i + 3] = 0;
    //         }
    //     }
    //     this.ctx2.putImageData(frame, 0, 0);
    // };

    // processor.doLoad();