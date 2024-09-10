AOS.init();

const timeSpan = document.querySelector("#counter");
const birthdayDate = new Date("2024-12-31T00:00:00");

const interval = setInterval(() => countDown(birthdayDate, interval), 1000);

document.querySelector(".infobar__form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Sem implementação de envio de dados :(");
});

function countDown(birthdayDate, intervalToClear) {
  const currentDate = new Date();
  const currentDateTimestamp = currentDate.getTime();
  const birthdayTimestamp = birthdayDate.getTime();

  const remainingMiliseconds = birthdayTimestamp - currentDateTimestamp;

  if (remainingMiliseconds > 0) {
    const remainingDays = remainingMiliseconds / 1000 / 60 / 60 / 24;

    const remainingHours = getRemainder(remainingDays) * 24;
    const remainingMinutes = getRemainder(remainingHours) * 60;
    const remainingSeconds = getRemainder(remainingMinutes) * 60;

    const remainingTimeInSeparateUnits = [
      remainingDays,
      remainingHours,
      remainingMinutes,
      remainingSeconds,
    ].map((v) => Math.trunc(v));

    timeSpan.innerText = `${remainingTimeInSeparateUnits[0]} dias, ${remainingTimeInSeparateUnits[1]} horas, ${remainingTimeInSeparateUnits[2]} minutos e ${remainingTimeInSeparateUnits[3]} segundos`;
  } else {
    clearInterval(intervalToClear);
  }
}

function getRemainder(upperTimeUnit) {
  return upperTimeUnit > 1
    ? upperTimeUnit % Math.trunc(upperTimeUnit)
    : upperTimeUnit;
}
