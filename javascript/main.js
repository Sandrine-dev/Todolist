//localStorage.setItem("clé", "valeur")
//localStorage.getItem("clé")
//localStorage.clear
//JSON.stringify(objet)  -> transformer un objet en string
//JSON.parse(string)  -> transforme string en objet

"use strict" //pour que si on fait une erreure que le navigateur laisse passer, ça ne passera plus



/*Variable*/
let btn = document.getElementById('btn'); //recupère le btn submit
let task = document.getElementById('task'); //récupère l'input
let ul = document.getElementById('todo'); //récupère l'input ul
let noTask = document.getElementById('noTask'); //récupère la phrase
ul.innerHTML = localStorage.getItem('list'); //récupère la list présente dans le localStorage
let iDels = document.querySelectorAll('.delete'); //récupère toute les class delet



for (let div of iDels){
    div.onclick = () => del(div.parentElement); 
    //boucle qui sert à supprimer l'élément apprait un raffraichissement de la page
}

noTask.style.display= (ul.innerHTML == '' ) ? "block" : "none";
// si ul est vide alors le noTask n'apparait pas

btn.addEventListener("click", function() { 
    if(task.value === "" ){
        window.alert('Vous n\'avez pas ecris de tâche') 
        return false
        //si l'input est vide on envois une alerte et on bloque le script
    }

    let li = document.createElement("li"); //on créer l'éléement li
    let divDelete = document.createElement("div"); //on créer la dive

    divDelete.classList.add("delete"); //on ajoute une class delete


    /*remplire les element créer*/
    li.innerHTML = '<label class="main"> <input type="checkbox" class="check"> <span class="check"> </span> </label>' +
                '<p class="afficheTask">' + task.value + '</p>';
    divDelete.innerHTML = '<i class="uil uil-trash-alt"></i>';

    /*mettre les elements au bon endroit*/
    li.appendChild(divDelete) //met div en enfant de li
    ul.appendChild(li); //met li en enfant à ul

    task.value = ""; //permet de remettre le champ task vide
    noTask.style.display = "none" //changement de style

    localStorage.setItem("list", ul.innerHTML); //et on envois la liste

    divDelete.onclick = () => {
        del(li);//boutton supréssion
    }

})

let del = function (taskClear){
    taskClear.remove(); //permet de supprimer la tache
    noTask.style.display= (ul.innerHTML == '' ) ? "block" : "none"; //changement de style

    localStorage.setItem("list", ul.innerHTML); //on rafraichie la liste du localStorage
}

//Pour un formulaire on pourra utiliser la méthode sinon ça ne fonctionnera pas: 
    /*
    form.onsubmit = (event) => {
        let li = document.createElement("li");
        li.textContent = task.value;

        ul.appendChild(li); //met li en enfant à ul
        task.value = ""; //permet de remettre le champ task vide 

        event.preventDefault();
    }

    OU

    form.onsubmit = () => {
        let li = document.createElement("li");
        li.textContent = task.value;

        ul.appendChild(li); //met li en enfant à ul
        task.value = ""; //permet de remettre le champ task vide 

        return false;
    }
    */