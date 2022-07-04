window.addEventListener('keydown', (e) => {
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
   //selecionar a div referente a cada tecla por meio da classe key
   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
   if (!audio) return; //nao retorna null se for tecla sem audio associado
   audio.currentTime = 0; ///"rebobina" o audio para permitir acionamento antes da trilha encerrar
   audio.play()
   key.classList.add('playing')
})

//para apagar a tecla apos ser pressionada...
function removeTransition(e) {
   if (e.propretyName !== 'transform') return; //para nao pegar todos os eventos de transicao

   this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));