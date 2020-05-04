window.AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

const drawAudio = url => {
  fetch(url)
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
    .then(audioBuffer => draw(normalizeData(filterData(audioBuffer))));
};

const filterData = audioBuffer => {
  const rawData = audioBuffer.getChannelData(0);
  const samples = 70;
  const blockSize = Math.floor(rawData.length / samples);
  const filteredData = [];
  for (let i = 0; i < samples; i++) {
    const blockStart = blockSize * i;
    let sum = 0;
    for (let j = 0; j < blockSize; j++) {
      sum = sum + Math.abs(rawData[blockStart + j]);
    }
    filteredData.push(sum / blockSize);
  }
  return filteredData;
};

const normalizeData = filteredData => {
  const multiplier = Math.pow(Math.max(...filteredData), -1);
  return filteredData.map(n => n * multiplier);
};

const draw = normalizedData => {
  const canvas = document.querySelector('canvas');
  const dpr = window.devicePixelRatio || 1;
  const padding = 20;
  canvas.width = 400; // canvas.offsetWidth * dpr;
  canvas.height = (canvas.offsetHeight + padding * 2) * dpr;
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  ctx.translate(0, canvas.offsetHeight / 2 + padding); // set Y = 0 to be in the middle of the canvas

  const width = canvas.offsetWidth / normalizedData.length;
  for (let i = 0; i < normalizedData.length; i++) {
    const x = width * i;
    let height = normalizedData[i] * canvas.offsetHeight - padding;
    if (height < 0) {
      height = 0;
    } else if (height > canvas.offsetHeight / 2) {
      height = height > canvas.offsetHeight / 2;
    }
    drawLineSegment(ctx, x, height, width, (i + 1) % 2);
  }
};

const drawLineSegment = (ctx, x, height) => {
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#fff';
  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.lineTo(x, -height);
  ctx.stroke();
};

drawAudio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/shoptalk-clip.mp3');
