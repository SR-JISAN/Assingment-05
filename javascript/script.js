 const copyBtns =  document.getElementsByClassName('copy-btn');
 const copyCount = document.getElementById('copy')
let count = 0;
 for(const btn of copyBtns){
    btn.addEventListener('click', function(){
        navigator.clipboard.writeText(btn.dataset.value)
        alert('Number Copied to clipboard',)
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
 let histories =[];
 let callBtns = document.getElementsByClassName('call-btn');
 for(const callBtn of callBtns){
    callBtn.addEventListener('click', function(){
      const card = callBtn.closest('.card-section')
      const head = card.querySelector('h2').innerText;
      const number = card.querySelector('h3').innerText;
       const coin =parseInt(document.getElementById('coin').innerText) 
        const reduce = coin - 20;
        if(coin<=0){
          alert('You Have Zero Coin');
          document.getElementById('coin').innerText = 0
          return;
       }
       alert(`📞 Calling to ${head}  ${number}....`)
      document.getElementById('coin').innerText= reduce;

// ------------history-part
       const data ={
         name: head,
         phone: number,
         date: new Date().toLocaleTimeString()
        }
        histories.push(data);
        const empty = document.getElementById('historyContainer')
        empty.innerHTML = '';
        for(const history of histories){
           const newDiv = document.createElement('div')
            newDiv.innerHTML=`
            <div style="display: flex;
             justify-content: space-between;
            align-items: center; margin:10px 0px ;background-color: rgba(250, 250, 250, 1);
            padding: 16px;
            border-radius: 8px;">
             <div>
              <h1 style="font-weight: 600;" class="font-style2">${history.name}</h1>
              <h1 style="color: rgba(92, 92, 92, 1); font-weight: 400; font-size:20px; margin-top:10px;">${history.phone}</h1>
             </div>
             <div>
              <h2 style=" font-weight: 400; font-size:20px;">${history.date}</p>
             </div>
            </div>`
            empty.appendChild(newDiv);
        }

      })
      
   }
   const clear = document.getElementById('historyContainer');
      document.getElementById('clear-btn').addEventListener('click',
        ()=>{
                    clear.innerHTML = '';
                    histories =[]
                    
          })


 

 
