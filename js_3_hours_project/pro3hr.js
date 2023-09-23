const expense = document.getElementById("expense");
const description = document.getElementById("choose_description");
const category = document.getElementById("category");
const addButton = document.getElementById("button");
const output = document.getElementById("output");

// Load existing data from local storage if it exists
let expensesData = JSON.parse(localStorage.getItem("expensesData")) || [];

// Function to render an expense item
function renderExpense(expenseData) {
  const resultElement = document.createElement("li");

  const itemText = document.createElement("span");
  itemText.textContent = `${expenseData.expense}-${expenseData.description}-${expenseData.category}`;

  resultElement.appendChild(itemText);

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", function () {
    // Handle the edit functionality here
    const editedExpenseValue = prompt("Edit Expense:", expenseData.expense);
    const editedDescriptionValue = prompt("Edit Description:", expenseData.description);
    const editedCategoryValue = prompt("Edit Category:", expenseData.category);

    if (editedExpenseValue !== null && editedDescriptionValue !== null && editedCategoryValue !== null) {
      expenseData.expense = editedExpenseValue;
      expenseData.description = editedDescriptionValue;
      expenseData.category = editedCategoryValue;

      // Update the text content in the UI
      itemText.textContent = `${editedExpenseValue}-${editedDescriptionValue}-${editedCategoryValue}`;

      // Update local storage with the modified expensesData
      localStorage.setItem("expensesData", JSON.stringify(expensesData));
    }
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    resultElement.remove();
    // Remove the item from the expensesData array
    expensesData = expensesData.filter((item) => item.expense !== expenseData.expense);
    // Update local storage with the modified expensesData
    localStorage.setItem("expensesData", JSON.stringify(expensesData));
  });

  resultElement.appendChild(editButton);
  resultElement.appendChild(deleteButton);

  return resultElement;
}

// Render existing expenses from local storage
expensesData.forEach((expenseData) => {
  const resultElement = renderExpense(expenseData);
  output.appendChild(resultElement);
});

// Adding event listener to add a new expense
addButton.addEventListener("click", function (e) {
  e.preventDefault();

  // Get the values from the input fields
  const expenseValue = expense.value;
  const descriptionValue = description.value;
  const categoryValue = category.value;

  const expenseData = {
    expense: expenseValue,
    description: descriptionValue,
    category: categoryValue,
  };

  // Add the new expenseData to the expensesData array
  expensesData.push(expenseData);

  // Update local storage with the updated expensesData
  localStorage.setItem("expensesData", JSON.stringify(expensesData));

  // Render the new expense item and add it to the UI
  const resultElement = renderExpense(expenseData);
  output.appendChild(resultElement);

  // Clear the input fields
  expense.value = "";
  description.value = "";
  category.value = "";
});