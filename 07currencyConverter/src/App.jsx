import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0) // State for the amount to convert
  const [from, setFrom] = useState('usd') // State for the source currency
  const [to, setTo] = useState('inr') // State for the target currency
  const [convertedAmount, SetConvertedAmount] = useState(0) // State for the converted result

  const currencyInfo = useCurrencyInfo(from) // Fetch currency data based on 'from' currency
  const options = Object.keys(currencyInfo) // Extract currency keys for dropdown options

  // Function to swap 'from' and 'to' currencies and amounts
  const swap = () => {
    setFrom(to)
    setTo(from)
    SetConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  // Function to calculate the converted amount
  const convert = () => {
    SetConvertedAmount(amount * currencyInfo[to])
  }

  console.log(currencyInfo)

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://i.pinimg.com/736x/f4/aa/83/f4aa836bb1959f3dc4996ad20ccde9db.jpg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()

            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)} // Handle currency change
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)} // Handle amount change
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable // Disable amount input for the result
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
