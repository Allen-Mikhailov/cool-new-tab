const fs = require("fs")

// Paths
const buildDir = "./build/"
const pagesDir = "./pages/"
const srcDir = "./src/"

// Loading default inject script
var injectjs = fs.readFileSync(srcDir+"inject.js").toString()

// Inject vars
var pageList = ""
var cssList = ""

const pages = fs.readdirSync(pagesDir)
pages.map((page) => {
    pageList += `"`+page+`", `
    const pagePath = pagesDir+page+'/'
    fs.readdirSync(pagePath).map((file) => {
        const extension = file.split(".")[1]
        const filetext = fs.readFileSync(pagePath+file)
        switch(extension)
        {
            case "css":
                cssList += "`" + filetext +"`, "
            case "js":
        }
    })
})

// Injecting PageList
injectjs = injectjs.replace("`__PAGES__`", pageList)

// Injecting CSS
injectjs = injectjs.replace("`__css__`", cssList)

// Injecting Javascript

// Writing the inject file
fs.writeFileSync(buildDir+"inject.js", injectjs)

// Copying manifest
fs.writeFileSync(buildDir+"manifest.json", fs.readFileSync(srcDir+"manifest.json"))

