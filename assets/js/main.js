import {showCard, browserName, menu, current} from './useful.js';

/**
 * Header & Menu
 */

 $('.top-menu').find('li:first').css({
    "color":"rgb(4, 34, 113)"
 })

$('.top-menu').find('li').click(function(){
    let name = $(this).attr('name')
   
    $('.top-menu').find('li').css({
        "color": "rgb(7, 36, 59)"
    })

    $(this).css({
        "color":"rgb(4, 34, 113)"
    })
    showCard(name);
})

if(browserName == "Chrome"){
   $(`#container`).css({
        "position":"absolute",
        "top":"-25px",
        "left":"0px"
        
    })
    $(`#home-card`).css({
        "height": "550px"
        
    })
    menu.forEach(element => {
        $(`#${element}`).css({
            "height": "525px",
            "width": "685px",
            "display": "none",
            "position": "absolute",
            "top":"102px",
            "left": "638px",
            "border-radius": "3px",
            "background-color": "white"
        })
        if(element == current){
            $(`#${element}`).css({
                "display": "inline-block",
            })
        }
        
    });
}

/* Home card */
$('#button').find('span:nth-child(2)').click(function(){
    $('.top-menu').find(`li[name="${current}"]`).css({
        "color": "rgb(7, 36, 59)"
    })
    
    $('.top-menu').find('li[name="contact-card"]').css({
        "color":"rgb(4, 34, 113)"
    })

    showCard("contact-card");
 })
