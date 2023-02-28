import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const saveCurrentTime = event => {
  localStorage.setItem('videoplayer-current-time', event.seconds);
  console.log(localStorage.getItem('videoplayer-current-time'));
};

player.on('timeupdate', saveCurrentTime);

player.setCurrentTime(Number(localStorage.getItem('videoplayer-current-time')));
