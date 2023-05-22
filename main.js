

var togglemenu = document.querySelector('.toggle')
var section = document.querySelector(' section ' )
var links =document.querySelectorAll(' section .textbox a ')
var imgs = document.querySelectorAll( '.gallery img')
var next = document.querySelector('[src="images/icons/next.png"]')
var previous = document.querySelector('[src="images/icons/previous.png"]')
  
var i = 0
 
next.onclick = function()
{
    imgs[i].classList.remove('active')
    i= (i + 1) % imgs.length
    imgs[i].classList.add('active')
}

previous.onclick = function()
{
    imgs[i].classList.remove('active')
    i= (i - 1 + imgs.length ) % imgs.length
    imgs[i].classList.add('active')
}








    
for (const link of links)
 {
    link.onclick = function(e)
    {
        for (var el of links) 
        { 
            el.classList.remove('active')
            
        }
        e.target.classList.add('active')
    }
 }



togglemenu.onclick = function() 
 {

   togglemenu.classList.toggle('active')
   togglemenu.nextElementSibling.classList.toggle('active')
}

