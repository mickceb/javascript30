// Make sure the DOM is loaded
window.onload = () => {
  const secondHand = document.querySelector(".second-hand");
  const minutesHand = document.querySelector(".min-hand");
  const hoursHand = document.querySelector(".hour-hand");

  function setDate() {
    const now = new Date();
    // get time
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    // transform time in degree
    const secondsDegree = (seconds / 60) * 360 + 90;
    const minutesDegree = (minutes / 60) * 360 + 90;
    const hoursDegree = (hours / 12) * 360 + 90;
    // change transform rotate style
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    minutesHand.style.transform = `rotate(${minutesDegree}deg)`;
    hoursHand.style.transform = `rotate(${hoursDegree}deg)`;
  }

  setInterval(setDate, 1000);
};
