function submitComment() 
{
    let inputEvent = document.getElementById('name')
    let name = inputEvent.value
    let textArea = document.getElementById('msg')
    let msg = textArea.value
    let comment = document.createElement('section')
    let h3 = document.createElement('h3')
    let p = document.createElement('p')

    h3.innerHTML = `${name} said:`
    p.innerHTML = msg
    comment.classList.add('comment')
    comment.appendChild(h3)
    comment.appendChild(p)
    
    let commentSection = document.getElementById('comments')
    commentSection.appendChild(comment)

   inputEvent.value = null
    textArea.value = null
}





    