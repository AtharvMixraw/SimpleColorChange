document.getElementById('colorButton').addEventListener('click', function() {
    // Generate random RGB values
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    
    // Combine into a CSS color string
    var randomColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    
    // Apply the random color to the body background
    document.body.style.backgroundColor = randomColor;
  });
  