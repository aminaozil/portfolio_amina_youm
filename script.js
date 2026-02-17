
// Scroll animation
const faders=document.querySelectorAll('.fade');
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(!entry.isIntersecting)return;
entry.target.classList.add('visible');
});
},{threshold:0.2});
faders.forEach(f=>observer.observe(f));

// Typing effect
const text="Développeuse Full Stack";
let index=0;
function type(){
if(index<text.length){
document.querySelector('.typing').textContent+=text.charAt(index);
index++;
setTimeout(type,80);
}
}
type();
