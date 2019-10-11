function submitComment() 
{
    let inputEvent = document.getElementById('name')
    let name = inputEvent.value
    let textArea = document.getElementById('msg')
    let msg = textArea.value
    let comment = document.createElement('section')
    let h3 = document.createElement('h3')
    let p = document.createElement('p')

    var newMsg = msg.replace(/fuck/g,'love').replace(/ik/g,'jij')
    

    h3.innerHTML = `${name} said:`
    p.innerHTML = newMsg
    comment.classList.add('comment')
    comment.appendChild(h3)
    comment.appendChild(p)
    
    let commentSection = document.getElementById('comments')
    commentSection.appendChild(comment)

   inputEvent.value = null
    textArea.value = null


    function doesNotPassAllValidaions(name, msg) {


        

        if (name === "") {
            alert("Fill out your name") 
            
        }
        else (msg==="") 
            alert("no empty message!")
            return true;
           
        }
        
        if (!name || !msg) {
       alert("No blank messages!");
       return true;
    }


    if (msg.length > 80) {
        alert("No messages longer than 80 characters!");
        return true;
    }
    return false
}

function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
  }






  let picture1 = document.getElementById('foto1')
  onclick


    