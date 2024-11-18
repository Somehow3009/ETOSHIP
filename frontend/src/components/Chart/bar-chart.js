import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = (props) => {

  const chartData = props.chartData;

  const data = {
    labels: chartData.map(item => item.month),
    datasets: [
      {
        label: 'Doanh thu (triệu đồng)',
        data: chartData.map(item => item.value),
        borderColor: [
          'rgba(0, 0, 0, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
        y: {
            ticks: {
                stepSize: 6,
            },
        },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Biểu đồ Doanh thu theo Tháng',
      },
    }
  };

  return <Bar data={data} options={options}/>;
};

export default BarChart;
