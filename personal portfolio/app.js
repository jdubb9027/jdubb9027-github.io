var bottomCloud = $("#bottom-cloud");
var topCloud = $("#top-cloud");

function getPos(ele) {
    var x = ele.offset().left;
    var y = ele.offset().top;
    var windowSize = $(window).width();
    pos = [x, y, windowSize]
    return pos;
};

function reset() {
    $(this).css({left: -12.64 + "rem"});
    moveClouds($(this), 50000);
};

function moveClouds(ele, duration) {
    console.log(getPos(ele));
    ele.animate(
        { "left": (ele.offset().left = 100 + "%") }, 
        duration, //DURATION
        "linear", //EASING
        reset);//CALLBACK
}

moveClouds(topCloud, 50000);
moveClouds(bottomCloud, 60000);

// my projects section following -> https://www.freecodecamp.org/news/how-to-build-a-developer-portfolio-website/#portfolioprojecthowtobuildyourownonlinedeveloperportfolio