import { Choice } from "@/lib/data";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Choice>[] = [
  {
    header: "Number",
    accessorKey: "id",
  },
  {
    header: "First Choice",
    accessorKey: "option_a",
  },
  {
    header: "",
    accessorKey: "symbol",
  },
  {
    header: "Second Choice",
    accessorKey: "option_b",
  },
  {
    header: "",
    accessorKey: "symbol2",
  },
  {
    header: "Third Choice",
    accessorKey: "option_c",
  },
];
