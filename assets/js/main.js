import { showCard, browserName, menu, current } from './useful.js';


/* Background */
/* $('#background').append('<ul class="circles"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>') */

/* Header & menu */

$('.top-menu').find('li:first').css({
    "color": "rgb(146, 85, 5)"
})

$('.top-menu').find('li').click(function() {
    let name = $(this).attr('name')
    $('.top-menu').find('li').css({
        "color": "rgb(7, 36, 59)"
    })

    $(this).css({
        "color": "rgb(146, 85, 5)"
    })
    showCard(name);
})


if (browserName == "Chrome") {
    $(`#container`).css({
        "position": "absolute",
        "top": "-25px",
        "left": "55px"

    })
    $(`#home-card`).css({
        "height": "550px"
    })

    $(`.card-content`).css({
        "max-height": "525px"

    })
    menu.forEach(element => {
        $(`#${element}`).css({
            "height": "525px",
            "width": "685px",
            "display": "none",
            "position": "absolute",
            "top": "102px",
            "left": "638px",
            "border-radius": "3px",
            "background-color": "white"
        })
        if (element == current) {
            $(`#${element}`).css({
                "display": "inline-block",
            })
        }

    });
}

/* Home card */
$('#button').find('span:nth-child(2)').click(function() {
    $('.top-menu').find(`li[name="${current}"]`).css({
        "color": "rgb(7, 36, 59)"
    })

    $('.top-menu').find('li[name="contact-card"]').css({
        "color": "rgb(146, 85, 5)"
    })

    showCard("contact-card");
})


/* Resume card */
$('#experience').find('span').click(function() {
    let type = $(this).attr('class');
    let resume_items = $('#experience').find('div.resume-items');

    slideResume(resume_items, type)
})

$('#education').find('span').click(function() {
    let type = $(this).attr('class');
    let resume_items = $('#education').find('div.resume-items');

    slideResume(resume_items, type)
})

function slideResume(item, type) {
    item.removeClass('item-left')
    item.removeClass('item-right')

    if (type == 'next') {
        item.addClass('item-left')
    } else {
        item.addClass('item-right')
    }
}

/** Skills **/
let skills_template = $("#all-skills-template")
let skills_template_html = skills_template.html()
let skills = ''
let data = [{
        name: "HTML & CSS",
        value: 80,
        text: "As I want to be a web integrator, this skill is really important for me.",
    },
    {
        name: "JavaScript",
        value: 70,
        text: "I know a little bit about its frameworks such as Jquery and Vue.js.",
    },
    {
        name: "Server Side",
        value: 75,
        text: " As back-end technology, I use node.js and also a php framework like Symfony.",
    }
]

renderSkills(data)

function renderSkills(data) {
    skills = ""
    let all_skills = ''
    let custom_class = []
    for (let i = 0; i < data.length; i++) {

        all_skills += '<div class="skill-item">' +
            '<div class="outer">' +
            '<div class="inner">' +
            `<div class="number">${data[i].value}%</div>` +
            '</div>' +
            '</div>' +
            '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">' +
            '<defs>' +
            '<linearGradient id="GradientColor">' +
            '<stop offset="0%" stop-color="rgb(4, 34, 113)" /><stop offset="100%" stop-color="rgb(5, 42, 75)" />' +
            '</linearGradient>' +
            '</defs>' +
            `<circle class="skill${i}" cx="80" cy="80" r="38" stroke-linecap="round" />` +
            '</svg>' +
            `<div class="skill-name">${data[i].name}</div>` +
            '<div class="skill-text">' +
            `${data[i].text}` +
            '</div>' +
            '</div>'
        custom_class.push({ value: data[i].value, name: `.skill${i}` })
    }


    skills += skills_template_html.replace(/{{skills}}/g, all_skills)
    $("#skills").html(skills)

    for (let i = 0; i < custom_class.length; i++) {
        console.log(300 * custom_class[i].value / 100)
        $(custom_class[i].name).css({
            "stroke-dasharray": 235 * custom_class[i].value / 100
        })
    }

}

/* Custom Cursor */
$(document).on("mousemove", function(e) {
    $('.cursor').css({
        "top": `${e.pageY-15}px`,
        "left": `${e.pageX-15}px`
    })
})

$('.top-menu').find('li').hover(function() {

    $('.cursor').css({
        "transform": "scale(2)"
    })
})

$('.top-menu').find('li').mouseleave(function() {
    console.log('hello')
    $('.cursor').css({
        "transform": "scale(1)"
    })
})

$('.self-content').hover(function() {

    $('.cursor').css({
        "transform": "scale(2)",
        "background": "rgba(255, 255, 255, 0.342)"
    })
})

$('.self-content').mouseleave(function() {
    console.log('hello')
    $('.cursor').css({
        "transform": "scale(1)",
        "background": "rgba(146, 85, 5, 0.39)"
    })
})

$('.prev').hover(function() {

    $('.cursor').css({
        "transform": "scale(1.5)"
    })
})

$('.prev').mouseleave(function() {
    console.log('hello')
    $('.cursor').css({
        "transform": "scale(1)"
    })
})



$('.next').hover(function() {

    $('.cursor').css({
        "transform": "scale(1.5)"
    })
})

$('.next').mouseleave(function() {
    console.log('hello')
    $('.cursor').css({
        "transform": "scale(1)"
    })
})

$('#submit_btn').hover(function() {
    $('.cursor').css({
        "transform": "scale(2)"
    })
})

$('#submit_btn').mouseleave(function() {

    $('.cursor').css({
        "transform": "scale(1)"
    })
})

$('#myContact').hover(function() {
    $('.cursor').css({
        "transform": "scale(2)",
        "background": "rgba(255, 255, 255, 0.342)"
    })
})

$('#myContact').mouseleave(function() {

    $('.cursor').css({
        "transform": "scale(1)",
        "background": "rgba(146, 85, 5, 0.39)"
    })
})


$('#mySocial').find('li').hover(function() {

    $('.cursor').css({
        "transform": "scale(1.5)",
        "background": "rgba(255, 255, 255, 0.342)"
    })
})

$('#mySocial').find('li').mouseleave(function() {
    console.log('hello')
    $('.cursor').css({
        "transform": "scale(1)",
        "background": "rgba(146, 85, 5, 0.39)"
    })
})


$('#button').find('span').hover(function() {

    $('.cursor').css({
        "transform": "scale(2)",
    })
})

$('#button').find('span').mouseleave(function() {
    console.log('hello')
    $('.cursor').css({
        "transform": "scale(1)",
    })
})

/* Card Contact */

$("#contact-us").submit(function(e){
    e.preventDefault();
})
