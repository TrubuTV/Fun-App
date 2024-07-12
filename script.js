async function fetchMeme(){
    const response = await fetch('https://api.imgflip.com/get_memes');
    const data = await response.json();
    const meme = data.data.memes[Math.floor(Math.random()*data.data.memes.length)];
    document.getElementById('memeImage').src = meme.url;
    document.getElementById('memeImage').style.display = 'block';

}


async function fetchDog(){
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    document.getElementById('dogImage').src=data.message;
    document.getElementById('dogImage').style.display='block';

}

async function fetchCat(){
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    document.getElementById('catImage').src=data[0].url;
    document.getElementById('catImage').style.display='block';

}
async function fetchJoke(){
try{
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();
    if(data.setup && data.punchline){
        document.getElementById('jokeText').innerText= `${data.setup} - ${data.punchline}`;
    }else{
        document.getElementById('jokeText').innerHTML=" Nie udało się pobrać dowcipu.";
    }
} catch(error){
    console.error("Error fetching joke:", error);
    document.getElementById('jokeText').innerText="Wystąpił bład podczas pobierania dowciupu"
}
}

document.addEventListener("DOMContentLoaded", function() {
    const dogRunners = document.querySelectorAll('.dog-runner');
    const speed = 2;
  

    const dogs = Array.from(dogRunners).map(dog => {
      const runnerWidth = dog.clientWidth;
      const runnerHeight = dog.clientHeight;
      const maxWidth = window.innerWidth - runnerWidth;
      const maxHeight = window.innerHeight - runnerHeight;
  
      return {
        element: dog,
        x: Math.random() * maxWidth,
        y: Math.random() * maxHeight,
        dx: speed * (Math.random() < 0.5 ? 1 : -1),
        dy: speed * (Math.random() < 0.5 ? 1 : -1),
        runnerWidth: runnerWidth,
        runnerHeight: runnerHeight
      };
    });
  
    function moveDogs() {
      const maxWidth = window.innerWidth;
      const maxHeight = window.innerHeight;
  
      dogs.forEach(dog => {
        dog.x += dog.dx;
        dog.y += dog.dy;
  
        if (dog.x <= 0 || dog.x >= maxWidth - dog.runnerWidth) {
          dog.dx *= -1;
        }
  
        if (dog.y <= 0 || dog.y >= maxHeight - dog.runnerHeight) {
          dog.dy *= -1;
        }
  
        dog.element.style.transform = `translate(${dog.x}px, ${dog.y-300}px) scaleX(-1)`;
      });
  
      requestAnimationFrame(moveDogs);
    }
  
    moveDogs();
  });

document.addEventListener("DOMContentLoaded", function() {
    const catRunners = document.querySelectorAll('.cat-runner');
    const speed = 2; 
  

    const cats = Array.from(catRunners).map(cat => {
      const runnerWidth = cat.clientWidth;
      const runnerHeight = cat.clientHeight;
      const maxWidth = window.innerWidth - runnerWidth;
      const maxHeight = window.innerHeight - runnerHeight;
  
      return {
        element: cat,
        x: Math.random() * maxWidth,
        y: Math.random() * maxHeight,
        dx: speed * (Math.random() < 0.5 ? 1 : -1),
        dy: speed * (Math.random() < 0.5 ? 1 : -1),
        runnerWidth: runnerWidth,
        runnerHeight: runnerHeight
      };
    });
  
    function moveCats() {
      const maxWidth = window.innerWidth;
      const maxHeight = window.innerHeight;
  
      cats.forEach(cat => {
        cat.x += cat.dx;
        cat.y += cat.dy;
  
        if (cat.x <= 0 || cat.x >= maxWidth - cat.runnerWidth) {
          cat.dx *= -1;
        }
  
        if (cat.y <= 0 || cat.y >= maxHeight - cat.runnerHeight) {
          cat.dy *= -1;
        }
  
        cat.element.style.transform = `translate(${cat.x}px, ${cat.y-700}px) scaleX(-1)`;
      });
  
      requestAnimationFrame(moveCats);
    }
  
    moveCats();
  });