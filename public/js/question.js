
//declaration d'un tableau
let quizs =[]

//la fonction question permet de recuperer les valeur du formulaire et de les enregistrer dans localstorage
const questions = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            let quiz = {
                
                question: document.getElementById('q').value,
                reponse1: document.getElementById('r1').value,
                reponse2: document.getElementById('r2').value,
                reponse_correct: document.getElementById('r3').value
            }
            quizs.push(quiz);
        
            document.forms[0].reset(); // to clear the form for the next entries
            //document.querySelector('form').reset();

            //for display purposes only
            console.warn('added' , {quizs} );
            let pre = document.querySelector('msg');
            msg.textContent = '\n' + JSON.stringify(quizs, '\t', 2);

            //saving to localStorage
           localStorage.setItem('myquiz', JSON.stringify(quizs) );
               
            
        }


        //evenement de clic qui execute la fonction question passer argument 
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btn').addEventListener('click', questions);
        });


