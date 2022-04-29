import {showCard, browserName, menu, current} from './useful.js';


/* Background */
$('#background').append('<ul class="circles"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>')

/* Header & menu */

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
        "left":"55px"
        
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

 /* Resume card */
 $('#experience').find('span').click(function(){
     let type = $(this).attr('class');
     let resume_items = $('#experience').find('div.resume-items');
    
     slideResume(resume_items, type)
 })

 $('#education').find('span').click(function(){
    let type = $(this).attr('class');
    let resume_items = $('#education').find('div.resume-items');
     
    slideResume(resume_items, type)
})

function slideResume(item, type){
    item.removeClass('item-left')
    item.removeClass('item-right')
   
    if(type == 'prev'){
       item.addClass('item-left')
    }else{
       item.addClass('item-right')
    }
}
