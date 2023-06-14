const drums = document.querySelectorAll('.drum');
const sounds = document.querySelectorAll('.sound');

const handleDrumClick = (index) => {
  const currentSound = sounds[index];
  currentSound.currentTime = 0;
  currentSound.play();
};

drums.forEach((drum, index) => {
  drum.addEventListener('click', () => handleDrumClick(index));
});

