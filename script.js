let modaal = document.querySelector('#modaalAchtergrond');
let venster = document.querySelector('#venster');
let inhoud = document.querySelector('#vensterInhound');
let modaalTriggers = document.querySelectorAll('.trigger');
let alleModalen = new Object();

const sluitmodaal = () => {
  modaal.parentNode.removeChild(modaal);
  inhoud.innerHTML = '';
}

venster.addEventListener('click', (e) => {
  e.stopPropagation();
})

sluitKnop.addEventListener('click',sluitmodaal);
modaal.addEventListener('click',sluitmodaal);

for(let i = 0; i < modaalTriggers.length; i++){
  let item = modaalTriggers[i].hash.substr(1);
  alleModalen[item] = document.getElementById(item);
  modaalTriggers[i].addEventListener('click', (e)=> {
    e.preventDefault();
    inhoud.appendChild(alleModalen[item]);
    document.body.appendChild(modaal);
  })
}

for(elem in alleModalen){
  alleModalen[elem].parentNode.removeChild(alleModalen[elem]);
}

sluitmodaal();
