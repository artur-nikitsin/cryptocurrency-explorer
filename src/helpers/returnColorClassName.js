const returnColorClassName = (value) => {
  if (!value) {
    return '?';
  }
  if (typeof value !== 'string') {
    value = value.toString();
  }
  if (value.substr(0, 1) === '?') {
    return '';
  }
  if (value.substr(0, 1) === '-') {
    return 'red';
  }
  return 'green';
};
export default returnColorClassName;
