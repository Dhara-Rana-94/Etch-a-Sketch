
function sketch(){   

    createGrid()
    colorSquares()   
} 
sketch();

function getGrid(){
    
    while (true){
        let grid = prompt("Please enter a number 1-50 for the grid size ");
        if (grid>50){
            alert('ERROR! PLEASE PICK A NUMBER 1-50');
            continue;
        } else{
            return grid
        }                 
    }    
}

function createGrid(){
    let grid= getGrid();    
    
    const container = document.querySelector('.container');

    for( let i=1; i<=grid**2; i++){    
        const content = document.createElement('div');
        content.classList.add('content');
        container.appendChild(content);
    }
    container.style.setProperty('--cols',(Math.sqrt(container.children.length)));
}

function colorSquares(){

    const coloredSquares= document.querySelectorAll('.content')
      
    coloredSquares.forEach((square) => {
        square.addEventListener('mouseover',()=> {
        square.classList.add('switch')
        });
    });
}

const resize=document.querySelector('.resize');

resize.addEventListener('click', ()=> {

    const all= document.querySelectorAll('.content');

    all.forEach((item)=> {
        item.remove('content');
    });

    sketch();
})
   
const reset= document.querySelector('.reset');

reset.addEventListener("click",()=> {
    const square= document.querySelectorAll('.content');

    square.forEach((cell)=>{
        cell.classList.remove('switch');

    })
})



    
     


 








   







