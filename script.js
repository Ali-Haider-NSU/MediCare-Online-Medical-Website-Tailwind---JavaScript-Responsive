// Menubar Click Event for Displaying List

let menubar = document.getElementById('menubar');
let crossbar = document.getElementById('crossbar');
let mainul = document.getElementById('mainul');

menubar.addEventListener('click', () => {
    crossbar.style.display = 'block';
    menubar.style.display = 'none';
    mainul.style.display = 'block';

})
crossbar.addEventListener('click', () => {
    crossbar.style.display = 'none';
    menubar.style.display = 'block';
    mainul.style.display = 'none';
})

// Sub Ul Part down and up arrow for pages and blogs

let page = document.getElementById('page');
let arowdownpage = document.getElementById('arowdownpage');
let arowuppage = document.getElementById('arowuppage');
let subpage = document.getElementById('subpage');
let blog = document.getElementById('blog');
let arowdownblog = document.getElementById('arowdownblog');
let arowupblog = document.getElementById('arowupblog');
let subblog = document.getElementById('subblog');

page.addEventListener('click', () => {
    if (window.getComputedStyle(arowuppage).display === 'none') {
        arowdownpage.style.display = 'none';
        arowuppage.style.display = 'inline-block';
        subpage.style.display = 'block';
        subpage.style.boxShadow = "2px 2px 2px 2px #888888";

    } else {
        arowdownpage.style.display = 'inline-block';
        arowuppage.style.display = 'none';
        subpage.style.display = 'none';
    }
})

blog.addEventListener('click', () => {
    if (window.getComputedStyle(arowupblog).display === 'none') {
        arowdownblog.style.display = 'none';
        arowupblog.style.display = 'inline-block';
        subblog.style.display = 'block';
        subblog.style.boxShadow = "2px 2px 2px 2px #888888";
    } else {
        arowdownblog.style.display = 'inline-block';
        arowupblog.style.display = 'none';
        subblog.style.display = 'none';
    }
})


function updateScreenSize() {
    window.addEventListener('load', updateScreenSize);
    if (window.innerWidth >= 992) {

        mainul.style.display = 'block';
        page.addEventListener('mouseover', () => {
            subpage.style.display = 'block';
            subpage.style.boxShadow = "2px 2px 2px 2px #888888";
        })
        page.addEventListener('mouseout', () => {
            subpage.style.display = 'none';
        })
        blog.addEventListener('mouseover', () => {
            subblog.style.display = 'block';
            subblog.style.boxShadow = "2px 2px 2px 2px #888888";
        })
        blog.addEventListener('mouseout', () => {
            subblog.style.display = 'none';
        })
    } else {

        // page.addEventListener('mouseover', () => {
        //     subpage.style.display = 'none';
        // })
        // blog.addEventListener('mouseover', () => {
        //     subblog.style.display = 'none';
        // })
        mainul.style.display = 'none';
        crossbar.style.display = 'none';
        menubar.style.display = 'block';
        // subpage.style.display = 'none';
        // subblog.style.display = 'none';
    }
}
window.addEventListener('resize', updateScreenSize);

// For reducing image ratio with width

window.addEventListener('resize', () => {
    let bgimg1 = document.getElementById('bgimg1');
    let bgimg2 = document.getElementById('bgimg2');
    let bgimg3 = document.getElementById('bgimg3');
    let ratio = 1.8;
    let newWidth = bgimg1.offsetWidth;
    let newHeight = newWidth / ratio;
    bgimg1.style.height = newHeight + 'px';
    bgimg2.style.height = newHeight + 'px';
    bgimg3.style.height = newHeight + 'px';
})


// For background slide with interval

let slideparent = document.getElementById('slide-parent');
let leftbtn = document.getElementById('leftbtn');
let rightbtn = document.getElementById('rightbtn');
let singlediv = document.querySelectorAll('#slide-parent  .bg-img');



let index = 0;
let interval = setInterval(run, 2500)

function run() {
    index++;
    changeSlide()
}

function changeSlide() {
    if (index > singlediv.length - 1) {
        index = 0;
    } else if (index < 0) {
        index = singlediv.length - 1;
    }
    let value = -(index * 100);
    slideparent.style.transform = `translateX(${value}%)`;
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2500)
}

rightbtn.addEventListener('click', () => {
    index++;
    changeSlide()
    resetInterval()
})

leftbtn.addEventListener('click', () => {
    index--;
    changeSlide()
    resetInterval()
})