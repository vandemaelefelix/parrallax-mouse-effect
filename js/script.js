'use strict'

window.addEventListener('DOMContentLoaded', (event) => {
    init()
})

const init = () => {    
    document.addEventListener('mousemove', (e) => {
        const items = document.querySelectorAll('.c-parrallax--item')
        items.forEach((item, index) => {
            const speed = item.getAttribute('data-speed')

            const scale = 0.015
            
            const x = -(window.innerWidth - e.pageX * (items.length - index)) * scale
            const y = -(window.innerHeight - e.pageY * (items.length - index)) * scale
            
            item.style.transform = `translateX(${x}px) translateY(${y}px)`
        })
    })
}