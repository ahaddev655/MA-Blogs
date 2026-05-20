import { MailOpen, NotebookPen, ThumbsUp, Zap } from "lucide-react";
import GridCardItem from "../../components/user/GridCardItem";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { motion } from "framer-motion";

function OverviewPage() {
  const [chartState, setChartState] = useState({
    series: [1320, 180],

    options: {
      chart: {
        type: "donut",
        background: "transparent",
        fontFamily: "inherit",
      },
      colors: ["#a97e60", "#c9b59c", "#d9cfc7", "#efe9e3"],

      stroke: {
        show: true,
        colors: ["#ffffff"],
        width: 2,
      },
      labels: ["Active Blogs", "Drafts"],
      plotOptions: {
        pie: {
          donut: {
            size: "75%",
            labels: {
              show: true,
              total: {
                show: true,
                label: "Total Blogs",
                fontSize: "12px",
                fontWeight: 600,
                color: "#a3a3a3",
                formatter: function (w) {
                  return w.globals.seriesTotals
                    .reduce((a, b) => a + b, 0)
                    .toLocaleString();
                },
              },
              value: {
                show: true,
                fontSize: "24px",
                fontWeight: 700,
                color: "#262626",
                offsetY: 4,
              },
            },
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "solid",
      },
      legend: {
        show: true,
        position: "bottom",
        fontSize: "13px",
        fontWeight: 500,
        labels: {
          colors: "#525252",
        },
        markers: {
          width: 10,
          height: 10,
          radius: 12,
          offsetX: -4,
        },
        itemMargin: {
          horizontal: 12,
          vertical: 4,
        },
      },
      states: {
        hover: {
          filter: {
            type: "darken",
            value: 0.92,
          },
        },
      },
      tooltip: {
        enabled: true,
        theme: "light",
        style: {
          fontSize: "12px",
        },
      },
    },
  });
  const gridLinks = [
    {
      heading: "Total Blogs",
      content: "1500",
      Icon: NotebookPen,
    },
    {
      heading: "Active Blogs",
      content: "1500",
      Icon: Zap,
    },
    {
      heading: "Drafted Blogs",
      content: "1500",
      Icon: MailOpen,
    },
    {
      heading: "Total Likes",
      content: "15K",
      Icon: ThumbsUp,
    },
  ];
  return (
    <div className="space-y-8">
      {/* Grid Cards */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {gridLinks.map((item, i) => (
          <GridCardItem
            heading={item.heading}
            content={item.content}
            Icon={item.Icon}
            index={i}
          />
        ))}
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 1.5 }}
          className="bg-white/40 backdrop-blur-md border border-muted-beige/40 p-5 rounded-2xl shadow-sm w-full lg:col-span-2"
        >
          <h3 className="text-sm font-bold tracking-wider text-neutral-400 uppercase self-start mb-6">
            Blog Distribution
          </h3>

          <div className="w-full grid place-items-center">
            <ReactApexChart
              options={chartState.options}
              series={chartState.series}
              type="donut"
              width="100%"
            />
          </div>
        </motion.div>
        {/* Recent Activities */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 1.5 }}
          className="bg-white/40 backdrop-blur-md border border-muted-beige/40 p-6 rounded-2xl shadow-sm max-h-83.75 h-full"
        >
          <div className="flex items-center justify-between">
            <h1 className="text-neutral-700 font-semibold text-lg">
              Recent Activities
            </h1>
            <button
              type="button"
              className="text-sm font-medium text-text-secondary/60 hover:text-text-secondary transition-colors duration-200 ease-in-out"
            >
              Clear All
            </button>
          </div>
          <ul className="mt-3 overflow-auto h-58.75 space-y-1">
            {Array(20)
              .fill()
              .map((_, i) => (
                <li
                  className="p-3 hover:bg-light-beige/20 transition-colors duration-200 ease-in-out rounded-lg text-sm font-medium text-neutral-700"
                  key={i}
                >
                  Your Blog has been posted and is activated
                </li>
              ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default OverviewPage;
