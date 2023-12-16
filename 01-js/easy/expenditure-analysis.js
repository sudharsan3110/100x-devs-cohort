/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categorymap = {};
  for(let i = 0; i < transactions.length; i++) {
  const category = transactions[i].category;
  const price = transactions[i].price;
  if(categorymap[category]=== undefined)
    categorymap[category] = price;
  else 
    categorymap[category] += price;
  }

  const result=[];
  const categoryKeys = Object.keys(categorymap);
  for(let i = 0; i < categoryKeys.length; i++)
        {
          const category = categoryKeys[i];
          result.push({category, totalSpent: categorymap[category]});
        }
  
  return result;

}

module.exports = calculateTotalSpentByCategory;
