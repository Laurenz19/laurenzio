export let menu = [
    "about-card", "resume-card", "works-card","contact-card"
]
export let current = menu[0]

function hide(name, state){
    console.log(state)
    if(state == true){
       
        $(`#${name}`).css({
            "display": "none"
        })
    }else{
        $(`#${name}`).css({
            "display": "inline-block"
        })
    } 
}

function transition(name){
   
    if(name != current){
        $(`#${current}`).addClass('slideOut')
        $(`#${name}`).addClass('slideIn')

        setTimeout(()=>{
            menu.forEach(elem_name => {
                if(elem_name == current){
                    hide(elem_name, true)
                } 
            });
            $(`#${current}`).removeClass('slideOut')
            $(`#${name}`).removeClass('slideIn')
            current = name
        },1000)
    }
}
export function showCard(name){
   hide(name, false)
   transition(name)
}

export var browserName = (function (agent) {        switch (true) {
    case agent.indexOf("edge") > -1: return "MS Edge";
    case agent.indexOf("edg/") > -1: return "Edge ( chromium based)";
    case agent.indexOf("opr") > -1 && !!window.opr: return "Opera";
    case agent.indexOf("chrome") > -1 && !!window.chrome: return "Chrome";
    case agent.indexOf("trident") > -1: return "MS IE";
    case agent.indexOf("firefox") > -1: return "Mozilla Firefox";
    case agent.indexOf("safari") > -1: return "Safari";
    default: return "other";
}
})(window.navigator.userAgent.toLowerCase());

