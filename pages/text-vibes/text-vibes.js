const rainDropCount = 50

const fallangle = 225

const rainDropContainer = document.createElement("div")

document.body.appendChild(rainDropContainer)

function getDif(i)
{
    return (i/rainDropCount)*125 + Math.random()*5
}

for (var i = 0; i < rainDropCount; i++)
{
    const drop = document.createElement("div")
    drop.classList.add("drop")
    drop.style.left = getDif(i)+"%"
    drop.style.top = "-20px"
    drop.style.animationDelay = Math.random()*5 + "s"

    rainDropContainer.appendChild(drop)
}