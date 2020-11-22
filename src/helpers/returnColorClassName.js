const returnColorClassName = (value) => {
  if (value.substr(0, 1) === '?') {
    return '';
  }
  if (value.substr(0, 1) === '-') {
    return 'red';
  }
  return 'green';
};
export default returnColorClassName;
