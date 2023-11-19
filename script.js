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