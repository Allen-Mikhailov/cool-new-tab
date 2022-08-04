const rainDropCount = 200

const fallangle = 225

const rainDropContainer = document.createElement("div")

document.body.appendChild(rainDropContainer)

for (var i = 0; i < rainDropCount; i++)
{
    const drop = document.createElement("div")
    drop.classList.add("drop")
    drop.style.left = Math.random()*200+"%"
    drop.style.top = "-20px"
    drop.style.animationDelay = Math.random()*5 + "s"

    rainDropContainer.appendChild(drop)
}