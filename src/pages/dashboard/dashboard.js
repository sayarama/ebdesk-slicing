import React from 'react'
import "./dashboard.css"
import { BsHouseDoor } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Line, Bar, Doughnut, Radar } from 'react-chartjs-2';
import 'chart.js/auto';

function dashboard() {
  const chartData = {
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
    datasets: [
      {
        label: 'My Chart',
        data: [0, 10, 6, 10, 14, 0],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.4,
      },
    ],
  };
  
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Bar Chart
const barData = {
  labels:['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(33, 97, 213, 1)',
      'rgba(33, 97, 213, 1)',
      'rgba(33, 97, 213, 1)',
      'rgba(33, 97, 213, 1)',
      'rgba(33, 97, 213, 1)',
      'rgba(33, 97, 213, 1)',
      'rgba(33, 97, 213, 1)'
    ],
    barThickness: 50
  }]
};

const chartView = {
  type: 'bar',
  data: [10, 25, 18, 23, 20],
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
};
// doughnut 
const doughnutData = {
  labels: ['Dusun 1', 'Dusun 2', 'Dusun 3', 'Dusun 4'],
  datasets: [
    {
      data: [25, 30, 15, 10],
      backgroundColor: ['rgba(151, 172, 209, 1)', 'rgba(137, 139, 231, 1)', 'rgba(137, 175, 231, 1)', 'rgba(33, 97, 213, 1)'],
    },
  ],
};
// Radar
const radarData = {
  labels: [
    'Dusun1',
    'Dusun2',
    'Dusun3',
    'Dusun4',
    'Dusun5',
    'Dusun6',
    'Dusun7'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 90, 81, 56, 55, 40],
    fill: true,
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgb(54, 162, 235)',
    pointBackgroundColor: 'rgb(54, 162, 235)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(54, 162, 235)'
  }, {
    label: 'My Second Dataset',
    data: [28, 48, 40, 19, 96, 27, 100],
    fill: true,
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgb(54, 162, 235)',
    pointBackgroundColor: 'rgb(54, 162, 235)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(54, 162, 235)'
  }]
};

const radarConfig = {
  type: 'radar',
  data: radarData,
  options: {
    elements: {
      line: {
        borderWidth: 3
      }
    }
  },
};


  return (
    <main className='main-top-dashboard'>
      <section className='top-dashboard'>
        <BsHouseDoor/>
        <MdKeyboardArrowRight/>
        <p>Statistic</p>
        <MdKeyboardArrowRight/>
        <p>wilayah</p>
      </section>
      <article className='main-dashboard-box'>
        {/* topbox */}
      <section className='box-top'>
        <div className='box'>
          <h2>Jumlah Penduduk</h2>
        <Line data={chartData} options={chartOptions} />
        </div>
        <div className='box'>
        <h2>Prasarana Air Bersih</h2>
        <Bar data={barData} options={chartView} />
        </div>
      </section>
      {/* midbox */}
      <section className='box-middle'>
        <div className='box'>
        <h2>Jumlah Penduduk Tiap Dusun</h2>
        <Doughnut data={doughnutData}/>
        </div>
        <div className='box'>
        <h2>Jumlah Penduduk Tiap Dusun</h2>
          <Radar data={radarData} options={radarConfig}/>
        </div>
        <div className='box'><h2>Jumlah KK Tiap Dusun</h2>
        <Doughnut data={doughnutData}/>
        </div>
      </section>
      {/* bottom box */}
      <section className='box-bottom'>
        <div className='box'>
        <h2>Jumlah Penduduk Prasarana Umum</h2>
        <Doughnut data={doughnutData}/>
        </div>
        <div className='box'>
        <h2>Jumlah Penduduk Tiap Gender</h2>
        <Bar data={barData} options={chartView} />
        </div>
      </section>
      </article>
    </main>
  )
}

export default dashboard