//functionality of calculator

let screen=document.getElementById('screen');
 buttons=document.querySelectorAll('button');
 //&#8730x
screenValue=''
for( item of buttons)
{
    item.addEventListener('click',function(e)
    {
        buttonText=e.target.innerText;
        console.log('Button text is ',buttonText); 
        if(buttonText=='X')
        {
            buttonText='*';
            screenValue+=buttonText;
            screen.value = screenValue;
            
        }
       
        else if(buttonText=='CE')
        {
            screenValue="";
            screen.value=screenValue;
        }
        else if(buttonText=='=')
        {
            screen.value=eval(screenValue);
        }
        else if(buttonText=='|x|')
        {
            if(parseInt(screen.value)>0)
            {
                screenValue=screen.value;
                screen.value=screenValue;
            }
            if(parseInt(screen.value)<0)
            {
                screenValue=-(screen.value);
                screen.value=screenValue;
            }
        }
        else
        {
            screenValue += buttonText;
            screen.value = screenValue;

        }

        
    })
}
