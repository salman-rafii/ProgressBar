function progress(){
    var prg = document.getElementById('progress');
    var percent = document.getElementById('percentCount');
    var counter = 5;
    var progress = 0;
    var id = setInterval(frame, 50);
    function frame(){
        if(progress == 200 || counter == 100){
            clearInterval(id);
            window.location.href = "welcome.html";
        }else{
            progress += 2;
            counter +=1;
            prg.style.width = progress + 'px';
            percent.innerHTML = counter + '%';
        }
    }
}

console.log(progress());