export default (date: string): string =>
  new Date(date).toLocaleString("en-us", {
    month: "long",
    day: "2-digit",
    year: "numeric"
  });
