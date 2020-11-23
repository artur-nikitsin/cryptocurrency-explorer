const returnColorClassName = (value) => {
  if (!value) {
    return '?';
  }
  let valueString = value;
  if (typeof value !== 'string') {
    valueString = value.toString();
  }
  if (valueString.substr(0, 1) === '?') {
    return '';
  }
  if (valueString.substr(0, 1) === '-') {
    return 'red';
  }
  return 'green';
};
export default returnColorClassName;
