console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


//Challenge1
fetch(imgUrl)
.then(function(response){
    return response.json()
})
.then(function(data){
    let div = document.querySelector('#dog-image-container')
    console.log(data)
    data.message.forEach(function(element){
        let img = document.createElement('img')
        img.src = element
        div.append(img)
    })

})

//Challenge 2
fetch(breedUrl)
.then(function(response)
{
    return response.json()
})
.then(function(data)
{
    let ul = document.getElementById('dog-breeds')
    let filter = ""
    let dropDown = document.getElementById('breed-dropdown')
    dropDown.addEventListener('change',function(e)
    {
        filter = e.target.value
        ul.innerHTML = ""
        renderDogs(filter, data, ul)

    })

    renderDogs(filter,data,ul)
})

    function renderDogs(filter, data, ul){
        Object.keys(data.message).filter(word=> word.startsWith(`${filter}`)).forEach(function(breed){
            let li = document.createElement('li')
            li.innerText = breed
            li.addEventListener("click", function(event){
                event.preventDefault
                li.style.color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
            })
        ul.append(li)
        })
    }







    // console.log(data)
    // let arr = Object.keys(data.message)
    // Object.keys(data.message).filter(word=> word.startsWith("dropdown")).forEach(function(element)
    // {
    //     let li = document.createElement('li')
    //     li.innerHTML = element
    //     ul.append(li)
    //     div.append(ul)
    //     //Challenge 3
    //     li.addEventListener("click", function(event)
    //     {
    //         event.preventDefault
    //         li.style.color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
    //     })
    // })

// function sortBreed(breedURL)










