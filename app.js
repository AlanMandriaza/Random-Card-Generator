// Crear elemento div que será nuestra carta
const card = document.createElement('div');
card.style.width = '150px';
card.style.height = '225px';
card.style.backgroundColor = 'white';
card.style.border = '1px solid black';
card.style.borderRadius = '10px';
card.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3)';
card.style.position = 'relative';

// elementos  de la carta 
const pinta = ['♦', '♥', '♠', '♣']; 
const valor =['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
//generador de n randoms pintaaaaaaaa
var pintaRandom = Math.floor(Math.random()*4);
// generador de randoms valorrrrrrrrrrrr
var valorRandom = Math.floor(Math.random()*13);
// estructura y centro de cartaaa
const value = document.createElement('card');
value.textContent = valor[valorRandom];
value.style.fontSize = '72px';
value.style.color = 'black';
value.style.position = 'absolute';
value.style.top = '66px';
value.style.left = '38px';

// estilo de carta
const suit = document.createElement('card');
suit.textContent = pinta[pintaRandom];
suit.style.fontSize = '36px';
if (pinta[pintaRandom] === '♦' || pinta[pintaRandom] === '♥') {
    value.style.color = 'red';
  } else {
    value.style.color = 'black';
  }
suit.style.position = 'absolute';
suit.style.top = '-54px';
suit.style.left = '-15px';
// estilo de carta secundario
const suit2 = document.createElement('span');
suit2.textContent = pinta[pintaRandom];
suit2.style.fontSize = '36px';
if (pinta[pintaRandom] === '♦' || pinta[pintaRandom] === '♥') {
    value.style.color = 'red';
  } else {
    value.style.color = 'black';
  }
  suit2.style.position = 'absolute';
  suit2.style.top ='95px';
  suit2.style.left ='55px';
  
// Agregar el elemento span al elemento con clase 'valuee'
value.appendChild(suit);
value.appendChild(suit2);

// Agregaar los elementos creados a la carta
card.appendChild(value);

// Agregar la carta al documento'
document.body.appendChild(card);




