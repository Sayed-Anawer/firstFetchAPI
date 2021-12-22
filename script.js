const tableMain = document.querySelector("#main-table");
const fetchData = async () => {
  const data = await fetch("https://api.covidtracking.com/v2/us/daily.json")
    .then((res) => res.json())
    .then((data) => data.data)
    .catch((err) => console.error(err));

  data.map((el) => {
    const tableRow = document.createElement("tr");
    tableRow.classList.add("table-row");
    tableRow.innerHTML = `
    <td>${el.date}</td>
    <td>${el.cases.total.value}</td>
    <td>${el.outcomes.death.total.value}</td>
    <td>${el.outcomes.hospitalized.in_icu.currently.value}</td>
    <td>${el.outcomes.hospitalized.on_ventilator.currently.value}</td>
`;
    tableMain.appendChild(tableRow);
  });
};

fetchData();
