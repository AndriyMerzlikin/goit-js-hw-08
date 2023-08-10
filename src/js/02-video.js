import Player from '@vimeo/player';

const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
}

const currentTime = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);

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
