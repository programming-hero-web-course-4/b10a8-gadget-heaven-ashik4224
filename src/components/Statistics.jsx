
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line,} from "recharts";

const data = [
  { name: "Dell XPS 13", Price: 80, Total: 100, Rating: 90 },
  { name: "Dell XPS 13", Price: 60, Total: 90, Rating: 70 },
  { name: "Dell XPS 13", Price: 70, Total: 80, Rating: 85 },
  { name: "Dell XPS 13", Price: 90, Total: 100, Rating: 95 },
  { name: "Dell XPS 13", Price: 80, Total: 90, Rating: 88 },
];

const Statistics = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px", backgroundColor: "#f3f3f3" }}>
      {/* Header Section */}
      <div style={{ backgroundColor: "#8A2BE2", padding: "20px", color: "#fff" }}>
        <h1 className="text-xl font-bold">Statistics</h1>
        <p>
          Explore the latest gadgets that will take your experience to the next level. From
          smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      {/* Chart Section */}
      <div style={{ marginTop: "20px" }}>
        <h2  className="text-xl font-bold flex justify-start ml-14">Statistics</h2>
        <BarChart
          width={800}
          height={400}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Price" fill="#8A2BE2" />
          <Bar dataKey="Total" fill="#A569BD" />
          <Bar dataKey="Rating" fill='#F5070B'/>
          <Line dataKey="Rating" type="monotone" stroke="#F5070B" />
        </BarChart>
      </div>
    </div>
  );
};

export default Statistics;
