const formatDate = (inputDate) => {
  let date = new Date(inputDate);
  date =
    date.getDate() +
    "-" +
    date.toLocaleString("default", { month: "long" }) +
    "-" +
    date.getFullYear();
  return date;
};

export default formatDate