import axios from "axios";
import { useEffect, useState } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    //Normal fetch
    // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    //   .then((res) => res.json())
    //   .then((data) => setPhones(data.data));

    //With Axios - axios e json e convert kora lagena direct data die de
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        setPhones(data.data.data);
        const phoneData = data.data.data;
        const phonesWithFakeData = phoneData.map(phone =>{
            const obj = {
                name : phone.phone_name,
                price: parseInt(phone.slug.split('-')[1])
            }
            return obj;
        })
        console.log(phonesWithFakeData)
        setPhones(phonesWithFakeData)
      });
  }, []);
  return (
    <div>
      <h2 className="text-5xl">Phones : {phones.length}</h2>
      <BarChart width={800} height={400} data ={phones}>
        <XAxis dataKey = 'name'></XAxis>
        <YAxis></YAxis>
        <Tooltip> </Tooltip>
        <Bar dataKey='price' fill="#8884d8"></Bar>
      </BarChart>
    </div>
  );
};

export default Phones;
