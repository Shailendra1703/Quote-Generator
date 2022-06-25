const getText = document.querySelector(".quote-text"),
      getauthor = document.querySelector(".author"),
      genBtn = document.querySelector('.quoteBtn');


function random(){
      fetch('https://api.quotable.io/random')
      .then(respone => respone.json())
      .then(data => {
        //obtained data in json format
        // console.log(data);
        getText.textContent = data.content;
        getauthor.textContent = data.author;
      });
    }

genBtn.addEventListener('click',()=>{
    random();
})