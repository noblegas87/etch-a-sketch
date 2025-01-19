//select the container element by its class


const container=document.querySelector('.grid-container')
//  let squaresPerSide=4

// let totalSquares=squaresPerSide*squaresPerSide;

const btnDimension=document.querySelector('.btnDimension')

const clearButton=document.querySelector('#clear')

const greenRadio = document.querySelector('#greenRadio');

const blackRadio=document.querySelector('#blackRadio')

const redRadio = document.querySelector('#redRadio');

const blueRadio=document.querySelector('#blueRadio')

const randomColorRadio=document.querySelector('#randomColorRadio')

// const gridSquares=document.querySelectorAll('.grid-square')






btnDimension.addEventListener('click',function(){



  let squaresPerSide  = prompt("Please enter the number of dimensions r:");


  //adds how many ever grids you want
  if (!squaresPerSide || squaresPerSide <= 0) {
    alert("Invalid input! Please enter a positive number.");
    return;
  }

  else if (squaresPerSide>100){
    alert("Too large of an input ! ")
    return;
  }

  // Clear the existing grid
  container.innerHTML = '';

  let totalSquares = squaresPerSide * squaresPerSide;

  for(let i=0; i<totalSquares; i++){
    const square=document.createElement('div');
    square.classList.add('grid-square');
  
  
    // Dynamically set the size of each square
    const size = 100 / squaresPerSide;
    square.style.flex = `0 0 ${size}%`;
    square.style.height = `${size}%`;
    container.appendChild(square)}
  

 

 })





// })


  // Calculate the total number of squares







 

 









//create mouseover event in which when you hover over one of the grid boxes in the grid  the background color changes

// Select all grid squares




greenRadio.addEventListener("click", () => {
  let gridSquares = document.querySelectorAll('.grid-square'); // Re-query dynamically
  gridSquares.forEach((gridSquare) => {
    gridSquare.addEventListener('mouseover', () => {
      gridSquare.style.backgroundColor = 'green';
    });
  });
});

blackRadio.addEventListener("click", () => {
  let gridSquares = document.querySelectorAll('.grid-square'); // Re-query dynamically
  gridSquares.forEach((gridSquare) => {
    gridSquare.addEventListener('mouseover', () => {
      gridSquare.style.backgroundColor = 'black';
    });
  });
});

redRadio.addEventListener("click", () => {
  let gridSquares = document.querySelectorAll('.grid-square'); // Re-query dynamically
  gridSquares.forEach((gridSquare) => {
    gridSquare.addEventListener('mouseover', () => {
      gridSquare.style.backgroundColor = 'red';
    });
  });
});

blueRadio.addEventListener("click", () => {
  let gridSquares = document.querySelectorAll('.grid-square'); // Re-query dynamically
  gridSquares.forEach((gridSquare) => {
    gridSquare.addEventListener('mouseover', () => {
      gridSquare.style.backgroundColor = 'blue';
    });
  });
});

clearButton.addEventListener("click", () => {
  let gridSquares = document.querySelectorAll('.grid-square'); // Re-query dynamically
  gridSquares.forEach((gridSquare) => {
    gridSquare.style.backgroundColor = "#ff7e5f";
    gridSquare.style.boxShadow = "0 0 10px #feb47b";
  });
});

randomColorRadio.addEventListener('click', () => {
  let gridSquares = document.querySelectorAll('.grid-square'); // Re-query dynamically
  gridSquares.forEach((gridSquare) => {
    gridSquare.addEventListener('mouseover', () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      const randomRGB = `rgb(${r}, ${g}, ${b})`;
      gridSquare.style.backgroundColor = randomRGB;
    });
  });
});
      

