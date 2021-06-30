const modalOverlay = document.querySelector('.modal-overlay') 
const modal = document.querySelector('.modal')
const cards = document.querySelectorAll('.card')

for(let card of cards){
    card.addEventListener('click',function(){
        const video_id = card.getAttribute('id')
        modalOverlay.classList.add('active')
        modal.classList.remove('maximize')
        modalOverlay.querySelector('iframe').src =`https://blog.rocketseat.com.br/${video_id}`
    })
}

document.querySelector('.close-modal').addEventListener('click',function(){
    modalOverlay.classList.remove('active')
})

document.querySelector('.maximize-modal').addEventListener('click',function(){
    if(modal.classList.contains('maximize')){
        modal.classList.remove('maximize')
    }else{
        modal.classList.add('maximize')
    }
    
})
