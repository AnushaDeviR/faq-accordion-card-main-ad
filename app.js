let faqPanel = document.querySelectorAll("ul");
let faqCard = document.getElementsByClassName("card");

function dropDownFaq(event){ 
    
    // event target id 
    let faqTargetId = event.path[2].getAttribute("id");
    let qnTarget = event.path[1].parentElement; 
    let qnTargetId = event.path[1].parentElement.getAttribute("id");
    
    //if ID of clicked list set matches the clicked question's id
   if (faqTargetId === qnTargetId) { 

    console.log("Id matched");

    // active state styling 

    let targetPanel = qnTarget.querySelectorAll("li")[0];   
    let qnPanel = targetPanel.querySelector("#faqQn");
    // console.log(qnPanel);
    qnPanel.classList.toggle("activeStatus");


    // dropdown answer 
    let answerPanel = qnTarget.querySelectorAll("li")[1]; 
    answerPanel.classList.toggle("ansActiveStatus")
    // console.log(answerPanel);
     

    if (answerPanel.style.maxHeight){ 
        answerPanel.style.maxHeight = null;
    }
    else { 
        answerPanel.style.maxHeight = answerPanel.scrollHeight + "px";
    }

   }
   else { 
       console.log("Id unmatched");
   }

}

