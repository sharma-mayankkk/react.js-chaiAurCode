import { useId } from "react";
function InputBox({
    label, // Label for the input (e.g., "From", "To")
    amount, // The amount value
    onAmountChange, // Function to handle amount change
    onCurrencyChange, // Function to handle currency change
    currencyOptions = [], // List of available currencies
    selectCurrency = "usd", // Default selected currency
    amountDisable = false, // Disable amount input
    currencyDisable = false, // Disable currency selection
    className = "", // Custom classes
}) {
    const amountInputId = useId() // Unique ID for accessibility

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    // Handle amount change, ensuring it's a number
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {/* Map through currency options to create dropdown items */}
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}

                </select>
            </div>
        </div>
    );
}

export default InputBox; 