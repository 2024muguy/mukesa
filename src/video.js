
<script src="https://kit.fontawesome.com/8cc56e8b31.js" crossorigin="anonymous"></script>
const playVid = (id) => {
	// get the necessary elements using the passed in ID
	const video = document.querySelector(`#${id} iframe`);
	const vidWindow = document.querySelector(`#${id} .video-window`);
	
	// toggle iframe's "iframe-hidden" class to show/hide the video
	video.classList.toggle("iframe-hidden");
	
	// toggle video window's "hidden" class to show/hide the video overlay
	vidWindow.classList.toggle("hidden");
	
	// play the video if it's currently hidden
	if (!video.classList.contains("iframe-hidden")) {
	  video.play();
	}
	
	// add an event listener for when the video ends
	video.onended = () => {
	  // pause the video and hide the video overlay
	  video.pause();
	  vidWindow.classList.toggle("hidden");
	};
  };
  
  // add event listeners for each video window
  document.querySelectorAll(".video-window").forEach((window) => {
	window.addEventListener("click", () => playVid(window.id));
  });

    // // function to play and pause video
	// function playPauseVideo(video_window) {
	// 	var iframe = video_window.querySelector("iframe");
	// 	var overlay = video_window.querySelector(".video-window-overlay");
	// 	if (iframe.src.includes("autoplay=0")) {
	// 	  iframe.src = iframe.src.replace("autoplay=0", "autoplay=1");
	// 	  overlay.style.display = "none";
	// 	} else {
	// 	  iframe.src = iframe.src.replace("autoplay=1", "autoplay=0");
	// 	  overlay.style.display = "flex";
	// 	}
	//   }
	
	//   // adding event listeners to video windows
	//   var video_windows = document.querySelectorAll(".video-window");
	//   video_windows.forEach(function(video_window) {
	// 	video_window.addEventListener("click", function() {
	// 	  playPauseVideo(video_window);
	// 	});
	//   });
	
	//   // function to show and hide video controls on hover
	//   var iframe = document.querySelector("iframe");
	//   iframe.addEventListener("mouseover", function() {
	// 	this.setAttribute("controls", "true");
	//   });
	//   iframe.addEventListener("mouseout", function() {
	// 	this.removeAttribute("controls");
	//   });