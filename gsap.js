gsap.registerPlugin(ScrollTrigger);


$(function() {
    gsap.timeline({
        scrollTrigger: {
            trigger: '.cont02',
            start: '0% 50%',
            end: '30% 0%',
            scrub:1,
            markers:false
        }
    })
    .fromTo('.circle',{'width':'0', 'height':'0', 'ease':'elastic', 'opacity':'0', 'top':'3%'},{'width':'2500px', 'height':'2500px', 'duration':'10', 'opacity':'1','top':'30%'},0)

    gsap.timeline({
        scrollTrigger: {
            trigger:'.cont02 .textBox',
            start:'0% 80%',
            end:'100% 80%',
            scrub:1,
            markers:true
        }
    })
    .fromTo('.textBox',{'top':'50%','ease':'elastic','opacity':'1'},{'top':'40%','opacity':'1','duration':'5'},0)
})