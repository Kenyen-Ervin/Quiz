function check()
{
    var score=0;
    var q1=document.quiz.q1.value;
    var q2=document.quiz.q2.value;
    var q3=document.quiz.q3.value;
    var q4=document.quiz.q4.value;
    var q5=document.quiz.q5.value;
    var q7=document.quiz.q7.value;
    var q8=document.quiz.q8.value;
    var q9=document.quiz.q9.value;
    var q10=document.quiz.q10.value;

    
    if(q1=="A"){score++;}
    if(q2=="B"){score++;}
    if(q3=="C"){score++;}
    if(q4=="C"){score++;}
    if(q5=="A"){score++;}
    if(document.quiz.q6a.checked && document.quiz.q6d.checked){score++;}
    if(q7=="D"){score++;}
    if(q8=="B"){score++;}
    if(q9=="A"){score++;}
    if(q10=="B"){score++;}

    
    var percent= (score/10)*100;
  
 document.getElementById('result').innerHTML= "Your Score is : " + parseInt(percent)+"%";
}