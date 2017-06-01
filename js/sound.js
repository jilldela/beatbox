class Sound {
  constructor() {
    this.context = new AudioContext() || new webkitAudioContext();
    this.source = null;
    this.audioBuffer = [];

    this.initSound = this.initSound.bind(this);
    this.stopSound = this.stopSound.bind(this);
  }

  stopSound() {
    if (this.source) {
      this.source.noteOff(0);
    }
  }

  playSound() {
    // source is global so we can call .noteOff() later.
    this.source = context.createBufferSource();
    this.source.buffer = this.audioBuffer;
    this.source.loop = false;
    this.source.connect(context.destination);
    this.source.noteOn(0); // Play immediately.
  }

  initSound(arrayBuffer) {
    context.decodeAudioData(arrayBuffer, (buffer) => {
      // audioBuffer is global to reuse the decoded audio later.
      this.audioBuffer.push(buffer);
      console.log(this.audioBuffer);

    }, (e) => {
      console.log('Error decoding file', e);
    });
  }

  // Load file from a URL as an ArrayBuffer.
  // Example: loading via xhr2: loadSoundFile('sounds/test.mp3');
  loadSoundFile(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = (e) => {
      this.initSound(this.response); // this.response is an ArrayBuffer.
    };
    xhr.send();
  }
}

export default Sound;
