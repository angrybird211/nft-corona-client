import React, { useEffect, useRef, useState } from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutDemo = () => {
    const [legend, setLegend] = useState([]);
    const doughnut = useRef(null);

    const values = {
        "Cache": 425,
        "Stripe": 236,
        "Paypal": 593
    }

    const data = {
        labels: ["Paypal", "Stripe", "Cache"],
        datasets: [
            {
                label: "Transaction History",
                fill: true,
                lineTension: 0.1,
                backgroundColor: [
                    '#111',
                    '#00d25b',
                    '#ffab00'
                ],
                borderColor: "transparent",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 3,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 13,
                pointRadius: 1,
                pointHitRadius: 3,
                borderWidth: 3,
                data: [593, 425, 236]
            }
        ]
    };

    useEffect(() => {
        setLegend(doughnut.current.chartInstance.legend.legendItems);
    }, [])

    return (
        <div>
            <Doughnut
                ref={doughnut}
                data={data}
                options={{
                    legend: {
                        display: false
                    }
                }}
            />
            {legend.length &&
                legend.map(item => {
                    return (
                        item.text !== 'Cache' ?
                            <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3" key={`payment-${item.text}`}>
                                <div className="text-md-center text-xl-left">
                                    <h6 className="mb-1">Transfer to {item.text}</h6>
                                    <p className="text-muted mb-0">07 Jan 2019, 09:12AM</p>
                                </div>
                                <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                                    <h6 className="font-weight-bold mb-0">${values[item.text]}</h6>
                                </div>
                            </div>
                            : ""
                    );
                })}
        </div>
    );
}

export default DoughnutDemo;