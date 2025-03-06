document.addEventListener("DOMContentLoaded", () => {
    const addExpenseForm = document.getElementById("add-expense-form");
    const expenseList = document.getElementById("expense-list");
    const totalAmountElement = document.getElementById("total-amount");
    const themeToggle = document.getElementById("theme-toggle");

    let totalExpense = 0;

    
    addExpenseForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const description = document.getElementById("description").value;
        const category = document.getElementById("category").value;
        const amount = parseFloat(document.getElementById("amount").value);

        if (!description || !category || isNaN(amount)) {
            alert("Please fill out all fields!");
            return;
        }

       
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${description}</td>
            <td>${category}</td>
            <td>${amount.toFixed(2)}</td>
            <td><button class="delete-btn">Delete</button></td>
        `;
        expenseList.appendChild(row);

       
        totalExpense += amount;
        totalAmountElement.textContent = totalExpense.toFixed(2);

      
        addExpenseForm.reset();

        row.querySelector(".delete-btn").addEventListener("click", () => {
            expenseList.removeChild(row);
            totalExpense -= amount;
            totalAmountElement.textContent = totalExpense.toFixed(2);
        });
    });

   
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
