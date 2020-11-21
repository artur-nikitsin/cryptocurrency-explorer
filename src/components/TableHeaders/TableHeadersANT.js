const TableHeaderANT = (template) => {
  return template.map((header, index) => ({
    title: header.title,
    dataIndex: header.dataIndex,
    key: header + index,
  }));
};
export default TableHeaderANT;
