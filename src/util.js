export default function formateCurrency(num) {
    return "Rs " + Number(num.toFixed(1)).toLocaleString() + " "
}