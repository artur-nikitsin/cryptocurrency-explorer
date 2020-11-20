const returnColorClassName = (value) => {
    if (value.substr(0, 1) === "-") {
        return "red"
    }
    if (value.substr(0, 1) === "?") {
        return ""
    }
    return "green"
}
export default returnColorClassName