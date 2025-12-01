import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
const ApexChart = () => {
  const [state] = React.useState({
    series: [
      {
        name: "Female",
        type: "column",
        data: [ 45,25,20,19,15],
      },
      {
        name: "Male",
        type: "column",
        data: [67,56,42,32,22],
      },
      {
        name: "Shortlisted",
        type: "line",
        data: [60,30,25,20,15],
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
     labels: ["CSE", "IT", "AIML", "DS", "ECE"],
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
    <svg width="170px" height="170px"><polygon fill="rgb(227,72,7)" stroke="rgb(227,72,7)" points="49.43828582763672,123.87362658977509 46.310063153505325,119.34745132923126 35.12033998966217,97.09183402359486"></polygon><polygon fill="rgb(255,141,93)" stroke="rgb(255,141,93)" points="41.87222808599472,71.88607275485992 42.147657573223114,93.09097044169903 35.12033998966217,97.09183402359486"></polygon><polygon fill="rgb(255,141,93)" stroke="rgb(255,141,93)" points="35.12033998966217,97.09183402359486 42.147657573223114,93.09097044169903 46.12394914031029,97.65030652284622"></polygon><polygon fill="rgb(255,141,93)" stroke="rgb(255,141,93)" points="35.12033998966217,97.09183402359486 46.12394914031029,97.65030652284622 40.67836254835129,111.18303716182709"></polygon><polygon fill="rgb(102,24,0)" stroke="rgb(102,24,0)" points="52.27850928902626,61.65312051773071 41.87222808599472,71.88607275485992 30.286898016929626,51.031509935855865"></polygon><polygon fill="rgb(102,24,0)" stroke="rgb(102,24,0)" points="41.87222808599472,71.88607275485992 52.27850928902626,61.65312051773071 47.473930567502975,77.22752720117569"></polygon><polygon fill="rgb(255,141,93)" stroke="rgb(255,141,93)" points="42.147657573223114,93.09097044169903 41.87222808599472,71.88607275485992 47.473930567502975,77.22752720117569"></polygon><polygon fill="rgb(102,24,0)" stroke="rgb(102,24,0)" points="52.27850928902626,61.65312051773071 30.286898016929626,51.031509935855865 30.553552508354187,26.124363243579865"></polygon><polygon fill="rgb(255,92,22)" stroke="rgb(255,92,22)" points="69.32452253997326,50.55866077542305 81.3323513045907,51.59985810518265 95.59209693223238,53.98015424609184"></polygon><polygon fill="rgb(102,24,0)" stroke="rgb(102,24,0)" points="30.553552508354187,26.124363243579865 57.666379511356354,69.39577504992485 52.27850928902626,61.65312051773071"></polygon><polygon fill="rgb(102,24,0)" stroke="rgb(102,24,0)" points="52.27850928902626,61.65312051773071 57.666379511356354,69.39577504992485 47.473930567502975,77.22752720117569"></polygon><polygon fill="rgb(255,92,22)" stroke="rgb(255,92,22)" points="43.00864830613136,89.57150999456644 47.473930567502975,77.22752720117569 57.666379511356354,69.39577504992485"></polygon><polygon fill="rgb(227,72,7)" stroke="rgb(227,72,7)" points="43.00864830613136,89.57150999456644 46.12394914031029,97.65030652284622 42.147657573223114,93.09097044169903"></polygon><polygon fill="rgb(255,92,22)" stroke="rgb(255,92,22)" points="95.59209693223238,53.98015424609184 115.482387393713,64.72621701657772 87.81603237614036,53.65075245499611"></polygon><polygon fill="rgb(255,92,22)" stroke="rgb(255,92,22)" points="69.32452253997326,50.55866077542305 95.59209693223238,53.98015424609184 87.81603237614036,53.65075245499611"></polygon><polygon fill="rgb(227,72,7)" stroke="rgb(227,72,7)" points="46.12394914031029,97.65030652284622 43.00864830613136,89.57150999456644 46.29219397902489,95.82327969372272"></polygon><polygon fill="rgb(102,24,0)" stroke="rgb(102,24,0)" points="52.96685755252838,105.03787770867348 46.12394914031029,97.65030652284622 46.29219397902489,95.82327969372272"></polygon><polygon fill="rgb(255,141,93)" stroke="rgb(255,141,93)" points="40.67836254835129,111.18303716182709 46.12394914031029,97.65030652284622 52.96685755252838,105.03787770867348"></polygon><polygon fill="rgb(255,92,22)" stroke="rgb(255,92,22)" points="57.666379511356354,69.39577504992485 30.553552508354187,26.124363243579865 69.32452253997326,50.55866077542305"></polygon><polygon fill="rgb(227,72,7)" stroke="rgb(227,72,7)" points="90.78756380826235,131.75619214773178 129.51026439666748,114.38901379704475 127.72663503885269,134.77034240961075"></polygon><polygon fill="rgb(255,141,93)" stroke="rgb(255,141,93)" points="57.666379511356354,69.39577504992485 69.32452253997326,50.55866077542305 87.81603237614036,53.65075245499611"></polygon><polygon fill="rgb(102,24,0)" stroke="rgb(102,24,0)" points="52.96685755252838,105.03787770867348 46.29219397902489,95.82327969372272 50.45012593269348,97.7084269374609"></polygon><polygon fill="rgb(227,72,7)" stroke="rgb(227,72,7)" points="46.29219397902489,95.82327969372272 43.00864830613136,89.57150999456644 50.45012593269348,97.7084269374609"></polygon><polygon fill="rgb(227,72,7)" stroke="rgb(227,72,7)" points="50.45012593269348,97.7084269374609 43.00864830613136,89.57150999456644 48.34293380379677,91.76637545228004"></polygon><polygon fill="rgb(255,92,22)" stroke="rgb(255,92,22)" points="43.00864830613136,89.57150999456644 57.666379511356354,69.39577504992485 48.34293380379677,91.76637545228004"></polygon><polygon fill="rgb(255,141,93)" stroke="rgb(255,141,93)" points="40.67836254835129,111.18303716182709 42.11315035820007,129.46734696626663 39.2708420753479,132.37137407064438"></polygon><polygon fill="rgb(255,141,93)" stroke="rgb(255,141,93)" points="42.11315035820007,129.46734696626663 40.67836254835129,111.18303716182709 52.96685755252838,105.03787770867348"></polygon><polygon fill="rgb(255,92,22)" stroke="rgb(255,92,22)" points="48.34293380379677,91.76637545228004 57.666379511356354,69.39577504992485 52.21846744418144,93.4119525179267"></polygon><polygon fill="rgb(227,72,7)" stroke="rgb(227,72,7)" points="50.45012593269348,97.7084269374609 48.34293380379677,91.76637545228004 52.21846744418144,93.4119525179267"></polygon><polygon fill="rgb(227,72,7)" stroke="rgb(227,72,7)" points="51.68507233262062,104.49545174837112 50.45012593269348,97.7084269374609 52.21846744418144,93.4119525179267"></polygon><polygon fill="rgb(255,141,93)" stroke="rgb(255,141,93)" points="52.21846744418144,93.4119525179267 57.666379511356354,69.39577504992485 78.96599978208542,73.09236742556095"></polygon><polygon fill="rgb(255,141,93)" stroke="rgb(255,141,93)" points="57.666379511356354,69.39577504992485 87.81603237614036,53.65075245499611 78.96599978208542,73.09236742556095"></polygon><polygon fill="rgb(227,72,7)" stroke="rgb(227,72,7)" points="129.51026439666748,114.38901379704475 90.78756380826235,131.75619214773178 82.27826146408916,118.97292569279671"></polygon><polygon fill="rgb(255,141,93)" stroke="rgb(255,141,93)" points="98.87716442346573,103.39491300284863 124.16958764195442,86.30079567898065 129.51026439666748,114.38901379704475"></polygon><polygon fill="rgb(255,92,22)" stroke="rgb(255,92,22)" points="82.27826146408916,118.97292569279671 90.78756380826235,131.75619214773178 53.22552487254143,135.07624119520187"></polygon><polygon fill="rgb(231,235,246)" stroke="rgb(231,235,246)" points="53.22552487254143,135.07624119520187 90.78756380826235,131.75619214773178 57.93026015162468,147.38247871398926"></polygon><polygon fill="rgb(255,141,93)" stroke="rgb(255,141,93)" points="98.87716442346573,103.39491300284863 129.51026439666748,114.38901379704475 82.27826146408916,118.97292569279671"></polygon><polygon fill="rgb(102,24,0)" stroke="rgb(102,24,0)" points="124.16958764195442,86.30079567898065 103.03650610148907,87.03361097723246 107.84077450633049,71.18059247732162"></polygon><polygon fill="rgb(102,24,0)" stroke="rgb(102,24,0)" points="107.84077450633049,71.18059247732162 103.03650610148907,87.03361097723246 78.96599978208542,73.09236742556095"></polygon><polygon fill="rgb(255,141,93)" stroke="rgb(255,141,93)" points="124.16958764195442,86.30079567898065 98.87716442346573,103.39491300284863 103.03650610148907,87.03361097723246"></polygon><polygon fill="rgb(255,92,22)" stroke="rgb(255,92,22)" points="78.96599978208542,73.09236742556095 87.81603237614036,53.65075245499611 113.73826831579208,39.57533240318298"></polygon><polygon fill="rgb(255,141,93)" stroke="rgb(255,141,93)" points="65.08613243699074,106.96910127997398 51.68507233262062,104.49545174837112 52.21846744418144,93.4119525179267"></polygon><polygon fill="rgb(255,141,93)" stroke="rgb(255,141,93)" points="65.08613243699074,106.96910127997398 52.21846744418144,93.4119525179267 67.99989335238934,96.27111226320267"></polygon><polygon fill="rgb(255,141,93)" stroke="rgb(255,141,93)" points="52.21846744418144,93.4119525179267 78.96599978208542,73.09236742556095 67.99989335238934,96.27111226320267"></polygon><polygon fill="rgb(102,24,0)" stroke="rgb(102,24,0)" points="107.84077450633049,71.18059247732162 125.79298719763756,67.20721408724785 124.16958764195442,86.30079567898065"></polygon><polygon fill="rgb(192,196,205)" stroke="rgb(192,196,205)" points="47.09027022123337,145.2436950802803 40.32154142856598,138.93008053302765 51.181609481573105,141.0562640428543"></polygon><polygon fill="rgb(192,196,205)" stroke="rgb(192,196,205)" points="47.09027022123337,145.2436950802803 51.181609481573105,141.0562640428543 57.93026015162468,147.38247871398926"></polygon><polygon fill="rgb(255,92,22)" stroke="rgb(255,92,22)" points="84.54285001382232,97.06874646246433 78.96599978208542,73.09236742556095 103.03650610148907,87.03361097723246"></polygon><polygon fill="rgb(255,92,22)" stroke="rgb(255,92,22)" points="84.54285001382232,97.06874646246433 103.03650610148907,87.03361097723246 98.87716442346573,103.39491300284863"></polygon><polygon fill="rgb(255,141,93)" stroke="rgb(255,141,93)" points="50.214353650808334,131.02904796600342 42.11315035820007,129.46734696626663 51.68507233262062,104.49545174837112"></polygon><polygon fill="rgb(255,141,93)" stroke="rgb(255,141,93)" points="50.214353650808334,131.02904796600342 51.68507233262062,104.49545174837112 65.08613243699074,106.96910127997398"></polygon><polygon fill="rgb(102,24,0)" stroke="rgb(102,24,0)" points="72.20005877315998,108.58985617756844 74.01125691831112,102.01028123497963 81.94140067324042,102.31992915272713"></polygon><polygon fill="rgb(102,24,0)" stroke="rgb(102,24,0)" points="72.20005877315998,108.58985617756844 81.94140067324042,102.31992915272713 88.47908919677138,105.39310038089752"></polygon><polygon fill="rgb(227,72,7)" stroke="rgb(227,72,7)" points="65.08613243699074,106.96910127997398 74.01125691831112,102.01028123497963 72.20005877315998,108.58985617756844"></polygon><polygon fill="rgb(102,24,0)" stroke="rgb(102,24,0)" points="113.73826831579208,39.57533240318298 107.84077450633049,71.18059247732162 78.96599978208542,73.09236742556095"></polygon><polygon fill="rgb(102,24,0)" stroke="rgb(102,24,0)" points="107.84077450633049,71.18059247732162 113.73826831579208,39.57533240318298 125.79298719763756,67.20721408724785"></polygon><polygon fill="rgb(255,141,93)" stroke="rgb(255,141,93)" points="88.47908919677138,105.39310038089752 82.27826146408916,118.97292569279671 72.20005877315998,108.58985617756844"></polygon><polygon fill="rgb(255,141,93)" stroke="rgb(255,141,93)" points="98.87716442346573,103.39491300284863 82.27826146408916,118.97292569279671 88.47908919677138,105.39310038089752"></polygon><polygon fill="rgb(255,92,22)" stroke="rgb(255,92,22)" points="78.96599978208542,73.09236742556095 75.02688225358725,96.59307658672333 67.99989335238934,96.27111226320267"></polygon><polygon fill="rgb(227,72,7)" stroke="rgb(227,72,7)" points="84.54285001382232,97.06874646246433 88.47908919677138,105.39310038089752 81.94140067324042,102.31992915272713"></polygon><polygon fill="rgb(227,72,7)" stroke="rgb(227,72,7)" points="88.47908919677138,105.39310038089752 84.54285001382232,97.06874646246433 98.87716442346573,103.39491300284863"></polygon><polygon fill="rgb(255,92,22)" stroke="rgb(255,92,22)" points="84.54285001382232,97.06874646246433 75.02688225358725,96.59307658672333 78.96599978208542,73.09236742556095"></polygon><polygon fill="rgb(227,72,7)" stroke="rgb(227,72,7)" points="50.214353650808334,131.02904796600342 65.08613243699074,106.96910127997398 72.20005877315998,108.58985617756844"></polygon><polygon fill="rgb(255,141,93)" stroke="rgb(255,141,93)" points="50.214353650808334,131.02904796600342 72.20005877315998,108.58985617756844 82.27826146408916,118.97292569279671"></polygon><polygon fill="rgb(227,72,7)" stroke="rgb(227,72,7)" points="74.01125691831112,102.01028123497963 65.08613243699074,106.96910127997398 67.99989335238934,96.27111226320267"></polygon><polygon fill="rgb(227,72,7)" stroke="rgb(227,72,7)" points="74.01125691831112,102.01028123497963 67.99989335238934,96.27111226320267 75.02688225358725,96.59307658672333"></polygon><polygon fill="rgb(227,72,7)" stroke="rgb(227,72,7)" points="74.01125691831112,102.01028123497963 75.02688225358725,96.59307658672333 84.54285001382232,97.06874646246433"></polygon><polygon fill="rgb(227,72,7)" stroke="rgb(227,72,7)" points="84.54285001382232,97.06874646246433 81.94140067324042,102.31992915272713 74.01125691831112,102.01028123497963"></polygon><polygon fill="rgb(231,235,246)" stroke="rgb(231,235,246)" points="53.22552487254143,135.07624119520187 57.93026015162468,147.38247871398926 51.181609481573105,141.0562640428543"></polygon><polygon fill="rgb(255,141,93)" stroke="rgb(255,141,93)" points="82.27826146408916,118.97292569279671 53.22552487254143,135.07624119520187 50.214353650808334,131.02904796600342"></polygon><polygon fill="rgb(102,24,0)" stroke="rgb(102,24,0)" points="39.2708420753479,132.37137407064438 42.11315035820007,129.46734696626663 41.334911584854126,132.63032764196396"></polygon><polygon fill="rgb(102,24,0)" stroke="rgb(102,24,0)" points="41.334911584854126,132.63032764196396 39.1741144657135,135.53515523672104 39.2708420753479,132.37137407064438"></polygon><polygon fill="rgb(102,24,0)" stroke="rgb(102,24,0)" points="40.32154142856598,138.93008053302765 39.1741144657135,135.53515523672104 48.563073724508286,137.364199757576"></polygon><polygon fill="rgb(102,24,0)" stroke="rgb(102,24,0)" points="40.32154142856598,138.93008053302765 48.563073724508286,137.364199757576 51.181609481573105,141.0562640428543"></polygon><polygon fill="rgb(102,24,0)" stroke="rgb(102,24,0)" points="41.334911584854126,132.63032764196396 42.11315035820007,129.46734696626663 50.214353650808334,131.02904796600342"></polygon><polygon fill="rgb(102,24,0)" stroke="rgb(102,24,0)" points="39.1741144657135,135.53515523672104 41.334911584854126,132.63032764196396 46.242148131132126,133.58130007982254"></polygon><polygon fill="rgb(102,24,0)" stroke="rgb(102,24,0)" points="39.1741144657135,135.53515523672104 46.242148131132126,133.58130007982254 48.563073724508286,137.364199757576"></polygon><polygon fill="rgb(102,24,0)" stroke="rgb(102,24,0)" points="53.22552487254143,135.07624119520187 51.181609481573105,141.0562640428543 48.563073724508286,137.364199757576"></polygon><polygon fill="rgb(102,24,0)" stroke="rgb(102,24,0)" points="41.334911584854126,132.63032764196396 50.214353650808334,131.02904796600342 46.242148131132126,133.58130007982254"></polygon><polygon fill="rgb(102,24,0)" stroke="rgb(102,24,0)" points="53.22552487254143,135.07624119520187 46.242148131132126,133.58130007982254 50.214353650808334,131.02904796600342"></polygon><polygon fill="rgb(102,24,0)" stroke="rgb(102,24,0)" points="46.242148131132126,133.58130007982254 53.22552487254143,135.07624119520187 48.563073724508286,137.364199757576"></polygon></svg>
      <div className="charts">
      <div className="cardsborder1">
        <h4>SQL QUERYTHON BRANCH WISE PERFORMANCE</h4>
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
        </div>
      <div className="cardsborder2">
        <div id="combo-chart">
          <ReactApexChart options={state.options} series={state.series} type="line" height={550} />
        </div>
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

// import 'package:flutter/material.dart';

// void main() => runApp(const ExploreWidgetsApp());

// class ExploreWidgetsApp extends StatelessWidget {
//   const ExploreWidgetsApp({Key? key}) : super(key: key);

//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       // debugShowCheckedModeBanner: false, // removes debug banner
//       home: Scaffold(
//         appBar: AppBar(
//           title: const Text("Explore Flutter Widgets"),
//           backgroundColor: Colors.purple,
//         ),
//         backgroundColor: const Color.fromARGB(255, 230, 222, 250),

//         body: Center(
//           child: Column(
//             mainAxisAlignment: MainAxisAlignment.center,
//             children: [

//               //  Text Widget
//               const Text(
//                 "Welcome to Flutter!",
//                 style: TextStyle(
//                   fontSize: 28,
//                   fontWeight: FontWeight.bold,
//                   color: Colors.deepPurple,
//                 ),
//               ),

//               const SizedBox(height: 20), // adds space between widgets

//               //  Image Widget
//               Image.network(
//                 'https://flutter.github.io/assets-for-api-docs/assets/widgets/owl.jpg',
//                 height: 150,
//                 width: 150,
//               ),

//               const SizedBox(height: 20),

//               // Container Widget
//               Container(
//                 height: 100,
//                 width: 250,
//                 alignment: Alignment.center,
//                 decoration: BoxDecoration(
//                   color: Colors.purpleAccent,
//                   borderRadius: BorderRadius.circular(15),
//                   border: Border.all(color: Colors.deepPurple, width: 3),
//                 ),
//                 child: const Text(
//                   "This is a Container Widget",
//                   style: TextStyle(
//                     fontSize: 20,
//                     color: Colors.white,
//                     fontWeight: FontWeight.w600,
//                   ),
//                   textAlign: TextAlign.center,
//                 ),
//               ),
//             ],
//           ),
//         ),
//       ),
//     );
//   }
// }


// import 'package:flutter/material.dart';

// void main() => runApp(const MyApp());

// class MyApp extends StatelessWidget {
//   const MyApp({super.key});

//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       title: 'Navigation Demo',
//       debugShowCheckedModeBanner: false,
//       theme: ThemeData(primarySwatch: Colors.indigo),
//       home: const HomeScreen(),
//     );
//   }
// }

// class HomeScreen extends StatelessWidget {
//   const HomeScreen({super.key});

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(title: const Text('Home Screen')),
//       body: Center(
//         child: ElevatedButton(
//           onPressed: () {
//             // Go to Second Screen
//             Navigator.push(
//               context,
//               MaterialPageRoute(builder: (context) => const SecondScreen()),
//             );
//           },
//           child: const Text('Go to Second Screen'),
//         ),
//       ),
//     );
//   }
// }

// class SecondScreen extends StatelessWidget {
//   const SecondScreen({super.key});

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(title: const Text('Second Screen')),
//       body: Center(
//         child: ElevatedButton(
//           onPressed: () {
//             // Go back to Home Screen
//             Navigator.pop(context);
//           },
//           child: const Text('Go Back'),
//         ),
//       ),
//     );
//   }
// }
// 4.a)


// import 'package:flutter/material.dart';

// void main() => runApp(const NamedRoutesApp());

// class NamedRoutesApp extends StatelessWidget {
//   const NamedRoutesApp({super.key});

//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       debugShowCheckedModeBanner: false,
//       title: 'Named Routes Demo',
//       theme: ThemeData(primarySwatch: Colors.blue),
//       // Define routes
//       initialRoute: '/',
//       routes: {
//         '/': (context) => const HomeScreen(),
//         '/second': (context) => const SecondScreen(),
//       },
//     );
//   }
// }

// // ------------------- Home Screen -------------------
// class HomeScreen extends StatelessWidget {
//   const HomeScreen({super.key});

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(
//         title: const Text("Home Screen"),
//         backgroundColor: Colors.indigo,
//       ),
//       body: Center(
//         child: ElevatedButton(
//           onPressed: () {
//             // Navigate using named route
//             Navigator.pushNamed(context, '/second');
//           },
//           child: const Text("Go to Second Screen"),
//         ),
//       ),
//     );
//   }
// }

// // ------------------- Second Screen -------------------
// class SecondScreen extends StatelessWidget {
//   const SecondScreen({super.key});

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(
//         title: const Text("Second Screen"),
//         backgroundColor: Colors.pink,
//       ),
//       body: Center(
//         child: ElevatedButton(
//           onPressed: () {
//             // Go back to previous screen
//             Navigator.pop(context);
//           },
//           child: const Text("Go Back"),
//         ),
//       ),
//     );
//   }
// }
// 4.b)