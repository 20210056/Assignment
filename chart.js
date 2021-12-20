const ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Food", "Hobbies", "Transport fees", "Books", "Insurance", "Bills"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {},
});
const addData = (x) => {
  const data = myChart.data;
  if (data.datasets.length > 0) {
    data.labels.push("Food");
    for (let index = 0; index < data.datasets.length; ++index) {
      data.datasets[index].data.push(10);
    }
    myChart.update();
  }
};
