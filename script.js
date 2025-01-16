window.addEventListener('load', function () {
    // Prevent scrolling during loading
    const body = document.body;
    body.classList.add('no-scroll');

    setTimeout(() => {
        const loader = document.getElementById('page-loader');
        loader.classList.add('hidden');

        // Allow scrolling again
        body.classList.remove('no-scroll');

        const mainContent = document.getElementById('main-content');
        mainContent.classList.add('visible');
        mainContent.style.display = 'block';
    }, 2000); // 2 seconds delay

});


// Wait for the DOM to fully load
// document.addEventListener("DOMContentLoaded", function () {

// Add a scroll event listener
//     window.addEventListener("scroll", function () {
//         var header = this.document.querySelector("header");
//         header.classList.toggle("sticky", window.scrollY > 0);
//     });
// });

$(".section-title:first").addClass('open');
var openOnLoad = $(".section-title:first").next('.collapsing-section');
$(openOnLoad).slideDown();

$(".section-title").on('focus', function () {
    if (!$(this).data("mouseDown"))
        $(this).click();
});

$(".section-title").on('mousedown', function () {
    $(this).data("mouseDown", true);
});

$(".section-title").on('mouseup', function () {
    $(this).removeData("mouseDown");
});

$(".section-title").on('click', function (e) {
    if ($(this).hasClass('open')) {
        //Close the current section
        $('.section-title').removeClass('open');
        $('.collapsing-section').slideUp();
    } else {
        //close the prev section & open the newly click
        $('.section-title').removeClass('open');
        $('.collapsing-section').slideUp(); //Side up all sections that are open & remove their open class
        $(this).addClass('open');
        var sectionToOpen = $(this).next('.collapsing-section');
        $(sectionToOpen).slideDown();
    }
});



