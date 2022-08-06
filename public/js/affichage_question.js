    

    //getItem sur la variable de stockage
    let data = localStorage.getItem("myquiz");

    //parser les donnees 
    let objJson = JSON.parse(data);
  
    //mettre chaque item dans une variable
    let q = objJson[0].question
    let r1= objJson[0].reponse1
    let r2= objJson[0].reponse2  
    let rc= objJson[0].reponse_correct

    //Qt,R1,R2 les id qui doivent contenir les items
    const Qt = document.getElementById('question');
    const R1 = document.getElementById('reponse1');
    const R2 = document.getElementById('reponse2');
  
    //un innerHTMLinserer les valeurs 
    Qt.innerHTML = q;
    R1.innerHTML = r1;
    R2.innerHTML = r2;





//iteration sur l'objet objJson 

for (i=0; i<objJson.length; i++){
   
   //resp a la reponse correct pour question1 
  let resp =  objJson[0].reponse_correct

//recupere le dataset de l'element reponse1
  const container = document.getElementById('1')
  const bu = document.getElementById('reponse1');
  const button = bu.dataset.indexNumber

//ajouter un evenement au clic
  container.addEventListener('click', event => {
    //verifie si la valeur du dataset est egale a la valeur de la reponse
    if(button == resp){
      //reponse correct
    event.target.style.backgroundColor = 'green';

  }else{
    //reponse incorrect
    event.target.style.backgroundColor = 'red';

  }
  });

   

}


for (i=0; i<objJson.length; i++){
  let resp =  objJson[0].reponse_correct
  const container = document.getElementById('2')
  const bu = document.getElementById('reponse2');
  const button = bu.dataset.indexNumber
  container.addEventListener('click', event => {
    if(button == resp){
    event.target.style.backgroundColor = 'green';
  }else{
    event.target.style.backgroundColor = 'red';

  }
  });

}









    // document.addEventListener('DOMContentLoaded', ()=>{
    //         document.getElementById('btn').addEventListener('click', questions);
    //     });







