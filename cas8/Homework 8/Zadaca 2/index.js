
const rickAndMorty = () => {
  fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    const charactersContainer = document.getElementById('characters-container');

      data.results.forEach(character => {
        const card = document.createElement("div")
        card.classList.add("card")
        
        const image = document.createElement("img")
        image.src = character.image
        card.appendChild(image)

        const name = document.createElement("h2")
        name.textContent = character.name
        card.appendChild(name)

        const gender = document.createElement("p")
        gender.textContent = `Gender: ${character.gender}`
        card.appendChild(gender)

        const status = document.createElement("p")
        status.textContent = `Status: ${character.status}`
        if(character.status === "Alive") {
            status.classList.add("alive")
        }else if (character.status === "Dead"){
            status.classList.add("dead")
        } else {
          status.classList.add("unknown")
        }
          card.appendChild(status)

          const episodes = document.createElement("p")
          episodes.textContent = `Episodes: ${character.episode.length}`
          card.appendChild(episodes)

          charactersContainer.appendChild(card)
        })
    }).catch (error => console.log(error))
  }
  
  rickAndMorty()