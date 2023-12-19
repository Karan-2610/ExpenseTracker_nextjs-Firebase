"use client";

import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "@/app/firebase";
import { useImmer } from "use-immer";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Analytics Chart",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];


let mydata = [];

function Analytics() {
  

  let [totalPrice,setTPrice] = useState(0);
  let [avgPrice,setAvgPrice] = useState(0);
  let [minPrice,setMinPrice] = useState(0);
  let [maxPrice,setMaxPrice] = useState(0);

  const [data, setData] = useImmer({
    labels,
    datasets : [
      {
        labels : "Datasets 1",
        data:[0,0,0,0,0,0,0,0,0,0,0,0],
        backgroundColor: 'white'
      }
    ]
  })

  useEffect(() => {
    getExpenses();
  },[]);

  let collectionRef2 = collection(firestore, "expenses");

  async function getExpenses() {
    let querySnapshot = await getDocs(collectionRef2);
    querySnapshot.forEach((expenses) => {
      mydata.push({ id: expenses.id, ...expenses.data() });
    });
    monthwise(mydata, querySnapshot.docs.length);
  }

  function monthwise(mydata,l) {
    let a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let sum = 0 

    setMinPrice(Math.min(...mydata.map(function(doc){return doc.Price})))
    setMaxPrice(Math.max(...mydata.map(function(doc){return doc.Price })))
    mydata.map((doc) => {

      sum = sum + Number(doc.Price)

      if (doc.date.startsWith("Jan")) {
        console.log(doc.date);
        a[0] = a[0] + Number(doc.Price);
       
      }

      if (doc.date.startsWith("Feb")) {
        console.log(doc.date);
        a[1] = a[1] + Number(doc.Price);
      }

      if (doc.date.startsWith("Mar")) {
        console.log(doc.date);
        a[2] = a[2] + Number(doc.Price);
      }

      if (doc.date.startsWith("Apr")) {
        console.log(doc.date);
        a[3] = a[3] + Number(doc.Price);
      }

      if (doc.date.startsWith("May")) {
        console.log(doc.date);
        a[4] = a[4] + Number(doc.Price);
      }

      if (doc.date.startsWith("Jun")) {
        console.log(doc.date);
        a[5] = a[5] + Number(doc.Price);
      }

      if (doc.date.startsWith("July")) {
        console.log(doc.date);
        a[6] = a[6] + Number(doc.Price);
      }

      if (doc.date.startsWith("Aug")) {
        console.log(doc.date);
        a[7] = a[7] + Number(doc.Price);
      }

      if (doc.date.startsWith("Sep")) {
        console.log(doc.date);
        a[8] = a[8] + Number(doc.Price);
      }

      if (doc.date.startsWith("Oct")) {
        console.log(doc.date);
        a[9] = a[9] + Number(doc.Price);
        console.log(a[9])
       
      }

      if (doc.date.startsWith("Nov")) {
        console.log(doc.date);
        a[10] = a[10] + Number(doc.Price);
        console.log(a[10])
      }

      if (doc.date.startsWith("Dec")) {
        console.log(doc.date);
        a[11] = a[11] + Number(doc.Price);
      }
    });
    setTPrice(sum);
    setAvgPrice(sum/l)
    setData(draft => {
      console.log(draft);
      draft.datasets[0].data = a
    })
  }

  return (
    <>
      <section className="analytics">
        <div className="container mt-5">
          <h1>Monthly Expenses</h1>
          <div className="row justify-content-center mt-4 border-2 border-primary rounded-4">
            <div className="col-md-12 border border-5 p-5 rounded-4 d-flex justify-content-center">
              <Bar redraw={true} options={options} data={data && data } />
            </div>
          </div>
          <h1 className="my-5">Summary Statistics</h1>
          <div className="row">
            <div className="col-md-6">
              <h5 style={{ color: "white" }}>Total</h5>
              <h1>${totalPrice}</h1>
            </div>
            <div className="col-md-6">
              <h5 style={{ color: "white" }}>Average</h5>
              <h1>${avgPrice}</h1>
            </div>
            <div className="col-md-6 mt-4">
              <h5 style={{ color: "white" }}>Min.Amount</h5>
              <h1>${minPrice}</h1>
            </div>
            <div className="col-md-6 mt-4">
              <h5 style={{ color: "white" }}>Max.Amount</h5>
              <h1>${maxPrice}</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Analytics;
