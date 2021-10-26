const suppliers = [{
  _id: 1,
  number: 20,
  viewName: "Rubber Chicken Ltd",
  details: "13 Some Road, SomePlace, 23948 Burgh" },
{
  _id: 2,
  number: 22,
  viewName: "Pulley Inc.",
  details: "Pulley Square, Out There, A637Z3 Boondocks" }];


const bookings = [{
  _id: 1,
  number: 1,
  date: new Date(2016, 0, 3),
  details: "Monthly Pulley payment",
  supplier_id: 2,
  amount: 12.59,
  currency: "USD" },
{
  _id: 1,
  number: 2,
  date: new Date(2016, 0, 4),
  details: "Big Rubber Chicken order",
  supplier_id: 1,
  amount: 47623.45,
  currency: "BOO" }];


const grid = $("#grid").dxDataGrid({
  dataSource: bookings,
  columns: [
  {
    dataField: "number",
    dataType: "number",
    format: {
      type: "decimal",
      precision: 5 },

    allowEditing: false },

  {
    dataField: "date",
    dataType: "date" },

  "amount",
  "currency",
  "details",
  {
    dataField: "supplier_id",
    caption: "Supplier",
    lookup: {
      dataSource: {
        store: suppliers },

      valueExpr: "_id",
      displayExpr: "viewName" } }],



  editing: {
    mode: "batch",
    allowAdding: true,
    allowDeleting: true,
    allowUpdating: true } }).

dxDataGrid("instance");