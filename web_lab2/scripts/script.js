window.onload = function() {
  const file = document.getElementById("file-input");
  const canvas = document.getElementById("canvas");
  const h3 = document.getElementById('name')
  const audio = document.getElementById("audio");

  file.onchange = function() {
    const files = this.files;
    h3.innerText = `${files[0].name}`

    audio.src = URL.createObjectURL(files[0]);    

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");

    const context = new AudioContext();
    let src = context.createMediaElementSource(audio);
    const analyser = context.createAnalyser();

    src.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 16384;
    // analyser.fftSize = 32768;

    const bufferLength = analyser.frequencyBinCount; 
    const dataArray = new Uint8Array(bufferLength); 

    const barWidth = (canvas.width / bufferLength) * 13;

    function renderFrame() {
      requestAnimationFrame(renderFrame);
      ctx.fillStyle = "rgba(0,0,0,0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      analyser.getByteFrequencyData(dataArray); 
      fillBars(ctx, dataArray, barWidth);      
    }

    audio.play();
    renderFrame();
  };
};