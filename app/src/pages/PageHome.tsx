import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  Treemap,
  XAxis,
  YAxis,
} from "recharts";

import { Card, Grid, Typography } from "@mui/joy";

import { useTheme } from "../hooks/useTheme";

const lineData = [
  { name: "Jan", value: 400, value2: 240 },
  { name: "Feb", value: 300, value2: 139 },
  { name: "Mar", value: 600, value2: 980 },
  { name: "Apr", value: 800, value2: 390 },
  { name: "May", value: 700, value2: 480 },
  { name: "Jun", value: 900, value2: 380 },
];

const barData = [
  { name: "A", value: 120, value2: 110 },
  { name: "B", value: 200, value2: 130 },
  { name: "C", value: 150, value2: 180 },
  { name: "D", value: 80, value2: 160 },
  { name: "E", value: 250, value2: 190 },
];

const pieData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const radarData = [
  { subject: "Math", A: 120, B: 110, fullMark: 150 },
  { subject: "Chinese", A: 98, B: 130, fullMark: 150 },
  { subject: "English", A: 86, B: 130, fullMark: 150 },
  { subject: "Geography", A: 99, B: 100, fullMark: 150 },
  { subject: "Physics", A: 85, B: 90, fullMark: 150 },
  { subject: "History", A: 65, B: 85, fullMark: 150 },
];

const scatterData = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

const radialData = [
  { name: "18-24", uv: 31.47, pv: 2400, fill: "#8884d8" },
  { name: "25-29", uv: 26.69, pv: 4567, fill: "#83a6ed" },
  { name: "30-34", uv: 15.69, pv: 1398, fill: "#8dd1e1" },
  { name: "35-39", uv: 8.22, pv: 9800, fill: "#82ca9d" },
];

const treeMapData = [
  { name: "axis", size: 2000, color: "#8884d8" },
  { name: "controls", size: 3000, color: "#83a6ed" },
  { name: "data", size: 5000, color: "#8dd1e1" },
  { name: "layouts", size: 4000, color: "#82ca9d" },
  { name: "scales", size: 3500, color: "#ffc658" },
  { name: "display", size: 1500, color: "#ff8042" },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function PageHome() {
  const { isDarkMode } = useTheme();
  const textColor = isDarkMode ? "#fff" : "#000";

  return (
    <Grid container spacing={2} sx={{ width: "100%", height: "100%" }}>
      <Grid xs={12}>
        <Typography level="h2" sx={{ mb: 2 }}>
          Dashboard Demo
        </Typography>
      </Grid>

      <Grid xs={12} md={6}>
        <Card>
          <Typography level="h3">Line Chart</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke={textColor} />
              <YAxis stroke={textColor} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="value2" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </Grid>

      <Grid xs={12} md={6}>
        <Card>
          <Typography level="h3">Area Chart</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke={textColor} />
              <YAxis stroke={textColor} />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="value" stackId="1" stroke="#8884d8" fill="#8884d8" />
              <Area type="monotone" dataKey="value2" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
      </Grid>

      <Grid xs={12} md={6}>
        <Card>
          <Typography level="h3">Bar Chart</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke={textColor} />
              <YAxis stroke={textColor} />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
              <Bar dataKey="value2" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </Grid>

      <Grid xs={12} md={6}>
        <Card>
          <Typography level="h3">Composed Chart</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={lineData}>
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" stroke={textColor} />
              <YAxis stroke={textColor} />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="value" fill="#8884d8" stroke="#8884d8" />
              <Bar dataKey="value2" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="value" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </Card>
      </Grid>

      <Grid xs={12} md={6}>
        <Card>
          <Typography level="h3">Pie Chart</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </Grid>

      <Grid xs={12} md={6}>
        <Card>
          <Typography level="h3">Radar Chart</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" stroke={textColor} />
              <PolarRadiusAxis stroke={textColor} />
              <Radar
                name="Student A"
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
              <Radar
                name="Student B"
                dataKey="B"
                stroke="#82ca9d"
                fill="#82ca9d"
                fillOpacity={0.6}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </Card>
      </Grid>

      <Grid xs={12} md={6}>
        <Card>
          <Typography level="h3">Scatter Chart</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" dataKey="x" name="x" stroke={textColor} />
              <YAxis type="number" dataKey="y" name="y" stroke={textColor} />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Scatter name="Values" data={scatterData} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </Card>
      </Grid>

      <Grid xs={12} md={6}>
        <Card>
          <Typography level="h3">Radial Bar Chart</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" data={radialData}>
              <RadialBar
                label={{ position: "insideStart", fill: textColor }}
                background
                dataKey="uv"
              />
              <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" />
            </RadialBarChart>
          </ResponsiveContainer>
        </Card>
      </Grid>

      <Grid xs={12} md={6}>
        <Card>
          <Typography level="h3">Treemap Chart</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <Treemap data={treeMapData} dataKey="size" stroke="#fff" fill="#8884d8" nameKey="name">
              <Tooltip />
            </Treemap>
          </ResponsiveContainer>
        </Card>
      </Grid>
    </Grid>
  );
}
