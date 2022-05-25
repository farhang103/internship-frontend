const convertDate = (timestamp) => {
  const time = timestamp;
  const date = new Date(time);
  const stringTime =
    date.getDate() +
    "/" +
    (date.getMonth() + 1) +
    "/" +
    date.getFullYear() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes();

  return stringTime;
};

module.exports = convertDate;
