const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 5200;

// Middleware
app.use(bodyParser.json());

let dataset_task2=[
    {
      ID: "BU79786",
      "Customer Name": "Andrew",
      Division: "Dhaka",
      Gender: "F",
      MaritalStatus: "Married",
      Age: 42,
      Income: 56274,
    },
    {
      ID: "QZ44356",
      "Customer Name": "Anne",
      Division: "Rajshahi",
      Gender: "F",
      MaritalStatus: "Single",
      Age: 30,
      Income: 0,
    },
    {
      ID: "AI49188",
      "Customer Name": "Anthony",
      Division: "Khulna",
      Gender: "F",
      MaritalStatus: "Married",
      Age: 27,
      Income: 48767,
    },
    {
      ID: "WW63253",
      "Customer Name": "Barbara",
      Division: "Barishal",
      Gender: "M",
      MaritalStatus: "Married",
      Age: 47,
      Income: 0,
    },
    {
      ID: "HB64268",
      "Customer Name": "Brian",
      Division: "Mymensingh",
      Gender: "M",
      MaritalStatus: "Single",
      Age: 49,
      Income: 43836,
    },
    {
      ID: "OC83172",
      "Customer Name": "Bruce",
      Division: "Sylhet",
      Gender: "F",
      MaritalStatus: "Married",
      Age: 41,
      Income: 62902,
    },
    {
      ID: "XZ87318",
      "Customer Name": "Carol",
      Division: "Khulna",
      Gender: "F",
      MaritalStatus: "Married",
      Age: 49,
      Income: 55350,
    },
    {
      ID: "CF85061",
      "Customer Name": "Christine",
      Division: "Barishal",
      Gender: "M",
      MaritalStatus: "Single",
      Age: 43,
      Income: 0,
    },
    {
      ID: "DY87989",
      "Customer Name": "Christopher",
      Division: "Mymensingh",
      Gender: "M",
      MaritalStatus: "Divorced",
      Age: 50,
      Income: 14072,
    },
    {
      ID: "BQ94931",
      "Customer Name": "Craig",
      Division: "Sylhet",
      Gender: "F",
      MaritalStatus: "Married",
      Age: 24,
      Income: 28812,
    },
    {
      ID: "SX51350",
      "Customer Name": "David",
      Division: "Rangpur",
      Gender: "M",
      MaritalStatus: "Single",
      Age: 31,
      Income: 0,
    },
    {
      ID: "VQ65197",
      "Customer Name": "Diane",
      Division: "Chattogram",
      Gender: "F",
      MaritalStatus: "Married",
      Age: 34,
      Income: 0,
    },
    {
      ID: "DP39365",
      "Customer Name": "Elizabeth",
      Division: "Dhaka",
      Gender: "M",
      MaritalStatus: "Married",
      Age: 49,
      Income: 77026,
    },
    {
      ID: "SJ95423",
      "Customer Name": "Grant",
      Division: "Rajshahi",
      Gender: "M",
      MaritalStatus: "Married",
      Age: 47,
      Income: 99845,
    },
    {
      ID: "IL66569",
      "Customer Name": "Gregory",
      Division: "Khulna",
      Gender: "M",
      MaritalStatus: "Single",
      Age: 24,
      Income: 83689,
    },
    {
      ID: "BW63560",
      "Customer Name": "Heather",
      Division: "Barishal",
      Gender: "F",
      MaritalStatus: "Married",
      Age: 34,
      Income: 24599,
    },
    {
      ID: "FV94802",
      "Customer Name": "Helen",
      Division: "Mymensingh",
      Gender: "M",
      MaritalStatus: "Married",
      Age: 40,
      Income: 25049,
    },
    {
      ID: "OE15005",
      "Customer Name": "Ian",
      Division: "Sylhet",
      Gender: "M",
      MaritalStatus: "Married",
      Age: 25,
      Income: 28855,
    },
    {
      ID: "WC83389",
      "Customer Name": "James",
      Division: "Rangpur",
      Gender: "M",
      MaritalStatus: "Married",
      Age: 48,
      Income: 51148,
    },
    {
      ID: "FL50705",
      "Customer Name": "Janet",
      Division: "Chattogram",
      Gender: "F",
      MaritalStatus: "Married",
      Age: 25,
      Income: 66140,
    },
    {
      ID: "ZK25313",
      "Customer Name": "Janice",
      Division: "Dhaka",
      Gender: "M",
      MaritalStatus: "Single",
      Age: 32,
      Income: 57749,
    },
    {
      ID: "SV62436",
      "Customer Name": "Jennifer",
      Division: "Rajshahi",
      Gender: "F",
      MaritalStatus: "Divorced",
      Age: 32,
      Income: 13789,
    },
    {
      ID: "YH23384",
      "Customer Name": "John",
      Division: "Mymensingh",
      Gender: "M",
      MaritalStatus: "Divorced",
      Age: 40,
      Income: 14072,
    },
    {
      ID: "TZ98966",
      "Customer Name": "Judith",
      Division: "Sylhet",
      Gender: "F",
      MaritalStatus: "Single",
      Age: 30,
      Income: 0,
    },
    {
      ID: "HM55802",
      "Customer Name": "Julie",
      Division: "Rangpur",
      Gender: "F",
      MaritalStatus: "Married",
      Age: 47,
      Income: 17870,
    },
    {
      ID: "FS42516",
      "Customer Name": "Karen",
      Division: "Chattogram",
      Gender: "M",
      MaritalStatus: "Married",
      Age: 47,
      Income: 97541,
    },
    {
      ID: "US89481",
      "Customer Name": "Kevin",
      Division: "Dhaka",
      Gender: "F",
      MaritalStatus: "Single",
      Age: 45,
      Income: 0,
    },
    {
      ID: "HO30839",
      "Customer Name": "Linda",
      Division: "Rajshahi",
      Gender: "F",
      MaritalStatus: "Married",
      Age: 40,
      Income: 10511,
    },
    {
      ID: "GE62437",
      "Customer Name": "Lorraine",
      Division: "Khulna",
      Gender: "F",
      MaritalStatus: "Single",
      Age: 50,
      Income: 86584,
    },
    {
      ID: "EJ77678",
      "Customer Name": "Lynette",
      Division: "Rangpur",
      Gender: "F",
      MaritalStatus: "Married",
      Age: 40,
      Income: 75690,
    },
    {
      ID: "SV85652",
      "Customer Name": "Margaret",
      Division: "Chattogram",
      Gender: "M",
      MaritalStatus: "Married",
      Age: 45,
      Income: 23158,
    },
    {
      ID: "UL64533",
      "Customer Name": "Mark",
      Division: "Dhaka",
      Gender: "M",
      MaritalStatus: "Married",
      Age: 46,
      Income: 65999,
    },
    {
      ID: "PF41800",
      "Customer Name": "Mary",
      Division: "Rajshahi",
      Gender: "M",
      MaritalStatus: "Married",
      Age: 37,
      Income: 0,
    },
    {
      ID: "AO98601",
      "Customer Name": "Michael",
      Division: "Khulna",
      Gender: "M",
      MaritalStatus: "Married",
      Age: 41,
      Income: 54500,
    },
    {
      ID: "SK67821",
      "Customer Name": "Pamela",
      Division: "Barishal",
      Gender: "F",
      MaritalStatus: "Married",
      Age: 26,
      Income: 37260,
    },
    {
      ID: "YV55495",
      "Customer Name": "Patricia",
      Division: "Mymensingh",
      Gender: "F",
      MaritalStatus: "Married",
      Age: 27,
      Income: 68987,
    },
    {
      ID: "KY38074",
      "Customer Name": "Paul",
      Division: "Sylhet",
      Gender: "M",
      MaritalStatus: "Married",
      Age: 47,
      Income: 42305,
    },
    {
      ID: "DM79012",
      "Customer Name": "Peter",
      Division: "Rangpur",
      Gender: "F",
      MaritalStatus: "Married",
      Age: 49,
      Income: 65706,
    },
    {
      ID: "CM61827",
      "Customer Name": "Philip",
      Division: "Chattogram",
      Gender: "M",
      MaritalStatus: "Single",
      Age: 27,
      Income: 0,
    },
    {
      ID: "WC35801",
      "Customer Name": "Richard",
      Division: "Khulna",
      Gender: "M",
      MaritalStatus: "Divorced",
      Age: 32,
      Income: 53243,
    },
    {
      ID: "QG25316",
      "Customer Name": "Robert",
      Division: "Rangpur",
      Gender: "F",
      MaritalStatus: "Married",
      Age: 40,
      Income: 0,
    },
    {
      ID: "MB98372",
      "Customer Name": "Robyn",
      Division: "Chattogram",
      Gender: "F",
      MaritalStatus: "Single",
      Age: 41,
      Income: 50071,
    },
    {
      ID: "IL19217",
      "Customer Name": "Sandra",
      Division: "Dhaka",
      Gender: "F",
      MaritalStatus: "Married",
      Age: 42,
      Income: 60021,
    },
    {
      ID: "SR38658",
      "Customer Name": "Stephen",
      Division: "Rajshahi",
      Gender: "M",
      MaritalStatus: "Married",
      Age: 32,
      Income: 43244,
    },
    {
      ID: "DH41343",
      "Customer Name": "Steven",
      Division: "Mymensingh",
      Gender: "M",
      MaritalStatus: "Married",
      Age: 28,
      Income: 92834,
    },
    {
      ID: "HG65722",
      "Customer Name": "Susan",
      Division: "Sylhet",
      Gender: "F",
      MaritalStatus: "Married",
      Age: 34,
      Income: 10105,
    },
    {
      ID: "BU27331",
      "Customer Name": "Suzanne",
      Division: "Rangpur",
      Gender: "M",
      MaritalStatus: "Single",
      Age: 32,
      Income: 0,
    },
    {
      ID: "XM45289",
      "Customer Name": "Wayne",
      Division: "Chattogram",
      Gender: "F",
      MaritalStatus: "Single",
      Age: 30,
      Income: 23218,
    },
    {
      ID: "KP34198",
      "Customer Name": "Wendy",
      Division: "Khulna",
      Gender: "F",
      MaritalStatus: "Married",
      Age: 34,
      Income: 0,
    },
    {
      ID: "WE95729",
      "Customer Name": "William",
      Division: "Sylhet",
      Gender: "F",
      MaritalStatus: "Married",
      Age: 42,
      Income: 0,
    },
  ];
  

let products = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99 },
  { id: 2, name: 'Phone', category: 'Electronics', price: 499.99 }
];

let transactions = [
  { id: 1, user_id: 1, product_id: 1, date: '2024-12-01', amount: 999.99 },
  { id: 2, user_id: 2, product_id: 2, date: '2024-12-02', amount: 499.99 }
];

// API Routes

// Fetch all users
app.get('/api/users', (req, res) => {
  res.json(dataset_task2);
});

// Fetch all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Fetch transactions for a specific user
app.get('/api/transactions/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const userTransactions = transactions.filter(transaction => transaction.user_id === userId);
  res.json(userTransactions);
});

// Fetch summary of total sales
app.get('/api/summary', (req, res) => {
  const totalSales = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  res.json({ total_sales: totalSales });
});

// Fetch sales by product category
app.get('/api/sales_by_category', (req, res) => {
  const salesByCategory = products.map(product => {
    const categorySales = transactions
      .filter(transaction => transaction.product_id === product.id)
      .reduce((sum, transaction) => sum + transaction.amount, 0);
    return { category: product.category, total_sales: categorySales };
  });
  res.json(salesByCategory);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
