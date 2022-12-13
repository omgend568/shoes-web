const labWrapper = document.querySelectorAll(".lab-wrapper")

Array.from(labWrapper).forEach(item => {
    item.addEventListener("click", function(e) {
        const boxContent = this.nextElementSibling
        boxContent.classList.toggle("active")
    })
})

