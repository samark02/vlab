var a=1;

function next() {
    a+=1;
    if (a==1){
        document.getElementById("content").style.display = 'block';
        document.getElementById("content2").style.display = 'none';
    }
    else if (a==2){
        document.getElementById("content").style.display = 'none';
        document.getElementById("content2").style.display = 'block';
        document.getElementById("content3").style.display = 'none';
    }
    else if (a==3){
        document.getElementById("content2").style.display = 'none';
        document.getElementById("content3").style.display = 'block';
        // document.getElementById("content4").style.display = 'none';
    }
}