import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@nextui-org/react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const rowsPerPage = 4;

  useEffect(() => {
    // 模拟从API获取数据
    const fetchData = async () => {
    //   const start = "2024-01-01 00:00:00"; // 临时设置开始时间
    //   const end = "2024-06-01 23:59:59"; // 临时设置结束时间
      const categories_name = "all"; // 临时设置类别名称

      try {
        const response = await fetch(
          `/proxy/api/products?categories_name=${encodeURIComponent(categories_name)}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Data:", data); // 打印解析后的数据
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error); // 处理可能的错误
      }
    };

    fetchData();
  }, []);

  const pages = Math.ceil(products.length / rowsPerPage);

  const renderCell = React.useCallback((product, columnKey) => {
    const cellValue = product[columnKey];
    switch (columnKey) {
      case "name":
      case "description":
      case "category":
        return cellValue;
      default:
        return cellValue;
    }
  }, []);

  const items = React.useMemo(() => {
    const startIdx = (page - 1) * rowsPerPage;
    const endIdx = startIdx + rowsPerPage;
    return products.slice(startIdx, endIdx);
  }, [page, products]);

  return (
    <Table
      aria-label="Product table with client side pagination"
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
        <TableColumn>Name</TableColumn>
        <TableColumn>Description</TableColumn>
        <TableColumn>Category</TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.id}>
            <TableCell>{renderCell(item, "name")}</TableCell>
            <TableCell>{renderCell(item, "description")}</TableCell>
            <TableCell>{renderCell(item, "category")}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default Products;
