!(function (a) {
  "use strict";
  if (
    (a('ul.nav li a[href="#"]').on("click", function (a) {
      a.preventDefault();
    }),
    a(".header ul.nav > li > a").append('<span class="menu-mark"></span>'),
    a(".nav-wrapper").menumaker({
      title: "<span></span>",
      format: "multitoggle",
    }),
    a(a(window)).on("scroll", function () {
      a("ul.nav").hasClass("open") ||
        a("#menu-button").removeClass("menu-opened");
    }),
    a(window).width() >= 992)
  ) {
    a(".menu-trigger").on("click", function () {
      a(this).toggleClass("active"),
        a(".main-menu-wrapper").toggleClass("show"),
        a(".logo-holder").toggleClass("d-none"),
        a(".nav-wrapper").toggleClass("active");
    });
  }
  a(window).on("scroll", function () {
    a(window).scrollTop() < 100
      ? a(".header-main.love-sticky").removeClass("sticky fadeInDown animated")
      : a(".header-main.love-sticky").addClass("sticky fadeInDown animated");
  }),
    a("[data-bg-img]")
      .css("background-image", function () {
        return 'url("' + a(this).data("bg-img") + '")';
      })
      .removeAttr("data-bg-img")
      .addClass("bg-img");
  var t = function (a, t) {
    return void 0 === a ? t : a;
  };
  a(".owl-carousel").each(function () {
    var o = a(this);
    o.owlCarousel({
      items: t(o.data("owl-items"), 1),
      margin: t(o.data("owl-margin"), 0),
      loop: t(o.data("owl-loop"), !0),
      smartSpeed: 450,
      autoplay: t(o.data("owl-autoplay"), !0),
      autoplayTimeout: t(o.data("owl-speed"), 5e3),
      center: t(o.data("owl-center"), !1),
      animateIn: t(o.data("owl-animate-in"), !1),
      animateOut: t(o.data("owl-animate-out"), !1),
      nav: t(o.data("owl-nav"), !1),
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      dots: t(o.data("owl-dots"), !1),
      stagePadding: t(o.data("owl-stage-padding"), !1),
      autoWidth: t(o.data("owl-auto-width"), !1),
      responsive: t(o.data("owl-responsive"), {}),
    });
  }),
    a(".testimonial-slider.owl-carousel")
      .find(".owl-prev")
      .html('<img src="assets/img/icons/slide-left.svg" alt="" class="svg">'),
    a(".testimonial-slider.owl-carousel")
      .find(".owl-next")
      .html('<img src="assets/img/icons/slide-right.svg" alt="" class="svg">'),
    jQuery("img.svg").each(function () {
      var a = jQuery(this),
        t = a.attr("id"),
        o = a.attr("class"),
        e = a.attr("src");
      jQuery.get(
        e,
        function (e) {
          var n = jQuery(e).find("svg");
          void 0 !== t && (n = n.attr("id", t)),
            void 0 !== o && (n = n.attr("class", o + " replaced-svg")),
            !(n = n.removeAttr("xmlns:a")).attr("viewBox") &&
              n.attr("height") &&
              n.attr("width") &&
              n.attr(
                "viewBox",
                "0 0 " + n.attr("height") + " " + n.attr("width")
              ),
            a.replaceWith(n);
        },
        "xml"
      );
    });
  var o,
    e = a('[data-trigger="map"]');
  e.length &&
    ((o = e.data("map-options")),
    (window.initMap = function () {
      e.css("min-height", "590px"),
        e.each(function () {
          var t,
            e,
            n,
            s,
            i = a(this);
          (o = i.data("map-options")),
            (e = parseFloat(o.latitude, 10)),
            (n = parseFloat(o.longitude, 10)),
            (s = parseFloat(o.zoom, 10)),
            (t = new google.maps.Map(i[0], {
              center: { lat: e, lng: n },
              zoom: s,
              scrollwheel: !1,
              disableDefaultUI: !0,
              zoomControl: !0,
            })),
            (t = new google.maps.Marker({
              position: { lat: e, lng: n },
              map: t,
              animation: google.maps.Animation.DROP,
              draggable: !1,
            }));
        });
    }),
    initMap()),
    a(window).on("load", function () {
      a(".preloader").fadeOut(1e3);
    }),
    a(".contact-form-wrap").on("submit", "form", function (t) {
      t.preventDefault();
      var o = a(this);
      a.post(o.attr("action"), o.serialize(), function (t) {
        (t = a.parseJSON(t)),
          o
            .parent(".contact-form-wrap")
            .find(".form-response")
            .html("<span>" + t[1] + "</span>");
      });
    });
  var n = a(".back-to-top");
  if (n.length) {
    var s = function () {
      a(window).scrollTop() > 400 ? n.addClass("show") : n.removeClass("show");
    };
    s(),
      a(window).on("scroll", function () {
        s();
      }),
      n.on("click", function (t) {
        t.preventDefault(), a("html,body").animate({ scrollTop: 0 }, 700);
      });
  }
  a(document.body).on("click", '[data-toggle="collapse"]', function (t) {
    var o = "#" + a(this).data("target");
    a(this).toggleClass("collapsed"), a(o).slideToggle(), t.preventDefault();
  }),
    a(".search-toggle-btn").on("click", function () {
      a(".full-page-search").addClass("show");
    }),
    a(".search-close-btn").on("click", function () {
      a(".full-page-search").removeClass("show");
    }),
    a(".offcanvas-trigger").on("click", function () {
      a(".offcanvas-wrapper, .offcanvas-overlay").addClass("show");
    }),
    a(".offcanvas-overlay, .offcanvas-close").on("click", function () {
      a(".offcanvas-wrapper, .offcanvas-overlay").removeClass("show");
    });
  var i = a(".man2, .man4, .man1, .man3");
  a(".layer").on("mousemove", function (a) {
    var t = (-1 * a.pageX) / 180,
      o = (-1 * a.pageY) / 180;
    i.css({ transform: "translate3d(" + t + "px, " + o + "px,0)" });
  }),
    a(".mfp-iframe, .video-btn").magnificPopup({ type: "video" }),
    a("#countdown").countdown({ date: "08/16/2021 23:59:59" }),
    a('[data-accordion-tab="toggle"]').each(function () {
      a(this).children(".accordion-content").hide(),
        a(this).on("click", function () {
          a(this).addClass("active").siblings().removeClass("active"),
            a(this).hasClass("active") &&
              a(this)
                .children(".accordion-content")
                .slideDown(500)
                .parents('[data-accordion-tab="toggle"]')
                .siblings()
                .children(".accordion-content")
                .slideUp(500);
        }),
        a(this).hasClass("active") &&
          a(this).children(".accordion-content").show();
    }),
    a(".features .single-feature").on("mouseover", function () {
      a(".features .single-feature").removeClass("active"),
        a(this).addClass("active");
    });
})(jQuery);
