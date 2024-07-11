function scrollHandler($) {
  $(function () {
    $(window).on('scroll', function () {
      onScroll();
    });

    $(window).on('resize', function () {
      onResize();
    });

    var timeline = $('.js-timeline'),
      timelineLine = $('.js-timeline_line'),
      timelineLineProgress = $('.js-timeline_line-progress'),
      timelinePoint = $('.js-timeline-card_point-box'),
      timelineItem = $('.js-timeline_item'),
      outerHeight = $(window).outerHeight(),
      height = $(window).height(),
      prevPos = -1,
      flag = false;

    function onScroll() {
      var posY = $(window).scrollTop();
      updateFrame(posY);
    }

    function onResize() {
      var posY = $(window).scrollTop();
      height = $(window).height();
      updateFrame(posY);
    }

    function updateWindow() {
      flag = false;

      timelineLine.css({
        top: timelineItem.first().find(timelinePoint).offset().top - timelineItem.first().offset().top,
        bottom: timeline.offset().top + timeline.outerHeight() - timelineItem.last().find(timelinePoint).offset().top
      });

      if (prevPos !== posY) {
        prevPos = posY;
        height;
        updateProgress();
      }
    }

    function updateProgress() {
      var top = timelineItem.last().find(timelinePoint).offset().top;

      var i = top + posY - $(window).scrollTop();
      var a = timelineLineProgress.offset().top + posY - $(window).scrollTop();
      var n = posY - a + outerHeight / 2;

      if (i <= posY + outerHeight / 2) {
        n = i - a;
      }

      timelineLineProgress.css({ height: n + "px" });

      timelineItem.each(function () {
        var top = $(this).find(timelinePoint).offset().top;

        if ((top + posY - $(window).scrollTop()) < posY + 0.5 * outerHeight) {
          $(this).addClass('js-ag-active');
        } else {
          $(this).removeClass('js-ag-active');
        }
      });
    }

    function updateFrame(posY) {
      if (!flag) {
        requestAnimationFrame(function () {
          updateWindow(posY);
        });
        flag = true;
      }
    }
  });
}

(jQuery);
