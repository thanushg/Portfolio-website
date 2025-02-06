document.querySelectorAll(".navbar a").forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
})
function viewResume(){
    window.open("https://drive.google.com/file/d/1YwqNuG9tgkdbwBG96rBKLeJ9LMg6kl_8/view?usp=sharing","_blank")
}
function Aws(){
    window.open("https://drive.google.com/file/d/1drC-IM19zyir6IZtUp-qZdMn1GxQmk86/view?usp=sharing","_blank")
}
function Ai(){
    window.open("https://drive.google.com/file/d/1oytTqmjXTZJ0TcDjVBoNU23Z9Tx3Cyq9/view?usp=sharing","_blank")
}
function python(){
    window.open("https://drive.google.com/file/d/11_2nGsH1tF_4MKQZaQcDXSxLiOk0sa91/view?usp=sharing","_blank")
}
