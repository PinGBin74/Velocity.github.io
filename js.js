           const tabsBtns = document.querySelectorAll(".tabs__nav button")
           const tabsItem = document.querySelectorAll(".tabs__item")

           function hideTabs() {
               tabsItem.forEach(item => {
                   item.classList.add("hide")
               })
               tabsBtns.forEach(item => {
                   item.classList.remove("active")
               })
           }

           function showTab(index) {
               tabsItem[index].classList.remove("hide")
               tabsBtns[index].classList.add("active")
           }
           tabsBtns.forEach((btn, index) => {
               btn.addEventListener("click", () => {
                   hideTabs()
                   showTab(index)
               })
           })

           const anchors = document.querySelectorAll(".header-nav a")
           anchors.forEach(anc => {
               anc.addEventListener("click", function(event) {
                   event.preventDefault()
                   const id = anc.getAttribute("href")
                   const element = document.querySelector(id)

                   window.scroll({
                       top: element.offsetTop - 80,
                       behavior: 'smooth'
                   })
               })
           })