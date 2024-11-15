  // jQuery counter effect
  $(document).ready(function () {
    // Check if the element is visible in the viewport
    function isElementInView($el) {
        var windowTop = $(window).scrollTop();
        var windowBottom = windowTop + $(window).height();
        var elementTop = $el.offset().top;
        var elementBottom = elementTop + $el.height();
        return elementBottom >= windowTop && elementTop <= windowBottom;
    }

    // Trigger the counter animation when the counter is in view
    function startCounters() {
        $('.counter').each(function () {
            var $this = $(this);
            var countTo = $this.attr('data-count');

            if (isElementInView($this) && !$this.hasClass('counted')) {
                $this.addClass('counted'); // Add a class to prevent multiple animations
                $({ countNum: $this.text() }).animate(
                    { countNum: countTo },
                    {
                        duration: 2000, // Duration of the animation
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                        }
                    }
                );
            }
        });
    }

    // Start counters when the page is scrolled
    $(window).scroll(function () {
        startCounters();
    });

    // Also start counters on page load if already in view
    startCounters();
});