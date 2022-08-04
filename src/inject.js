const pages = [`__PAGES__`]
const css =[`__css__`]
const js = []

//`__JS__`

const pageIndex = Math.floor(Math.random() * pages.length)

const newStyles = document.createElement("style")
newStyles.innerHTML = css[pageIndex]
document.body.appendChild(newStyles)

js[pageIndex]()