window.onload = function () {
    document.getElementById("loading").style.display = "none";
    document.getElementsByTagName('html')[0].style.overflowY = 'auto';
    document.body.style.overflowY = 'auto';
    document.body.style.overflowX = 'hidden';




    if (document.getElementById("Landing") != null) {
        document.getElementById("Landing").classList.add("zoom-in");

        setTimeout(() => {
            document.getElementById("hook").style.opacity = 1;
            document.getElementById("hook").classList.add("come-in-l");
            document.getElementById("hook").style.left = 0;
        }, 100);
        setTimeout(() => {
            document.getElementById("hook-intro").style.opacity = 1;

        }, 1000);
        setTimeout(() => {
            document.getElementById("hook-buttons").style.opacity = 1;
        }, 1200);
    }
}

accordianToggle = document.querySelectorAll(".accordian-toggle");
for (var i = 0; i < accordianToggle.length; i++) {
    accordianToggle[i].addEventListener("click", function (e) {
        e.stopPropagation();
        e.target.classList.toggle("accordian-toggle-active");
        ele = e.target.parentNode.parentNode;
        ele.children[1].classList.toggle("accordian-visible");


    });
}

function isInViewport(element) {
    if (element != null) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
}

document.onscroll = function () {
    scrll = window.scrollY;
    if (document.getElementById("About") != null) {
        if (window.scrollY > 200) {

            document.getElementById("About").style.opacity = 1;
            document.getElementById("About").classList.add("come-in-r");
        }

        if (window.scrollY > 400) {

            document.getElementById("Products").style.opacity = 1;
            document.getElementById("Products").classList.add("come-in-l");
        }
    }

    fadEIn = document.querySelectorAll(".fadeIn");
    if (fadEIn != null) {
        for (var i = 0; i < fadEIn.length; i++) {
            if (isInViewport(fadEIn[i])) {
                fadEIn[i].style.opacity = 1;
            }
        }
    }
    fadeUp = document.querySelectorAll(".fadeUp");
    if (fadeUp != null) {
        for (var i = 0; i < fadeUp.length; i++) {
            if (isInViewport(fadeUp[i])) {
                fadeUp[i].style.opacity = 1;
                fadeUp[i].style.bottom = 0;
            }
        }
    }


    teams = document.getElementsByClassName('team-item');
    if (teams[0] != null) {
        for (var i = 0; i < teams.length; i++) {
            if (isInViewport(teams[i])) {
                teams[i].children[0].style.objectPosition = "0% 50%";
            } else {
                teams[i].children[0].style.objectPosition = "0% 0%";
            }
        }
    }

    cimage = document.getElementsByClassName('image');
    if (cimage != null) {
        if (isInViewport(cimage[0])) {
            for (var i = 0; i < cimage.length; i++) {
                cimage[i].style.opacity = 1;
                cimage[i].style.transform = "translateX(0%)";
            }
        }
    }
}








function toggleMenu(e) {
    e.stopPropagation();
    if (document.getElementById("mobile-menu").classList.contains("mobile-menu-active")) {
        closeMenu();
    } else {
        openmenu();
    }
}



function openmenu() {
    document.getElementById("mobile-menu").classList.add("mobile-menu-active");
    document.body.style.overflowY = "hidden";
    document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
}
function closeMenu() {
    document.getElementById("mobile-menu").classList.remove("mobile-menu-active");
    document.body.style.overflowY = "auto";
    document.getElementsByTagName('html')[0].style.overflowY = 'auto';
}



var position = 0;



function SlideLeft(event) {
    event.stopPropagation();
    element = event.target.parentNode.children[0].children;


    items = element.length;



    if (position < items - 1) {
        ++position;
    }
    for (var i = 0; i < element.length; i++) {
        if (position >= items) {
            break;
        }
        element[i].style.transform = "translateX(-" + position + "00%)";
    }



}

function SlideRight(event) {
    event.stopPropagation();
    element = event.target.parentNode.children[0].children;

    items = element.length;


    if (position > 0) {
        position = position - 1;

    }
    for (var i = 0; i < element.length; i++) {
        if (position < 0) {
            position = 0;
            break;
        }

        element[i].style.transform = "translateX(-" + position + "00%)";


    }
}

timeline = document.getElementsByClassName("timeline-item");
if (timeline && (screen.width > 500)) {
    for (var i = 0; i < timeline.length; i++) {
        if (i % 2 != 0) {
            timeline[i].style.marginRight = "0%";
            timeline[i].children[0].style.left = "-25%";
        }
        else {
            timeline[i].style.marginLeft = "0%";
            timeline[i].children[0].style.right = "-26%";
        }

    }
}

const track = document.getElementById("image-track");
if (track != null) {
    const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

    const handleOnUp = () => {
        track.dataset.mouseDownAt = "0";
        track.dataset.prevPercentage = track.dataset.percentage;
    }

    const handleOnMove = e => {
        if (track.dataset.mouseDownAt === "0") return;

        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
            maxDelta = window.innerWidth / 2;

        const percentage = (mouseDelta / maxDelta) * -100,
            nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
            nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

        track.dataset.percentage = nextPercentage;

        track.animate({
            transform: `translate(${nextPercentage}%, -50%)`
        }, { duration: 1200, fill: "forwards" });

        for (const image of track.getElementsByClassName("image")) {
            image.animate({
                objectPosition: `${100 + nextPercentage}% center`
            }, { duration: 1200, fill: "forwards" });
        }
    }


    window.onmousedown = e => handleOnDown(e);

    window.ontouchstart = e => handleOnDown(e.touches[0]);

    window.onmouseup = e => handleOnUp(e);

    window.ontouchend = e => handleOnUp(e.touches[0]);

    window.onmousemove = e => handleOnMove(e);

    window.ontouchmove = e => handleOnMove(e.touches[0]);
}