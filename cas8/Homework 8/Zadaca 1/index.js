
const usersData = async () => {
    try {
        const result = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await result.json()

        const dataContainer = document.getElementById("data-container")
        
        data.forEach((user) => {
            const createParagraph = document.createElement("p")
            createParagraph.textContent = `Name: ${user.name}, Phone:${user.phone}, Company name:${user.company.name}`
            dataContainer.appendChild(createParagraph)
        })
    }catch (error){
        console.log(error)
    }
}

usersData()
