const getToFixedNumber = (value, numberOfDigits) => {
    return value ? value.toFixed(numberOfDigits) + "%" : "?"
}
export default getToFixedNumber