import Player from '@vimeo/player';

const throttle = require('lodash.throttle');

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 250));

function onPlay(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

const currentTime = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (currentTime) {
  player
    .setCurrentTime(currentTime.seconds)
    .then(function (seconds) {})
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          break;

        default:
          break;
      }
    });
}
