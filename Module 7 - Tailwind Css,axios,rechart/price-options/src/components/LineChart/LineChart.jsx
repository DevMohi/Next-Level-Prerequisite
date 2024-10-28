import { LineChart as LC, Line , XAxis, YAxis } from "recharts";
const LineChart = () => {
  const studentData = [
    { name: "Alice", student: 1, math: 78, physics: 82, chemistry: 74 },
    { name: "Bob", student: 2, math: 85, physics: 79, chemistry: 88 },
    { name: "Charlie", student: 3, math: 62, physics: 79, chemistry: 69 },
    { name: "David", student: 4, math: 90, physics: 94, chemistry: 91 },
    { name: "Eve", student: 5, math: 74, physics: 77, chemistry: 72 },
    { name: "Frank", student: 6, math: 88, physics: 85, chemistry: 86 },
    { name: "Grace", student: 7, math: 79, physics: 83, chemistry: 80 },
    { name: "Hannah", student: 8, math: 91, physics: 89, chemistry: 93 },
    { name: "Ian", student: 9, math: 67, physics: 74, chemistry: 70 },
    { name: "Jack", student: 10, math: 83, physics: 80, chemistry: 78 },
  ];

  return (
    <div>
      <LC width={800} height={400} data={studentData}>
        <XAxis dataKey='name'></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math" stroke="red"></Line>
        <Line dataKey={"physics"} stroke="yellow"></Line> 
      </LC>
    </div>
  );
};

export default LineChart;
