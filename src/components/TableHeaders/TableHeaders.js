import React from "react";

const TableHeader = ({template}) => {
    const renderItems = (headers) => headers.map((header, index) => (
        <th className={header.className}
            key={header + index}>{header.title}
        </th>
    ));
    return (
        <thead>
        <tr>{renderItems(template)}</tr>
        </thead>
    );
};
export default TableHeader;