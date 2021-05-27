import './sass/main.scss';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
    body: document.body,
};

function changeBodyBg() {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(1, colors.length - 1)];
}

const colorSwitch = {
    intervalId: null,
    isActive: false,

    start() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        refs.startBtn.disabled = true;
        this.intervalId = setInterval(changeBodyBg, 1000);
    },

    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
        refs.startBtn.disabled = false;
    }
};

refs.startBtn.addEventListener('click', () => {
    colorSwitch.start();
});

refs.stopBtn.addEventListener('click', () => {
    colorSwitch.stop();
});

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};



