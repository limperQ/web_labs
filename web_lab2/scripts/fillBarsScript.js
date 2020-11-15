function fillBars(ctx, dataArray, barWidth) {
  
  let barHeight;
  let x = 0;
  let r, g, b;
  let bars = 130 
  
  for (let i = 0; i < bars; i++) {
    barHeight = (dataArray[i] * 2.5);

    if (dataArray[i] > 210){ // розовый
      r = 250
      g = 0
      b = 255
    } else if (dataArray[i] > 200){ // желтый
      r = 250
      g = 255
      b = 0
    } else if (dataArray[i] > 190){ // желтозеленый
      r = 204
      g = 255
      b = 0
    } else if (dataArray[i] > 180){ // синезеленый
      r = 0
      g = 219
      b = 131
    } else { // светлосиний
      r = 0
      g = 199
      b = 255
    }

    ctx.fillStyle = `rgb(${r},${g},${b})`;
    ctx.fillRect(x, (canvas.height - barHeight), barWidth, barHeight);

    x += barWidth + 10 // Расстояние между барами
  }
};