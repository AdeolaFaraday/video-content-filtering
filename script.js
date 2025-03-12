// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    const video = document.getElementById("video");
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    async function processVideo() {
        const stream = video.captureStream(); // Capture raw video stream
        const [track] = stream.getVideoTracks();
        const processor = new MediaStreamTrackProcessor({ track });

        const reader = processor.readable.getReader();
        const encoder = new VideoEncoder({
            output: (chunk, meta) => {
                // You would send this processed video chunk to be played or saved
            },
            error: console.error
        });

        encoder.configure({
            codec: "vp8",
            width: video.videoWidth,
            height: video.videoHeight,
            framerate: 30,
        });

        while (true) {
            const { value: frame, done } = await reader.read();
            console.log({ frame, done });

            if (done) break;

            const currentTimeOfVideo = video.currentTime;
            const currentTimeOfVideoInSeconds = Math.floor(currentTimeOfVideo);

            if ([3, 4].includes(currentTimeOfVideoInSeconds)) {
                video.currentTime = 5;
                video.play();
            }

            const seconds = frame.timestamp / 1_000_000;

            // Capture the frame at exactly 4s
            if (Math.floor(seconds) === 4) {
                const canvas = new OffscreenCanvas(frame.displayWidth, frame.displayHeight);
                const ctx = canvas.getContext("2d");
                ctx.drawImage(frame, 0, 0);

                // Convert the canvas to a Blob (image file)
                const blob = await canvas.convertToBlob({ type: "image/png" });

                // Generate an Object URL to view the image
                const imageUrl = URL.createObjectURL(blob);
                console.log("Image URL:", imageUrl);
            }

            // Draw the frame onto the canvas
            // canvas.width = frame.displayWidth;
            // canvas.height = frame.displayHeight;
            // ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            // // Example: Black out a section of the frame
            // ctx.fillStyle = "black";
            // ctx.fillRect(100, 100, 200, 150);

            // // Extract the modified frame
            // const newFrame = new VideoFrame(canvas, { timestamp: frame.timestamp });
            // console.log({ canvas });
            // // Send the modified frame to the encoder
            // encoder.encode(newFrame);
            frame.close();
        }
    }

    video.addEventListener("play", processVideo);

}); 