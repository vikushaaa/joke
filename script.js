const jokeCont= document.getElementById("joke");

const pid= document.getElementById("pid");

const btn = document.getElementById("btn");

const btn1 = document.getElementById("btn1");

const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () =>{
    fetch(url)
    .then(data => data.json())
    
    .then(item =>
        {
            jokeCont.textContent = item.joke;
            pid.textContent = `Category: ${item.category}`;
        })
}

btn.addEventListener('click',getJoke);

getJoke();