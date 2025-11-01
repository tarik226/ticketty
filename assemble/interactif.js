const buttonsuivant= document.getElementsByClassName("first_page_button")[0];
buttonsuivant.addEventListener("click",()=>{
    const section_une =document.getElementsByClassName("Choix_evenement")[0];
    section_une.style.display="none";
    const section_deux =document.getElementsByClassName("selection_billets")[0];
    section_deux.style.display="block";
})

const buttonincrement=document.getElementsByClassName("plus")[0];
const buttondecrement=document.getElementsByClassName("minus")[0];
buttondecrement.addEventListener("click",()=>{
    let value=Number(document.getElementsByClassName("nummer")[0].innerHTML);
    value--;
    document.getElementsByClassName("nummer")[0].innerHTML=value;
})
buttonincrement.addEventListener("click",()=>{
    let value=Number(document.getElementsByClassName("nummer")[0].innerHTML);
    value++;
    document.getElementsByClassName("nummer")[0].innerHTML=value;
})
const buttonsuivant_deux=document.getElementById("suivant_deux");
buttonsuivant_deux.addEventListener("click",()=>{
    const ticket_number=Number(document.getElementsByClassName("nummer")[0].innerHTML);
    console.log("ici");
    if (ticket_number>4) {
        console.log("ici 1");
        let minusdiv=document.getElementsByClassName("minus")[0];
        let element=document.createElement("p");
        element.innerHTML="<srtong>le nombre des tickets depasse l'existant</strong>";
        element.classList.add("error");
        console.log("ici 2");
        minusdiv.after(element);
    }else{
        let valuee=Number(document.getElementsByClassName("nummer")[0].innerHTML);
        localStorage.setItem("ticketvalue",valuee);
        const section_trois=document.getElementsByClassName("ajout_participants")[0];
        const section_deux =document.getElementsByClassName("selection_billets")[0];
        section_trois.style.display="block";
        section_deux.style.display="none";

    }
})
const button_precedent=document.getElementById("precedent_deux");
button_precedent.addEventListener("click",()=>{
    const section_une =document.getElementsByClassName("Choix_evenement")[0];
    section_une.style.display="block";
    const section_deux =document.getElementsByClassName("selection_billets")[0];
    section_deux.style.display="none";
})

// document.getElementsByClassName("formsubmitbutton")[0].addEventListener("click", function () {
//     document.getElementById("myForm").submit();
//})
const form=document.getElementsByClassName("form")[0];
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const nom=document.getElementsByClassName("nomform")[0].value;
    const regexnom=/^[a-zA-Z]+$/;
    const prenom=document.getElementsByClassName("prenomform")[0].value;
    const regexprenom=/^[a-zA-Z]+$/;
    const email=document.getElementsByClassName("emailform")[0].value;
    const regexemail=/^[a-zA-Z0-9]+@(gmail|yahoo)\.\w{2,}$/;
    const telephone=document.getElementsByClassName("telform")[0].value;
    const regextel=/^\+212\d{9}$/;
    if(!regexnom.test(nom)){
        let p=document.createElement("p");
        p.innerText="le nom doit contenir seulement des lettres ";
        document.getElementsByClassName("nomform")[0].after(p);
        return false;
    }
     if(!regexprenom.test(prenom)){
        let p=document.createElement("p");
        p.innerText="le prenom doit contenir seulement des lettres ";
        document.getElementsByClassName("prenomform")[0].after(p);
        return false;
    }
    if(!regexemail.test(email)){
        let p=document.createElement("p");
        p.innerText="l'email doit contenir une arobase et soit gmail ou yahoo ";
        document.getElementsByClassName("emailform")[0].after(p);
        return false;
    }
    if(!regextel.test(telephone)){
        let p=document.createElement("p");
        p.innerText="le telephone doit contenir seulement des chiffres";
        document.getElementsByClassName("telform")[0].after(p);
        return false;
    }else{
         let total=document.getElementsByClassName("oftotal")[0];
         let newelement=document.createElement("div");
         let div_group=document.getElementsByClassName("listage")[0];
         total.innerText=`1/${localStorage.getItem("ticketvalue")}`;
        for (let index = 0; index <Number(localStorage.getItem("ticketvalue")); index++) {
            // const element = array[index];
           
            total.innerText=`${index+1}/${localStorage.getItem("ticketvalue")}`;
        
        
            
        }
        document.getElementsByClassName("formsubmitbutton")[0].disabeld=true;
        newelement.innerHTML=`<div class="group" onclick="deleteself(this)">
            <div class="first">
              <div class="upperleft">
                <div><i class="fa-solid fa-envelope"></i></div>
                <div>${nom+' '+prenom}</div>
              </div>
              <div class="upperright">
                <div><i class="fa-solid fa-envelope"></i></div>
                <div>${email}</div>
              </div>
            </div>
            <div class="second diff">
              <div><i class="fa-solid fa-phone"></i></div>
              <div>${telephone}</div>
            </div>
          </div>`;
        
        div_group.appendChild(newelement);
    
        
    }
})

function deleteself(el) {
    el.delete();
  }
// document.querySelectorAll(".group").forEach(el => {
//   el.addEventListener("click", function (e) {
//     e.currentTarget.remove(); 
//   });
// });


const buttonlastpage=document.getElementsByClassName("buttonto4page")[0];
buttonlastpage.addEventListener("click",()=>{
    const section_trois=document.getElementsByClassName("ajout_participants")[0];
    section_trois.style.display="none";
    const section_4=document.getElementsByClassName("recapulatif_confirmation")[0];
    section_4.style.display="block";
})

const buttonto3page=document.getElementsByClassName("buttonto3page")[0];
buttonto3page.addEventListener("click",()=>{
    const section_trois=document.getElementsByClassName("ajout_participants")[0];
    section_trois.style.display="none";
    const section_4=document.getElementsByClassName("selection_billets")[0];
    section_4.style.display="block";
})


const buttontoprevious=document.getElementsByClassName("buttontoprevious")[0];
buttontoprevious.addEventListener("click",()=>{
    const section_trois=document.getElementsByClassName("recapulatif_confirmation")[0];
    section_trois.style.display="none";
    const section_4=document.getElementsByClassName("ajout_participants")[0];
    section_4.style.display="block";
})


//|| regexprenom.test(prenom) || regexemail.test(email)||regextel.test(telephone)