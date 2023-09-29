import * as React from "react";
import { DataGrid as MuiDataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getBusinesses } from "../../redux/features/business/getBusinesses";
import { showModal } from "../../redux/features/ui/uiSlice";

export default function DataGrid() {
  const [selected, setSelected] = React.useState([]);
  const businesses = useSelector((state) => state.business.businesses) || [];
  const loading = useSelector((state) => state.business.loading) || false;
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getBusinesses());
  }, []);

  function getRowId(row) {
    return row._id;
  }

  const handleRowClick = (name) => {
    dispatch(showModal());
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
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
      rows={businesses}
      columns={columns}
    />
  );
}
