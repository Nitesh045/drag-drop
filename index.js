let itemDrag = document.getElementsByClassName("items");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
let hideShowBox = document.getElementById('hide-show');
hideShowBox.style.visibility="hidden";
let resetBtn = document.getElementById("btn");
let imgDrag= document.getElementById('img');

imgDrag.addEventListener('dragstart',function(){
    rightBox.addEventListener('dragover',function(e){
        e.preventDefault();
      }) 
      rightBox.addEventListener('drop',function(e){
        rightBox.insertAdjacentElement('beforeend',imgDrag);
       hideShowBox.style.visibility="visible";
       
      
      })
    })



for(item of itemDrag){
    item.addEventListener('dragstart',function(e){
        let selectedItem= e.target;
        console.log(selectedItem);
       

      rightBox.addEventListener('dragover',function(e){
        e.preventDefault();
      }) 
      rightBox.addEventListener('drop',function(e){    
          rightBox.insertAdjacentElement('beforeend',selectedItem);
       hideShowBox.style.visibility="visible";
       
      
      })
    })
}
// reset the page 
resetBtn.addEventListener('click',function(){
    window.location.reload()
   })
