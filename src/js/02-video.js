import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

const savePlaybackTime = throttle(time => {
  localStorage.setItem('videoplayer-current-time', time);
}, 1000);

const getCurrentVideoTime = () => {
  return parseFloat(localStorage.getItem('videoplayer-current-time') || 0);
};

player.on('timeupdate', event => {
  savePlaybackTime(event.seconds);
});

window.addEventListener('DOMContentLoaded', () => {
  const currentTime = getCurrentVideoTime();
  player.setCurrentTime(currentTime).catch(error => {
    console.log('Error setting current time:', error);
  });
});
