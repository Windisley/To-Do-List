window.addEventListener("DOMContentLoaded", ()=>{
    const $input = document.querySelector("#list")
    const $button = document.querySelector("#button")
    const boxlist = document.querySelector(".boxlist")
    const $ul = document.querySelector(".contlist")

    $button.addEventListener("click", ()=>{
        let state = true;
        const valueinput = $input.value
        if(valueinput === ""){
            alert("Texto Vazio Digite Algo")
        }else{
            
           const $div = document.createElement("div")
           const $li = document.createElement("li")
           const $i = document.createElement("i")
           const $icheck = document.createElement("i") 
           
           $ul.appendChild($div)
           $div.appendChild($li)
           $li.classList.add("list")
           $div.appendChild($i)
           $i.classList.add("bi", "bi-trash")
           $i.setAttribute("title", "Remover Tarefa")
           $div.appendChild($icheck)
           $icheck.classList.add("bi", "bi-check-square")
           $icheck.setAttribute("title", "Concluir Tarefa")
           $li.innerHTML = valueinput;
             
           $i.addEventListener("click", ()=>{
               $div.remove()
            })
            
            $icheck.addEventListener("click", ()=>{
                if(state === true){
                    $li.classList.add("listafter")
                    state = false;
                }else if(state === false){
                    $li.classList.remove("listafter")
                    state = true;
                }
                
            })
        }

  
    })
})