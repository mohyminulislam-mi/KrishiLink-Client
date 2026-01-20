import React, { useState, useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  ShoppingCart,
  Activity,
} from "lucide-react";

// Extended dataset with daily granularity
const fullData = {
  year: [
    { name: "Jan", value: 125000, orders: 450, users: 1200 },
    { name: "Feb", value: 111000, orders: 380, users: 1150 },
    { name: "Mar", value: 300000, orders: 890, users: 2100 },
    { name: "Apr", value: 399000, orders: 1200, users: 2800 },
    { name: "May", value: 361000, orders: 1100, users: 2650 },
    { name: "Jun", value: 809000, orders: 2400, users: 5200 },
    { name: "Jul", value: 567000, orders: 1650, users: 3800 },
    { name: "Aug", value: 690000, orders: 2100, users: 4500 },
    { name: "Sep", value: 1202000, orders: 3500, users: 7800 },
    { name: "Oct", value: 756000, orders: 2200, users: 5100 },
    { name: "Nov", value: 192000, orders: 550, users: 1400 },
    { name: "Dec", value: 1920000, orders: 5800, users: 12000 },
  ],
  month: [
    { name: "Week 1", value: 480000, orders: 1450, users: 3000 },
    { name: "Week 2", value: 520000, orders: 1580, users: 3200 },
    { name: "Week 3", value: 445000, orders: 1320, users: 2900 },
    { name: "Week 4", value: 475000, orders: 1450, users: 3100 },
  ],
  week: [
    { name: "Mon", value: 68000, orders: 210, users: 450 },
    { name: "Tue", value: 72000, orders: 225, users: 480 },
    { name: "Wed", value: 65000, orders: 195, users: 420 },
    { name: "Thu", value: 78000, orders: 240, users: 510 },
    { name: "Fri", value: 82000, orders: 255, users: 540 },
    { name: "Sat", value: 45000, orders: 140, users: 290 },
    { name: "Sun", value: 38000, orders: 115, users: 250 },
  ],
  today: [
    { name: "12 AM", value: 1200, orders: 4, users: 12 },
    { name: "3 AM", value: 800, orders: 2, users: 8 },
    { name: "6 AM", value: 2400, orders: 8, users: 22 },
    { name: "9 AM", value: 5600, orders: 18, users: 45 },
    { name: "12 PM", value: 8900, orders: 28, users: 68 },
    { name: "3 PM", value: 7200, orders: 24, users: 58 },
    { name: "6 PM", value: 9800, orders: 32, users: 78 },
    { name: "9 PM", value: 6100, orders: 20, users: 48 },
  ],
};

const categoryData = [
  { name: "Electronics", value: 35, color: "#3b82f6" },
  { name: "Clothing", value: 28, color: "#8b5cf6" },
  { name: "Food", value: 20, color: "#10b981" },
  { name: "Others", value: 17, color: "#f59e0b" },
];

const recentTransactions = [
  {
    id: "ORD-001",
    customer: "John Anderson",
    status: "Completed",
    amount: 1245.0,
    time: "2 min ago",
  },
  {
    id: "ORD-002",
    customer: "Sarah Williams",
    status: "Pending",
    amount: 890.5,
    time: "15 min ago",
  },
  {
    id: "ORD-003",
    customer: "Michael Chen",
    status: "Completed",
    amount: 2150.0,
    time: "1 hour ago",
  },
  {
    id: "ORD-004",
    customer: "Emma Davis",
    status: "Processing",
    amount: 675.25,
    time: "2 hours ago",
  },
  {
    id: "ORD-005",
    customer: "James Wilson",
    status: "Completed",
    amount: 1890.0,
    time: "3 hours ago",
  },
];

const Overview = () => {
  const [timeRange, setTimeRange] = useState("year");

  const data = fullData[timeRange];

  const stats = useMemo(() => {
    const totalRevenue = data.reduce((acc, item) => acc + item.value, 0);
    const totalOrders = data.reduce((acc, item) => acc + item.orders, 0);
    const totalUsers = data.reduce((acc, item) => acc + item.users, 0);
    const avgOrderValue = totalRevenue / totalOrders;

    // Calculate growth (compare last period vs previous)
    const lastPeriod = data[data.length - 1]?.value || 0;
    const prevPeriod = data[data.length - 2]?.value || 1;
    const revenueGrowth = ((lastPeriod - prevPeriod) / prevPeriod) * 100;

    return {
      totalRevenue,
      totalOrders,
      totalUsers,
      avgOrderValue,
      revenueGrowth,
    };
  }, [data]);

  const StatCard = ({ title, value, icon: Icon, trend, trendValue, color }) => (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm text-gray-600 font-medium">{title}</p>
        <div className={`p-2 rounded-lg bg-${color}-50`}>
          <Icon className={`w-5 h-5 text-${color}-600`} />
        </div>
      </div>
      <p className="text-3xl font-bold text-gray-900 mb-2">{value}</p>
      {trendValue !== undefined && (
        <div className="flex items-center gap-1">
          {trend === "up" ? (
            <TrendingUp className="w-4 h-4 text-green-600" />
          ) : (
            <TrendingDown className="w-4 h-4 text-red-600" />
          )}
          <span
            className={`text-sm font-medium ${trend === "up" ? "text-green-600" : "text-red-600"}`}
          >
            {trendValue}%
          </span>
          <span className="text-sm text-gray-500 ml-1">vs last period</span>
        </div>
      )}
    </div>
  );

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Dashboard Overview
          </h1>
          <p className="text-gray-600 mt-1">
            Track your business performance and metrics
          </p>
        </div>

        {/* Time Range Filter */}
        <div className="flex gap-2 bg-white p-1 rounded-lg border border-gray-200 shadow-sm">
          {[
            { label: "Today", value: "today" },
            { label: "7 Days", value: "week" },
            { label: "Month", value: "month" },
            { label: "Year", value: "year" },
          ].map((range) => (
            <button
              key={range.value}
              onClick={() => setTimeRange(range.value)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                timeRange === range.value
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Revenue"
          value={`$${stats.totalRevenue.toLocaleString()}`}
          icon={DollarSign}
          trend={stats.revenueGrowth >= 0 ? "up" : "down"}
          trendValue={Math.abs(stats.revenueGrowth).toFixed(1)}
          color="green"
        />
        <StatCard
          title="Total Orders"
          value={stats.totalOrders.toLocaleString()}
          icon={ShoppingCart}
          trend="up"
          trendValue="12.5"
          color="blue"
        />
        <StatCard
          title="Active Users"
          value={stats.totalUsers.toLocaleString()}
          icon={Users}
          trend="up"
          trendValue="8.3"
          color="purple"
        />
        <StatCard
          title="Avg Order Value"
          value={`$${stats.avgOrderValue.toFixed(2)}`}
          icon={Activity}
          trend="up"
          trendValue="5.7"
          color="orange"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Trend Line Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="font-semibold mb-4 text-gray-800 text-lg">
            Revenue Trend
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="name"
                stroke="#6b7280"
                style={{ fontSize: "12px" }}
              />
              <YAxis stroke="#6b7280" style={{ fontSize: "12px" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ fill: "#3b82f6", r: 4 }}
                activeDot={{ r: 6, fill: "#2563eb" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Category Distribution Pie Chart */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="font-semibold mb-4 text-gray-800 text-lg">
            Sales by Category
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Orders and Users Bar Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="font-semibold mb-4 text-gray-800 text-lg">
            Orders Overview
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={data}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#f0f0f0"
                vertical={false}
              />
              <XAxis
                dataKey="name"
                stroke="#6b7280"
                style={{ fontSize: "12px" }}
              />
              <YAxis stroke="#6b7280" style={{ fontSize: "12px" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="orders" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="font-semibold mb-4 text-gray-800 text-lg">
            User Activity
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={data}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#f0f0f0"
                vertical={false}
              />
              <XAxis
                dataKey="name"
                stroke="#6b7280"
                style={{ fontSize: "12px" }}
              />
              <YAxis stroke="#6b7280" style={{ fontSize: "12px" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="users" fill="#10b981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Transactions Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-800 text-lg">
              Recent Transactions
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Latest order activities
            </p>
          </div>
          <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
            View All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Time
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentTransactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-900">
                      {transaction.id}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">
                      {transaction.customer}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                        transaction.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : transaction.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-semibold text-gray-900">
                      ${transaction.amount.toFixed(2)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-500">
                      {transaction.time}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Overview;
