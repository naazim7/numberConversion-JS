const button= document.getElementById('btn')




const convert = function() {

    const decimal = document.getElementById('decimal').value
   if(decimal!='' && decimal>0)
   {

      




   const convertBinary=Number(decimal).toString(2)
   let binary= document.getElementById('binary').value=convertBinary
   const convertOctal=Number(decimal).toString(8)
   let octal= document.getElementById('octal').value=convertOctal

   const converthexa=Number(decimal).toString(16)
   let hexa= document.getElementById('hexa').value=converthexa



   }
    
    
    else{
        alert('Please Input Some Decimal Number')
    }
    

}

button.addEventListener('click',convert)
