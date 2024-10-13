
function changecolor(bulbcolor){
    const bulbimg = document.getElementById('bulb-image');
    const bulbcontainer = document.getElementById('bulb-box-img');
    const bulbsubcontainer = document.getElementById('bulb-container');
    const maincontainer = document.getElementById('sub-container');
      
    switch(bulbcolor){

        case 'blue':
            bulbimg.src = './images/blue-bulb-removebg-preview.png';
            bulbcontainer.style.backgroundColor = '#4d4dff';
            bulbsubcontainer.style.backgroundColor = '#6666ff';
            bulbsubcontainer.style.boxShadow = "0px 0px 100px  20px #6666ff";
            break;
        case 'green': 
            bulbimg.src =  './images/green-bulb-removebg-preview.png';
            bulbcontainer.style.backgroundColor = 'green';
            bulbsubcontainer.style.backgroundColor = '#32cd32';
            bulbsubcontainer.style.boxShadow = "0px 0px 100px  20px #32cd32";
         
            break;
         case 'pink':
            bulbimg.src = './images/pink-bulb-removebg-preview.png';
            bulbcontainer.style.backgroundColor = '#ff33cc';
            bulbsubcontainer.style.backgroundColor = '#ff80df';
            bulbsubcontainer.style.boxShadow = "0px 0px 100px  20px #ff80df";
            break;
         case 'red':
           bulbimg.src = './images/red-bulb-removebg-preview.png';
           bulbcontainer.style.backgroundColor = 'red';
           bulbsubcontainer.style.backgroundColor = '#ff4d4d';
           bulbsubcontainer.style.boxShadow = "0px 0px 100px  20px #ff4d4d";
             break; 
         case 'yellow':
           bulbimg.src = './images/yellow-bulb-removebg-preview.png';
           bulbcontainer.style.backgroundColor = 'yellow';
           bulbsubcontainer.style.backgroundColor = '#ffff66';
           bulbsubcontainer.style.boxShadow = "0px 0px 100px  20px #ffff66";
            break;
         case 'light':
           bulbimg.src = './images/lightbulb__1_-removebg-preview.png';
           bulbcontainer.style.backgroundColor = '#ffd633';
           bulbsubcontainer.style.backgroundColor = '#ffe066';
           bulbsubcontainer.style.boxShadow = "0px 0px 100px  20px #ffe066";
           break;
            
                
    } 

}