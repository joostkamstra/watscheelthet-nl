'use client';

import { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { HistoryPoint } from '@/types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface HistoryChartProps {
  history: HistoryPoint[];
}

export default function HistoryChart({ history }: HistoryChartProps) {
  const chartRef = useRef<ChartJS<'line'>>(null);

  const labels = history.map(point => {
    const date = new Date(point.timestamp);
    return date.toLocaleString('nl-NL', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  });

  // Calculate signed difference: positive = D66 leads, negative = PVV leads
  const signedDifferences = history.map(point => point.d66 - point.pvv);

  const data = {
    labels,
    datasets: [
      {
        label: 'Voorsprong',
        data: signedDifferences,
        borderColor: 'rgb(99, 102, 241)',
        backgroundColor: (context: any) => {
          const value = context.parsed?.y;
          if (value > 0) {
            return 'rgba(0, 166, 81, 0.1)'; // D66 groen
          } else {
            return 'rgba(10, 45, 92, 0.1)'; // PVV blauw
          }
        },
        borderWidth: 3,
        pointBackgroundColor: (context: any) => {
          const value = context.parsed?.y;
          return value > 0 ? 'rgb(0, 166, 81)' : 'rgb(10, 45, 92)';
        },
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.4,
        fill: true,
        segment: {
          borderColor: (context: any) => {
            const value = context.p1.parsed.y;
            return value > 0 ? 'rgb(0, 166, 81)' : 'rgb(10, 45, 92)';
          }
        }
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleFont: {
          size: 14,
        },
        bodyFont: {
          size: 13,
        },
        callbacks: {
          label: function(context: any) {
            const value = context.parsed.y;
            const absValue = Math.abs(value);
            if (value > 0) {
              return `D66 voorsprong: ${absValue.toLocaleString('nl-NL')} stemmen`;
            } else if (value < 0) {
              return `PVV voorsprong: ${absValue.toLocaleString('nl-NL')} stemmen`;
            } else {
              return 'Gelijk aantal stemmen';
            }
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value: any) {
            const num = Number(value);
            if (num === 0) return '0 (Gelijk)';
            return value.toLocaleString('nl-NL');
          },
          font: {
            size: 12,
          }
        },
        grid: {
          color: (context: any) => {
            return context.tick.value === 0 ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.05)';
          },
          lineWidth: (context: any) => {
            return context.tick.value === 0 ? 2 : 1;
          }
        },
        title: {
          display: true,
          text: 'D66 voorsprong ↑  |  PVV voorsprong ↓',
          font: {
            size: 11
          },
          color: '#64748b'
        }
      },
      x: {
        ticks: {
          font: {
            size: 11,
          },
          maxRotation: 45,
          minRotation: 45
        },
        grid: {
          display: false,
        }
      }
    }
  };

  return (
    <div className="w-full">
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
}
