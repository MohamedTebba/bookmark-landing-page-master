const submitBtn = document.querySelector('.submit-btn');
const emailInput = document.getElementsByTagName('input');
const label = document.getElementsByTagName('label');
// const questionText = document.querySelector('.question-text');
const questionArea = document.querySelector('.questions');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-btn');
const mobileMenu = document.querySelector('.mobile-menu');

menu.addEventListener('click',()=>{
  mobileMenu.classList.toggle('mobile-menu--modifier');
});
closeMenu.addEventListener('click',()=>{
  
  mobileMenu.classList.toggle('mobile-menu--modifier');
})

window.addEventListener('click',(e)=>{
  e.preventDefault();
});

submitBtn.addEventListener('click',(e)=>{
     e.preventDefault();
  if(Array.from(emailInput)[0].value === '' || !Array.from(emailInput)[0].validity.valid){

      Array.from(label)[0].style.transform = 'scaleX(1)';
      Array.from(emailInput)[0].style.border = '2px solid hsl(0, 94%, 66%)';
      Array.from(emailInput)[0].style.marginBottom = '3rem';
    }
    else{
        Array.from(label)[0].style.transform = 'scaleX(0)';
        Array.from(emailInput)[0].style.border = 'none';
        Array.from(emailInput)[0].style.marginBottom = '1.6875rem';

  }

});

questionArea.addEventListener('click',(e)=>{

  if(e.target.className === 'question-text'){

      Array.from(e.target.parentElement.children).forEach( (el,i) => {
        if(el.classList[0]==='answer'){
          console.log('--------');
          console.log(el);
          el.previousSibling.style.borderBottom ='1px solid hsl(229, 8%, 60%)';
          el.previousSibling.classList.toggle('after--mod')
          el.parentElement.removeChild(el);
          console.log('----removed-----');
         }
          });
      
      const questionText = e.target;
      const content = `<div class="answer"></div>`;
      // questionText.classList.toggle('after--mod');
      questionText.insertAdjacentHTML('afterend',content);
      const answer = document.querySelector('.answer');
      questionText.style.borderBottom = 'none';
      const answerText = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
      justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.</p>`;
      answer.insertAdjacentHTML('afterbegin',answerText);
      answer.classList.toggle('answer--mod');
      questionText.classList.toggle('after--mod');
  
  }

});