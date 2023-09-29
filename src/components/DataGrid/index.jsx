import * as React from "react";
import { DataGrid as MuiDataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../redux/features/ui/uiSlice";
import { getAllOrders } from "../../redux/features/orders/getAllOrders";
import { selectOrderID } from "../../redux/features/orders/ordersSlice";
import { formatAmount } from "../../helpers/formatAmount";

export default function DataGrid() {
  const orders = useSelector((state) => state.orders?.orders) || [];
  const loading = useSelector((state) => state.orders?.loading) || false;
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  function getRowId(row) {
    return row._id;
  }

  const handleRowClick = (item) => {
    dispatch(selectOrderID(item?.row?.businessID));
    dispatch(showModal());
  };

  const columns = [
    {
      field: "name",
      numeric: false,
      disablePadding: true,
      headerName: "Name",
      width: 250,
    },
    {
      field: "businessID",
      numeric: true,
      disablePadding: false,
      headerName: "BusinessID",
      width: 150,
    },
    {
      field: "totalAmount",
      numeric: true,
      disablePadding: false,
      headerName: "Amount (₦)",
      width: 150,
      valueGetter: (params) => `${formatAmount(params.row.totalAmount)}`,
    },
    {
      field: "action",
      numeric: true,
      disablePadding: false,
      headerName: "Action",
    },
  ];
  return (
    <MuiDataGrid
      onRowClick={handleRowClick}
      loading={loading}
      getRowId={getRowId}
      rows={orders}
      columns={columns}
    />
  );
}
