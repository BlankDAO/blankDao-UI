var globalTimer = null;
var pointerPause = false;
var pointerState = 0;


$(document).ready(function () {

  var myFullpage = new fullpage('#main', {
      navigation: true,
      scrollingSpeed: 1000,
      // slidesNavigation: true,
      // scrollHorizontally: true,
      licenseKey: 'C74E309E-891D44FF-980DCF32-4E4E704B',
      menu: '#myMenu',
      anchors: ['home', 'blankDAO', 'active-projects', 'partners', 'tokens', 'rewards', 'contributors', 'f'],
  });
    collapseWorker();
    setTimeout(function () {
        $('body').css("visibility", "visible");
    }, 500);
    updateBDTamount();
});

function clearListStyle() {
    for (let i in pointerList) {
        for (let j in pointerList[i].items) {
            let item = pointerList[i].items[j];
            $('#' + item.id).parent().css("list-style-image", "none");
            $('#' + item.id).parent().css("list-style-type", "none");
        }
    }
}

function changePointer(id) {
    for (let i in pointerList) {
        for (let j in pointerList[i].items) {
            let item = pointerList[i].items[j];
            if (item.id == id) {
                $('#' + item.id).parent().css("list-style-image", "url('asset/image/r1.png')");
                $('#text-content').text(item.text);
            }
        }
    }
}

function pointerInterval() {
    let pointer = innerPointer = null;
    let i = j = 0;
    globalTimer = setInterval(function () {
        let url = window.location.hash;
        if (url != "#possibilities") {
            return;
        }
        if (pointerPause) {
            return;
        }
        i = pointer ? 0 : i;
        j = innerPointer ? 0 : j;
        if (j >= pointerList[i].items.length) {
            j = 0;
            $('.new-li-' + i).find('ul').slideUp();
            i++;
            pointerState = i;
            if (i >= pointerList.length) {
                i = 0;
            }
            $('.new-li-' + i).find('ul').slideDown();
        }
        clearListStyle();
        let item = pointerList[i].items[j];
        $('#' + item.id).parent().css("list-style-image", "url(asset/image/r1.png)");
        $('#text-content').text(item.text);
        j++;
    }, 10000);
}

function collapseWorker() {
    possElCreator();
    $(document).on("click", "a.chapter", function () {
        clearInterval(globalTimer);
        clearListStyle();
        changePointer($(this).attr('id'));
    });
    $('.coll-child').hide();
    $('.coll-parent').click(function () {
      if ($(this).hasClass('new-li-'+pointerState)) {
        return;
      }
      $('.new-li-' + pointerState).find('ul').slideUp();
      classes = $(this).attr('class').split(/\s+/);
      $.each(classes, function( index, value ) {
        if( value.includes('new-li-') ) {
          pointerState = parseInt(value.split("-").pop());
          $('.new-li-' + pointerState).find('ul').slideDown();
        }
      });
    });

    $('.new-li-0').find('ul').slideDown();
    $(".chapter")
        .mouseover(function () {
            pointerPause = true;
        })
        .mouseout(function () {
            pointerPause = false;
        });
}

$('.blog-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    autoplay: true,
    mergeFit: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
});
$('.team-carousel').owlCarousel({
    margin: 10,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});

function possElCreator() {
    for (var i in pointerList) {
        $(".list-title").append($("<li class='new-li-" + i + " coll-parent'><p class=coll-title>" + pointerList[i].header + "</p></li>"));
        $(".new-li-" + i).append($("<ul class='new-ul-" + i + " coll-child'></ul>"));
        for (var j in pointerList[i].items) {
            let item = pointerList[i].items[j];
            $('.new-ul-' + i).append($("<li class='p-chapter'><a href='#' id='" + item.id + "' class='chapter'>" + item.title + "</a></li>"));
        }
    }
    pointerInterval();
}

$("#js-rotating").Morphext({
    animation: "bounceIn",
    separator: ",",
    speed: 2000,
    complete: function () {}
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        if (slides[i].style.display == "block") {
            animateCss(slides[i], 'fadeOutLeftBig', true)
        } else {
            slides[i].style.display = "none";
        }
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" m-active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    animateCss(slides[slideIndex - 1], 'fadeInRightBig', false)
    dots[slideIndex - 1].className += " m-active";
}

function hideElement(element) {
    element.style.display = "none";
}

function animateCss(node, animationName, hide) {
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)
        if (hide) hideElement(node);
    }
    node.addEventListener('animationend', handleAnimationEnd)
}
