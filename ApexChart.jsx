import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
const ApexChart = () => {
  const [state] = React.useState({
    series: [
      {
        name: "Female",
        type: "column",
        data: [14, 20, 25, 15, 45],
      },
      {
        name: "Male",
        type: "column",
        data: [10, 30, 31, 40, 41],
      },
      {
        name: "Shortlisted",
        type: "line",
        data: [8, 29, 27, 36, 25],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        stacked: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [1, 1, 4],
      },
      title: {
        text: "SQL QUERYTHON GENDER BASED ANALYSIS",
        align: "left",
        offsetX: 110,
      },
      xaxis: {
        categories: ["round1", "round2", "round3", "round4", "round5"],
      },
      yaxis: [
        {
          seriesName: "Shortlisted Count",
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: "#008FFB",
          },
          labels: {
            style: {
              colors: "#008FFB",
            },
          },
          title: {
            text: "(Registrations)",
            style: {
              color: "#008FFB",
            },
          },
          tooltip: {
            enabled: true,
          },
        },
        {
          seriesName: "Cashflow",
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: "#00E396",
          },
          labels: {
            style: {
              colors: "#00E396",
            },
          },
        },
      ],
      tooltip: {
        fixed: {
          enabled: true,
          position: "topLeft",
          offsetY: 30,
          offsetX: 60,
        },
      },
      legend: {
        horizontalAlign: "left",
        offsetX: 40,
      },
    },
  });

  // Second chart state configuration
  const mixedChartState = {
    series: [
      {
        name: 'AEC',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
      },
      {
        name: 'ACET',
        type: 'area',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
      },
      {
        name: 'ACOE',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
      }
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        stacked: false,
      },
      stroke: {
        width: [0, 2, 5],
        curve: 'smooth'
      },
      plotOptions: {
        bar: {
          columnWidth: '50%'
        }
      },
      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: 'light',
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100]
        }
      },
      labels: [
        '01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
        '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
      ],
      markers: {
        size: 0
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        title: {
          text: 'Points',
        }
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " points";
            }
            return y;
          }
        }
      }
    },
  };

  const donutInitial = [44, 55, 41, 17, 15]; // Add this initial value for donut chart

  const donutOptions = {
    chart: {
      width: 380,
      type: "donut",
    },
    dataLabels: {
      enabled: true,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    legend: {
      position: "right",
      offsetY: 0,
      height: 230,
    },
  };

  const [donutSeries, setDonutSeries] = useState(donutInitial);

  const appendData = () =>
    setDonutSeries((prev) => [...prev, Math.floor(Math.random() * 100) + 1]);
  const removeData = () => setDonutSeries((prev) => prev.slice(0, -1));
  const randomize = () =>
    setDonutSeries((prev) => prev.map(() => Math.floor(Math.random() * 100) + 1));
  const reset = () => setDonutSeries(donutInitial);

  return (
    <div>
      <div className="charts">
        <div id="donut-chart">
          <ReactApexChart options={donutOptions} series={donutSeries} type="donut" width={450} height={550}/>
          <button id="randomize" className="btns" onClick={randomize}>
            Randomize
          </button>
          <button id="add" className="btns" onClick={appendData} style={{ marginLeft: 8 }}>
            Add
          </button>
          <button id="remove" className="btns" onClick={removeData} style={{ marginLeft: 8 }}>
            Remove
          </button>
          <button id="reset" className="btns" onClick={reset} style={{ marginLeft: 8 }}>
            Reset
          </button>
        </div>
        <div id="combo-chart">
          <ReactApexChart options={state.options} series={state.series} type="line" height={550} />
        </div>
      </div>
      <div className="last-div">
        <div id="combo-chart2">
          <ReactApexChart options={mixedChartState.options} series={mixedChartState.series} type="line" height={400}  width={550}/>
        </div>
        <table className="dept-table">
          <tr>
            <th>Department</th>
            <th>Registrations</th>
            <th>Submissions</th>
            <th>Pass Ratio</th>
            <th>College</th>
          </tr>
          <tr>
            <td>Computer Science</td>
            <td>800</td>
            <td>650</td>
            <td>81.25%</td>
            <td>AEC</td>
          </tr>
          <tr>
            <td>Artificail Intelligence</td>
            <td>1300</td>
            <td>350</td>
            <td>74.25%</td>
            <td>ACET</td>
          </tr>
          <tr>
            <td>Data Science</td>
            <td>1300</td>
            <td>350</td>
            <td>74.25%</td>
            <td>ACET</td>
          </tr>
          <tr>
            <td>Information Technology</td>
            <td>1300</td>
            <td>350</td>
            <td>74.25%</td>
            <td>ACET</td>
          </tr>
          <tr>
            <td>Computer Science</td>
            <td>246</td>
            <td>890</td>
            <td>58.25%</td>
            <td>ACOE</td>
          </tr>
        </table>
      </div>

    </div>
  );
};
export default ApexChart;