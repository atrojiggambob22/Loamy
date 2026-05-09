import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import './expense.css'
const data = [
  { name: "Foodstuff", value: 24, color: "#768E52" },
  { name: "Store Rent", value: 48, color: "#3A462E" },
  { name: "Light Bills", value: 12, color: "#BBBD95" },
  { name: "Transport", value: 10, color: "#D4DA7B" },
  { name: "Miscellaneous", value: 6, color: "black" },
];

export default function ExpenseChart() {
  return (
    <div style={styles.card} className="carddd">
     

      <div style={styles.content}>
        {/* Chart */}
        <div style={{ width: 140, height: 140 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                innerRadius={30}
                outerRadius={60}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((item, index) => (
                  <Cell key={index} fill={item.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div style={{ flex: 1 }} className="legend">
          {data.map((item, index) => (
            <div key={index} style={styles.row} className="roww">
              <div style={styles.left}>
                <span
                  style={{
                    ...styles.dot,
                    backgroundColor: item.color,
                  }}
                />
                <span>{item.name}</span>
              </div>
              <span>{item.value}%</span>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.note} className="notee">
        💡 Store rent increased by 20% compared to last month.
      </div>
    </div>
  );
}

const styles = {
  card: {
    // background: "#fff",
    padding: 20,
    borderRadius: 16,
    width: 400,
    position: "relative",
    top:80,
    // boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
    fontFamily: "sans-serif",
  },
  title: {
    marginBottom: 16,
  },
  content: {
    display: "flex",
    gap: 20,
    alignItems: "center",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  left: {
    display: "flex",
    gap: 8,
    alignItems: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
  },
  note: {
    marginTop: 16,
    background: "#f5e9c9",
    padding: 12,
    borderRadius: 10,
    fontSize: 13,
  },
};