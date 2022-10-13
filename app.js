
const listContainer = document.querySelector(".lists-container-navbar")
const signUpBtn = document.querySelector(".btn")
const lineMenu = document.querySelector(".line")
const hamburgerBtn = document.querySelector(".menu-hamburger")
const shortenBtn = document.querySelector(".shorten-btn")
const lists = document.querySelector(".lists")
const input = document.querySelector(".input")
const warningTag = document.querySelector(".warning-tag")

// Nav Bar Menu Mobile 

hamburgerBtn.addEventListener("click", () => {
    
        listContainer.classList.toggle("lists-container-active")
        signUpBtn.classList.toggle("btn-active")
        lineMenu.classList.toggle("line-active")
        console.log("clicked")
    
})
     

shortenBtn.addEventListener("click", () => {

       // Create input value 

       let inputValue = input.value

       if (inputValue === "") {

              // Add warning tag
              warningTag.classList.add("p-active")
              input.classList.add("input-active")
              input.classList.add("active-placholder")

       } else {
              // Remove warning tag

              warningTag.classList.remove("p-active")
              input.classList.remove("input-active")
              input.classList.remove("active-placholder")

               // Create List 
              let list = document.createElement("li")
              list.classList.add = "list"
        
              let realLink = document.createElement("a")
              realLink.setAttribute("href", "reallink.com")
              realLink.textContent = inputValue
        
              let shortLink_btnCopty = document.createElement("div")
              shortLink_btnCopty.classList.add = "shortLinks-btnCopy"
        
              let shortLink = document.createElement("a")
              
             
        
              let copyBtn = document.createElement("button")
              copyBtn.classList.add("copyBtn")
              copyBtn.textContent = "Copy"
        
              // append copyBtn and Shortlink to their container 
        
              shortLink_btnCopty.append(shortLink, copyBtn)
        
              // append everythink to list
        
              list.append(realLink, shortLink_btnCopty)
        
              // append everything to lists 
        
              lists.append(list)
        
              // featch Data 
        
              fetch(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
               .then(res => res.json())
               .then(data => {
                      console.log(data) 
                      shortLink.textContent = data.result.short_link
               }) 
               
               // Copy Btn 
        
               copyBtn.addEventListener("click", () => {
                      navigator.clipboard.writeText(shortLink.innerText)
                      copyBtn.textContent = "Copied!"
                      copyBtn.classList.add("btn-active-copy")
               })
       } 
       
       // Empty input after typed
       input.value = ""

})




