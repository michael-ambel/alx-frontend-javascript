// task_3/js/main.ts

/// <reference path="crud.d.ts" />
import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud"; // Import CRUD module

// Create a row object of type RowElement
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insert row and get the RowID (newRowID)
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated row object with the 'age' field
const updatedRow: RowElement = { ...row, age: 23 };

// Update the row with the new RowID
CRUD.updateRow(newRowID, updatedRow);

// Delete the row by its RowID
CRUD.deleteRow(newRowID);
