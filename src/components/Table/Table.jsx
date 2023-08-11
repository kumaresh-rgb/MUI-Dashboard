import React from "react";
import "./Table.css";
import "@fontsource/roboto/700.css";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

import { indigo } from "@mui/material/colors";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Grid from "./Grid";


const Table = () => {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(indigo[500]),
    backgroundColor: indigo[500],
    "&:hover": {
      backgroundColor: indigo[700],
    },
  }));;;

  return (
    <div className="Table_Main">
      <div className="Table_Header">
        {"Recent Transcation"}
        <ColorButton
          size="small"
          variant="outlined"
          startIcon={<FileUploadOutlinedIcon />}>
          Export
        </ColorButton>
      </div>





      <div className="Table_Bottom">

<Grid />
      </div>


















    </div>
  );
};

export default Table;
