let videoRewind = [];
let videoPlaying = [];

/**
 * Applies callbackInSight function to node if it's in sight,
 * and callbackOffSight function if it's not
 */
function changeNodeBySight(node, callbackInSight, callbackOffSight) {
  let nodeTop = node.offset().top;
  let nodeBottom = nodeTop + node.height();

  let top = $(window).scrollTop();
  let bottom = top + $(window).height();

  if (bottom > nodeTop && top < nodeBottom) {
    callbackInSight();
  } else {
    callbackOffSight();
  }
}

/**
 * Applies changeNodeBySight to all needed elements
 */
function changeNodes() {
  $(".video-wrapper").each(function(index) {
    let video = $(this).find(".video")[0];
    changeNodeBySight(
      $(this),
      function() {
        playFromStart(video, index);
      },
      function() {
        // Video reinitialises: it can be played and is rewound
        videoRewind[index] = true;
        videoPlaying[index] = true;
      }
    );
  });

  $(".video-text").each(function() {
    changeNodeBySight(
      $(this),
      function() {
        $(this)
          .removeClass("hidden_")
          .addClass("fadeIn");
      },
      function() {
        $(this)
          .removeClass("fadeIn")
          .addClass("hidden_");
      }
    );
  });
}

/**
 * Plays video if it's paused
 */
function playOnCheck(video) {
  if (video.paused) {
    video.play().catch(function() {});
  }
}

/**
 * Pauses video if it's playing
 */
function pauseOnCheck(video) {
  if (!video.paused) {
    video.pause();
  }
}

/**
 * Rewinds video to start and plays it
 */
function playFromStart(video, index) {
  if (videoRewind[index]) {
    video.currentTime = 0;
    video.play().catch(function() {});
  }
  videoRewind[index] = false;
}

$(window).on("scroll", changeNodes);
$(document).ready(function() {
  /**
   * Initializing 'rewind' and 'playing' states for every video
   */
  videoRewind = Array($(".video").length).fill(true);
  videoPlaying = Array($(".video").length).fill(true);

  /**
   * When video ends it becomes permanently stopped
   * (works only after video nodes are created)
   */
  $(".video").each(function(index) {
    $(this).on("ended", function() {
      videoPlaying[index] = false;
    });
  });

  changeNodes();
});

$(window).on("mouseover", function() {
  // Video is played only when not permanently stopped
  $(".video").each(function(index) {
    if (videoPlaying[index]) {
      playOnCheck(this);
    }
  });
});

$(window).on("mouseleave", function() {
  $(".video").each(function() {
    pauseOnCheck(this);
  });
});
