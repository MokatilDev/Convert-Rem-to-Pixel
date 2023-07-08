const btn = document.querySelector(".button1 button")
const px = document.getElementById("px")
const rem = document.getElementById("rem")
const swap = document.querySelector(".swap")
const h1 = document.querySelector("h1")
const inputs = document.querySelector(".inputs")
const copy = document.querySelector(".copyButton")
const colorcopy = document.querySelector(".uil-copy-alt")


let x = 1

copy.addEventListener("click", () => {
    colorcopy.style.color = "#fff"
    navigator.clipboard.writeText(rem.value);
    copy.setAttribute("disabled", "")
})

const div = document.createElement("div")
document.body.insertBefore(div, inputs.nextElementSibling)
div.style.cssText = `text-align: center;
display: flex;
justify-content: center;`

px.addEventListener("input", () => {
    btn.removeAttribute("disabled")
    btn.style.cssText = `
    color: #fff;
    background-color: #7245FA;
    border: 0;
    border-radius: 7px;
    outline: none;
    padding: 12px 50px;
    font-size: 1rem;
    cursor: pointer;
    border: #7245FA solid 1px;
    `
    if (px.value == "") {
        btn.setAttribute("disabled", "")
        btn.style.cssText = `
        color: #7a7474;
        background-color: #1C1C1C;
        border: #3E3E3E solid 1px;
        border-radius: 7px;
        outline: none;
        padding: 12px 50px;
        font-size: 1rem;
        cursor: not-allowed;
        transition: all 0.3s;
    `
        colorcopy.style.color = "#7a7474"
        copy.setAttribute("disabled", "")
    }
})

btn.addEventListener("click", () => {
    copy.removeAttribute("disabled", "")
    div.textContent = ""
    if (px.value.trim() == "") {
        div.textContent = ""
        rem.value = "Enter Number"
        const p = document.createElement("p")
        const text = document.createTextNode("Error, Enter a number please 😅")
        p.appendChild(text)
        p.style.color = "red"
        div.appendChild(p)
        return false
    }
    const px1 = px.value.trim()
    rem.value = px1 * 16 + " px"

    if (rem.value == "NaN px") {
        div.textContent = ""
        rem.value = "Enter Number"
        const p = document.createElement("p")
        const text = document.createTextNode("Error, Enter a number please 😅")
        p.appendChild(text)
        p.style.color = "red"
        div.appendChild(p)
    }
})


swap.addEventListener("click", () => {
    colorcopy.style.color = "#7a7474"
    copy.setAttribute("disabled", "")
    rem.setAttribute("disabled", "")
    rem.style.cursor = "not-allowed"
    px.value = ""
    rem.value = ""
    h1.textContent = "Convert Pixel to Rem :"
    px.setAttribute("placeholder", "Enter Pixel")
    document.title = "Convert Pixel to Rem"
    rem.setAttribute("placeholder", "Value in Rem")
    btn.addEventListener("click", () => {
        if (px.value.trim() == "") {
            div.textContent = ""
            rem.value = "Enter Number"
            const p = document.createElement("p")
            const text = document.createTextNode("Error, Enter a number please 😅")
            p.appendChild(text)
            p.style.color = "red"
            div.appendChild(p)
            return false
        }
        const px1 = px.value.trim()
        rem.value = px1 / 16 + " rem"
        if (rem.value == "NaN rem") {
            div.textContent = ""
            rem.value = "Enter Number"
            const p = document.createElement("p")
            const text = document.createTextNode("Error, Enter a number please 😅")
            p.appendChild(text)
            p.style.color = "red"
            div.appendChild(p)
        }
    })

    if (x % 2 == 0) {
        h1.textContent = "Convert Rem to Pixel :"
        px.setAttribute("placeholder", "Enter Rem")
        document.title = "Convert Rem to Pixel"
        rem.setAttribute("placeholder", "Value in Pixle")
        btn.addEventListener("click", () => {
            if (px.value.trim() == "") {
                div.textContent = ""
                rem.value = "Enter Number"
                const p = document.createElement("p")
                const text = document.createTextNode("Error, Enter a number please 😅")
                p.appendChild(text)
                p.style.color = "red"
                div.appendChild(p)
                return false
            }
            const px1 = px.value.trim()
            rem.value = px1 * 16 + " px"
            if (rem.value == "NaN px") {
                div.textContent = ""
                rem.value = "Enter Number"
                const p = document.createElement("p")
                const text = document.createTextNode("Error, Enter a number please 😅")
                p.appendChild(text)
                p.style.color = "red"
                div.appendChild(p)
            }
        })
    }
    x = x + 1
})

px.addEventListener("input", () => {
    if (px.value == "") {
        rem.value = ""
        div.textContent = ""

    }
})




