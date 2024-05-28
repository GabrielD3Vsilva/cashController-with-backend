function ExpenseItem ({expenseTitle, expenseValue}) {
    return (
        <div className="flex justify-between px-5 py-2 flex-wrap bg-blue-900 text-white">
            <h5 className="md:text-lg">{expenseTitle}</h5>
            <h5 className="md:text-lg"><span className="font-bold">Custo:</span>     {expenseValue} reais</h5>
        </div>
    )
}

export default ExpenseItem;