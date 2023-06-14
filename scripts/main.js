// elements
const drums = document.querySelectorAll('.drum');
const sounds = document.querySelectorAll('.sound');

// functions
const handleDrumClick = (event, index) => {
  // executing the sound of the selected drum or connected key
  const currentSound = sounds[index];
  currentSound.currentTime = 0;
  currentSound.play();
};

// event listeners
drums.forEach((drum, index) => {
  drum.addEventListener('click', (event) => handleDrumClick(event, index));
});

window.addEventListener('keydown', (event) => {
  // getting the pressed key
  const keyPressed = event.key.toLowerCase();
  const keyMapping = {
    w: 0,
    a: 1,
    s: 2,
    d: 3,
    h: 4,
    j: 5,
    k: 6,
    l: 7
  };

  // checking if the pressed key value exists in keyMapping object
  // if it exists, handleDrumClick is being executed.
  if (keyMapping.hasOwnProperty(keyPressed)) {
    handleDrumClick(event, keyMapping[keyPressed]);
  }
});
