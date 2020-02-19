 //var a=document.getElementById('c');

 var a =document.getElementById("button");
 
 var no=document.getElementById("id");
 var min=0;
 var hr=0;
 var sec=0;




 console.log("HIHIIHIIHI"+v);
 var c;
 var i=0;

 a.addEventListener('click', f);
 var c2;
 

 

 



  function f()
  {
    
    

    if(v.value<=0)
      return;


    var z=document.getElementById("current");
    z.style.display="none";
       
    var no=document.getElementById("id");

    no.innerHTML=i;
    no.classList.remove('animate');



       i=0;
     
     

     c2=setInterval(f1,1000);
         
      
    
              

    }
   
    function f1()
    {
      i++;
      sec++;
       if(i>=60)
       inputMin(i);

       if(min>=59)
       {
         hr++;

         inputHr();

       }
         

        
  
        

         
        

 
       


        console.log(v.value);
        

        

        

        if(sec==v.value)
        {
            
            var no=document.getElementById("id");

            no.innerHTML=i;
            no.classList.add('animate');

            clearInterval(c2);

           
          
            return;
        }


       //console.log(i);
        
       var no=document.getElementById("id");

        no.innerHTML=i;
  
        no.classList.add('animate');
        if(i===60)
        {
          i=0;
          
        }

        var c1= setTimeout(function()
            {
                 
               no.classList.remove('animate');
    
            }, 500);
            
       
        
   
    }
    
        

    function inputMin( i)
    {

      console.log("i"+i);
    

      if(i===60)
       {
       
        min++;
        if(min>10)
        {
          
          var minFirst=document.getElementsByClassName('min');
          console.log(minFirst.length);
          minFirst[0].getElementsByClassName('current')[0].innerHTML=min;
          
        }else{
           
           
           
          var no=min.toString();
          console.log(no);
          let counter=0;
          for(let tempNo=0;tempNo<no.length;tempNo++)
          {
            var minFirst=document.getElementsByClassName('min');
           // console.log("Len "+no.length);
               console.log(minFirst[tempNo]);
            minFirst[tempNo].getElementsByClassName('current')[0].innerHTML=no.charAt(tempNo);
            // counter++;

          }


        }

      }
    }
 
    function inputHr()
    {
       
      if(min>=60)
      {
        
        if(hr<=9)
        {
          console.log("indide the HR");
          var hrFirst=document.getElementsByClassName('hr');
         // console.log(minFirst.length);
          hrFirst[0].getElementsByClassName('current')[0].innerHTML=hr;

        }else{
          
         
          var no=hr.toString();
          console.log(no);
          let counter=0;
          for(let tempNo=0;tempNo<no.length;tempNo++)
          {
            var hrFirst=document.getElementsByClassName('hr');
           // console.log("Len "+no.length);
              // console.log(minFirst[tempNo]);
            hrFirst[tempNo].getElementsByClassName('current')[0].innerHTML=no.charAt(tempNo);
            // counter++;

          }


        }
         


      }
    }
        
 