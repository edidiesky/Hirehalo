"use client"
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
const Charts = () => {
    const [options, setOptions] = useState({
        chart: {
            height: 350,
            type: "bar",
            fontFamily: "Karla",
            foreColor: "#333",
            fontSize: "30px",
            textTransform: "capitalize",
            zoom: {
                enabled: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        colors: ["#2E0266", "var(--primary)"],
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            // categories: totalMonth,
            categories: [
              "Jan",
              "Febr",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "sept",
            ],
        },
    });
    const [series, setSeries] = useState([
        {
            name: "Revenue",
            data: [120,30,20,10,30,30,40,40,20,35],
        },
    ]);
    return <div className='px-6 py-8 border rounded-lg flex flex-col w-full gap-6'>
        <h3 className="text-lg block lg:text-xl text-dark family2 font-semibold">
            Job Created
        </h3>
        <div className="w-full">
            <Chart
                options={options}
                series={series}
                type="bar"
                width={"100%"}
                height={"250px"}
            />
        </div>
    </div>;
}

export default Charts;