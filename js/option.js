let section=document.querySelectorAll('div section')
let navLink=document.querySelectorAll('nav a button')
window.onscroll=()=>{
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top>offset && top<offset + height){
            navLink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('nav a[href*='+id+'] button').classList.add('active')
            })
        }
    })
}
/*Typing effect */
var app = document.getElementById('app')

var TypeWriter = new Typewriter(app,{
    //loop: true,
    delay: 80,
});
TypeWriter
    .pauseFor(2000)
    .typeString('Ok. Đây là bất ngờ tui dành cho fen nè 😇')
    .pauseFor(700)
    .deleteAll()
    .typeString('<br>Ở đây có âm nhạc nên hãy đeo tai nghe để có trải nghiệm tốt nhất 🎧')
    .pauseFor(1000)
    .typeString('<br>Sử dụng thanh công cụ trên cùng để chuyển hướng đến <br>1 trong 4 bài hát vũ trụ gửi đến bạn✨✨✨')
    .start()
var song1 = document.getElementById('song1');
song1.volume = 0.4;

var song2 = document.getElementById('song2');
song2.volume = 0.4;

var song3 = document.getElementById('song3');
song3.volume = 0.4;

var song4 = document.getElementById('song4');
song4.volume = 0.4;