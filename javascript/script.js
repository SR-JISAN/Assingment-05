 const copyBtns =  document.getElementsByClassName('copy-btn');
 const copyCount = document.getElementById('copy')
let count = 0;
 for(const btn of copyBtns){
    btn.addEventListener('click', function(){
        navigator.clipboard.writeText(btn.dataset.value)
        count++
        copyCount.innerText = count;
    })
 }

 const heartBtns =  document.getElementsByClassName('heart-btn');
 const heartCount = document.getElementById('heart')
let count2 = 0;
 for(const btn of heartBtns){
    btn.addEventListener('click', function(){
        count2++
        heartCount.innerText = count2;
    })
 }
