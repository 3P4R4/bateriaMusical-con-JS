window.addEventListener("keydown", function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if (!audio) return;
    audio.currentTime=0;
    audio.play();
    key.classList.add("playing");
    const q = document.querySelectorAll(`.key[data-key="${e.keyCode}"]`);
    // Modificación personalizada fuera del curso, no estoy seguro si es 
    //realmente valido elminar la clase con la función setTimeOut()
    setTimeout(()=>{
        key.classList.remove("playing")
    },100);
})

