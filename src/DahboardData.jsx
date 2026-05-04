// src/data/dashboardData.js

const dashboardData = {
  user: {
    id: "user_001",
    name: "Matthias",
    email: "matthias@email.com",
    businessName: "Loamy Ventures",
  },

  invoices: [
    {
      id: "inv_001",
      client: {
        id: "client_001",
        name: "Mr. James",
        email: "james@email.com",
        phone: "08012345678",
      },
      amount: 50000,
      currency: "NGN",
      dueDate: "2026-04-03",
      status: "OVERDUE",
      createdAt: "2026-03-20",
      paid: false,
    },
    {
      id: "inv_002",
      client: {
        id: "client_002",
        name: "Mrs. Ada",
        email: "ada@email.com",
      },
      amount: 120000,
      currency: "NGN",
      dueDate: "2026-04-10",
      status: "UPCOMING",
      createdAt: "2026-03-25",
      paid: false,
    },
    {
      id: "inv_003",
      client: {
        id: "client_003",
        name: "Mr. David",
      },
      amount: 3000,
      currency: "NGN",
      dueDate: "2026-04-13",
      status: "DUE",
      createdAt: "2026-04-01",
      paid: false,
    },
    {
      id: "inv_004",
      client: {
        id: "client_004",
        name: "Chief Obi",
      },
      amount: 85000,
      currency: "NGN",
      dueDate: "2026-04-18",
      status: "UPCOMING",
      createdAt: "2026-04-02",
      paid: false,
    },
  ],

  notifications: [
    {
      id: "not_001",
      type: "WARNING",
      message: "You have 14 days before you run out of cash.",
      createdAt: "2026-04-13T10:00:00Z",
      isRead: false,
    },
    {
      id: "not_002",
      type: "INFO",
      message: "Foodstuff expense increased by 20% this month.",
      createdAt: "2026-04-13T07:00:00Z",
      isRead: false,
    },
    {
      id: "not_003",
      type: "ALERT",
      message: "Mr. David's ₦3,000 invoice is due today.",
      relatedEntity: {
        type: "invoice",
        id: "inv_003",
      },
      createdAt: "2026-04-13T08:00:00Z",
      isRead: false,
    },
    {
      id: "not_004",
      type: "WARNING",
      message: "Mr. James' ₦50,000 payment is overdue.",
      relatedEntity: {
        type: "invoice",
        id: "inv_001",
      },
      createdAt: "2026-04-12T09:00:00Z",
      isRead: true,
    },
    
  ],

  // 💰 NEW: Expenses (very important for your Loamy idea)
  expenses: [
    {
      id: "exp_001",
      title: "Foodstuff",
      amount: 40000,
      category: "Food",
      date: "2026-04-05",
    },
    {
      id: "exp_002",
      title: "Internet Subscription",
      amount: 15000,
      category: "Utilities",
      date: "2026-04-02",
    },
    {
      id: "exp_003",
      title: "Transport",
      amount: 10000,
      category: "Logistics",
      date: "2026-04-10",
    },
  ],

  // 📊 NEW: Cash Flow (for charts)
  cashFlow: [
    { month: "Jan", income: 200000, expense: 120000 },
    { month: "Feb", income: 180000, expense: 100000 },
    { month: "Mar", income: 220000, expense: 140000 },
    { month: "Apr", income: 150000, expense: 90000 },
  ],

  summary: {
    totalOutstanding: 170000,
    totalOverdue: 50000,
    totalUpcoming: 205000,
    totalExpenses: 65000,
    netBalance: 85000,
  },
};

export default dashboardData;