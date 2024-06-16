import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Pagination,
} from "@nextui-org/react";

const Warehouse = () => {
  const [warehouses, setWarehouses] = useState([]);
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 4;
  useEffect(() => {
    // 模拟从API获取数据
    const fetchData = async () => {
      try {
        const response = await fetch("/proxy/api/warehouses");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Data:", data); // 打印解析后的数据
        setWarehouses(data);
      } catch (error) {
        console.error("Error fetching warehouses:", error); // 处理可能的错误
      }
    };

    fetchData();
  }, []);
  const pages = Math.ceil(warehouses.length / rowsPerPage);
  const renderCell = React.useCallback((warehouse, columnKey) => {
    const cellValue = warehouse[columnKey];
    switch (columnKey) {
      case "id":
      case "name":
      case "location":
        return cellValue;
      case "status":
        // 判断仓库的状态
        return <Chip>Active</Chip>;
      default:
        return cellValue;
    }
  }, []);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return warehouses.slice(start, end);
  }, [page, warehouses]);

  return (
    <Table
      aria-label="Example table with client side pagination"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      classNames={{
        wrapper: "min-h-[222px]",
      }}
    >
      <TableHeader>
        <TableColumn>ID</TableColumn>
        <TableColumn>Name</TableColumn>
        <TableColumn>Location</TableColumn>
        <TableColumn>Status</TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.id}>
            <TableCell>{renderCell(item, "id")}</TableCell>
            <TableCell>{renderCell(item, "name")}</TableCell>
            <TableCell>{renderCell(item, "location")}</TableCell>
            <TableCell>{renderCell(item, "status")}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default Warehouse;
