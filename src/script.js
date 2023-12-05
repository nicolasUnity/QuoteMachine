const refreshButton = document.getElementById("refresh")
const quote1 = document.getElementById("quote1")
const quote2 = document.getElementById("quote2")
let quote = document.getElementById("quote")
let author = document.getElementById("author")

refreshButton.addEventListener("click", refreshQuote)

async function refreshQuote() {
    let axQuote = await axios.get("http://localhost:3000/")
    let data = axQuote.data

    refreshButton.disabled = true
    refreshButton.style.transition = "1s"
    quote.style.transition = "1s"
    author.style.transition = "1s"
    quote1.style.transition = "0s"
    quote2.style.transition = "0s"

    refreshButton.style.opacity = "0"
    quote.style.opacity = "0"
    author.style.opacity = "0"

    setTimeout(() => {
        quote.innerHTML = ""
        quote.appendChild(quote1)
        quote.innerHTML += " " + data.quote + " "
        quote.appendChild(quote2)
        author.textContent = data.author

        let red = Math.round(Math.random() * 255)
        let green = Math.round(Math.random() * 255)
        let blue = Math.round(Math.random() * 255)

        quote1.style.transform = "translateY(10px)"
        quote2.style.transform = "translateY(10px)"

        document.body.style.backgroundColor = `rgb(${red},${green},${blue})`
        refreshButton.style.backgroundColor = `rgb(${red},${green},${blue})`

        quote.style.color = `rgb(${red},${green},${blue})`
        author.style.color = `rgb(${red},${green},${blue})`

        quote.style.opacity = "1"
        author.style.opacity = "1"
        refreshButton.style.display = "none"
    }, 1000)

    setTimeout(() => {
        quote1.style.transition = "1s"
        quote2.style.transition = "1s"
        quote1.style.transform = "translateY(0)"
        quote2.style.transform = "translateY(0)"
        refreshButton.disabled = false
        refreshButton.style.display = "block"
        refreshButton.style.opacity = 1
    }, 2000)
}