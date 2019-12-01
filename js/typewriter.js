const TypeWriter=function(txtEelement,words,wait=3000){
    this.txtEelement=txtEelement;
    this.words=words;
    this.txt='';
    this.wordIndex=0;
    this.wait=4000;
    this.type();
    this.isDeleting=false;
}

document.addEventListener('DOMContentLoaded',init);

TypeWriter.prototype.type=function(){
    const current= this.wordIndex % this.words.length;
    
    const fullTxt= this.words[current];
    
    if(this.isDeleting){
        this.txt = fullTxt.substring(0,this.txt.length-1);
    }else{
        this.txt = fullTxt.substring(0,this.txt.length+1);
    }
    
    this.txtEelement.innerHTML=`<span class="txt">${this.txt}</span>`;
    let typeSpeed;
    if(this.isDeleting) typeSpeed = 100;
    if(!this.isDeleting && this.txt===fullTxt){
        typeSpeed=this.wait;
        this.isDeleting=true;
    }else if(this.isDeleting && this.txt===''){
        this.isDeleting=false;
        this.wordIndex++;
        typeSpeed=500;
    }
// console.log(this.txt);
    setTimeout(()=> this.type(),500);
}


function init(){
    const txtElement= document.querySelector('.txt-type');
    const words=JSON.parse(txtElement.getAttribute('data-words'));
    const wait =txtElement.getAttribute('data-wait');
    
    new TypeWriter(txtElement,words,wait);
}

