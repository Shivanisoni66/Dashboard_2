const ctx = document.getElementById('myChart');
const customerTable = document.getElementById('customerid');

const productTable = document.getElementById('productId');
const orderTable = document.getElementById('orderid');



let costumers = [{ id: "1", cutomerName: "aman", contact: "uhjhh", address: "indore" }, { id: "2", cutomerName: "gopal", contact: "xx", address: "ujjain" }, { id: "3", cutomerName: "jyoti", contact: "xxx", address: "bhopal" }]

let products = [{ id: "1", productName: "whitetone", price: 10, stock: 10 },
{ id: "2", productName: "darkfantasy", price: 10, stock: 5 },
{ id: "3", productName: "fairnlovely", price: 10, stock: 5 }
]

let orders = [{ id: "1", name: "aman", amount: "300", status: "done" }, 
{ id: "2", name: "gopal", amount: "200", status: "pending" }, 
{ id: "3", name: "jyoti", amount: "200", status: "cancel" }]


costumers.forEach(customer => {
  customerTable.innerHTML += `<tr>
  <th scope="row">${customer.id}</th>
  <td>${customer.cutomerName}</td>
  <td>${customer.address}</td>
  <td>${customer.contact}</td>
</tr>`
})


products.forEach(product => {
  productTable.innerHTML += `<tr>
<th scope="row">${product.id}</th>
<td>${product.productName}</td>
<td>${product.price}</td>
<td>${product.stock}</td>
</tr>`
})

orders.forEach(order => {
  orderTable.innerHTML += `<tr>
  <th scope="row">${order.id}</th>
  <td>${order.name}</td>
  <td>${order.amount}</td>
  <td>${order.status}</td>
</tr>`
})


new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['2010', '2012', '2014', '2016', '2018', '2020'],
    datasets: [{
      label: '# of users',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const ctx2 = document.getElementById('myChart2');

new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: ['2010', '2012', '2014', '2016', '2018', '2020'],
    datasets: [{
      label: '# of users',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});








