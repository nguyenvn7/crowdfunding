var btn_bookmark = document.querySelector('.Bookmark')
var Circle = document.querySelector('.circle')
var icon_InCircle = document.querySelector('.icon_Incircle')
var span_bookmark = btn_bookmark.childNodes[3]

var Modal = document.querySelector('.Modal')
var Close_Modal = document.querySelector('.Close_modal')
var Active_Modal = document.querySelector('.Active_modal')
var btn_modal = document.querySelectorAll('.btn_modal')
var Modal_Selected = document.querySelector(".Modal_Selected")
var btn_selected = document.querySelector(".btn_selected") 

var bars = document.querySelector(".fa-bars")
var times = document.querySelector(".fa-times")
var nav_header = document.querySelector(".nav_header ")


bars.onclick = ()=>{
    times.classList.toggle("Selected")
    bars.classList.toggle("Selected")
    nav_header.classList.toggle("Selected")
}
times.onclick = ()=>{
    nav_header.classList.toggle("Selected")
    bars.classList.toggle("Selected")
    times.classList.toggle("Selected")
}
document.querySelectorAll("form").forEach(value => value.addEventListener("submit",(e)=>{e.preventDefault()}))


var inp = document.querySelectorAll(".inp")
var Selection_modal = document.querySelector(".Selection-modal")

inp.forEach(value =>  {
    value.onclick = (e)=>{
        if(e.ctrlKey){
           value.checked = false
       }
   }
})

btn_selected.onclick = ()=>{
    Modal.classList.add("InActive-modal")
    Modal_Selected.classList.toggle("InActive-modal")
    Selection_modal.classList.add('InActive-modal')
}

btn_modal.forEach(value => {
    value.onclick = ()=>{
        Selection_modal.classList.add('InActive-modal')
        Modal_Selected.classList.toggle("InActive-modal")
    }
})

Active_Modal.onclick = ()=>{
    Selection_modal.classList.remove('InActive-modal')
    Modal.classList.remove('InActive-modal')
}
Close_Modal.onclick = ()=>{
    Selection_modal.classList.add('InActive-modal')
    Modal.classList.add('InActive-modal')
}
btn_bookmark.onclick = ()=>{
    Circle.classList.toggle('Active_circle')
    icon_InCircle.classList.toggle('Active_IconInCircle')
    span_bookmark.classList.toggle('Active')
    span_bookmark.textContent = 
     (span_bookmark.textContent == "Bookmark"? "Bookmarked":"Bookmark")
}