const pages = ["crazy-ants", "text-vibes", ]
const css =[`body {
    margin: 0px;
    overflow: hidden;
}

.ant {
    background-color: rgb(0, 0, 0);
    position: absolute;
    width: 20px;
    height: 5px;
}

.MiddleButton {
    text-align: center;
    vertical-align: middle;
}`, `:root {
    --angle: calc(-255deg);
}

html {
    height: 100%;
}

body {
    height: 100%;
    background-color: black;
    margin: 0px;
    overflow: hidden;
}

@keyframes fall {
    from {
        visibility: visible;
        transform: translate(0px, 0px) rotate(var(--angle));
    }

    to {
        visibility: visible;
        transform: translate(-32.153903091734714vh, 120vh) rotate(var(--angle));
    }
}

.drop {
    position: absolute;
    width: 120px;
    height: 2.5px;
    opacity: .8;
    background-color: lightblue;
    visibility: hidden;

    animation: fall .75s linear 0s infinite;
}`, ]
const js = []

js[0] = () => {
    const antCount = 300
const wanderStrength = .005
const speed = .5

const antContainer = document.createElement("div")
antContainer.style.position = "absolute"
antContainer.style.top = "0px"
document.body.appendChild(antContainer)

const ants = []
for (var i = 0; i < antCount; i++)
{
    const ant = document.createElement("div")
    ant.classList.add("ant")
    ant.style.to
    antContainer.appendChild(ant)
    ant.style.backgroundColor = "#"+Math.floor(Math.random()*16777215).toString(16);

    const antObj = {
        dom: ant, 
        x: window.innerWidth/2, 
        y: window.innerHeight/2, 
        direction: Math.random()*Math.PI*2,
        pullDirection: 0
    }
    ants.push(antObj)
}

function rand()
{
    return (Math.random()-.5)* 2
}

var lastTime = new Date().getTime()
function Update()
{
    var newTime = new Date().getTime()
    var deltaTime = newTime - lastTime
    lastTime = newTime

    deltaTime = Math.min(deltaTime, 1000)

    ants.map(ant => {
        ant.pullDirection = rand() *.1 - (1 - Math.abs(ant.pullDirection))/2
        ant.direction += ant.pullDirection * deltaTime * wanderStrength
        ant.x += Math.cos(ant.direction)* speed * deltaTime
        ant.y += Math.sin(ant.direction)* speed * deltaTime

        // ant.dom.style.left = `${ant.x}px`
        // ant.dom.style.top = `${ant.y}px`
        ant.dom.style.transform = `translate(${ant.x}px, ${ant.y}px) rotate(${ant.direction}rad)`
    })

    requestAnimationFrame(Update)
}

Update()

}
js[1] = () => {
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

}


const pageIndex = Math.floor(Math.random() * pages.length)

const newStyles = document.createElement("style")
newStyles.innerHTML = css[pageIndex]
document.body.appendChild(newStyles)

js[pageIndex]()