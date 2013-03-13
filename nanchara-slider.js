(function($) {
  $.nancharaSlider = function(el, options) {
    var base = this, opts, contents, speed, maxSpeed = 0, distance = 0, slideIndex = 0;

    base.init = function() {
      opts = $.extend({}, $.nancharaSlider.defaultOptions, options);
      el[0].style.position = "relative";
      el[0].style.overflow = "hidden";
      base.calcDistanceAndMaxSpeed(parseInt(window.getComputedStyle(el[0]).getPropertyValue("width")));
      base.initContents();
      base.animate();
    }

    base.initContents = function() {
      contents = $(".ns_content");
      contents.each(function() {
        this.style.position = "absolute";
        base.resetContent(this);
      });
    }

    base.calcDistanceAndMaxSpeed = function(width) {
      while(distance < width) {
        maxSpeed += opts.accel;
        distance += maxSpeed;
      }
    }

    base.animate = function() {
      var currentContent = contents[slideIndex];
      var left = parseInt(currentContent.style.left) || 0;
      var interval = opts.animationInterval;
      if(left > opts.accel) {
        base.moveContent(currentContent, left - speed);
        speed -= opts.accel;
      } else if(left == opts.accel) {
        interval = opts.remainTime;
        speed = 0;
        base.moveContent(currentContent, 0);
      } else if(left - speed <= -distance) {
        interval = opts.nextTime;
        base.resetContent(currentContent);
        base.switchSlideIndex();
      } else {
        base.moveContent(currentContent, left - speed);
        speed += opts.accel;
      }
      setTimeout(base.animate, interval);
    }

    base.moveContent = function(content, left) {
      content.style.left = left + "px";
    }

    base.resetContent = function(content) {
      content.style.left = distance + "px";
      speed = maxSpeed;
    }

    base.switchSlideIndex = function() {
      slideIndex = (slideIndex + 1) % contents.length;
    }

    base.init();
  };

  $.nancharaSlider.defaultOptions = {
    accel: 1,
    animationInterval: 20,
    remainTime: 2000,
    nextTime: 400
  };

  $.fn.nancharaSlider = function(options) {
    return Object.create(new $.nancharaSlider(this, options));
  };
}(window.jq || window.Zepto || window.jQuery));
