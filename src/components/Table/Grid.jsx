import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';



const columns = [
  { field: 'id', headerName: 'Invoice Id', minWidth: 190 },
    
    { field: 'date', headerName: 'Date',minWidth: 190 },
  { field: 'description', headerName: 'Description', minWidth: 190 },
  {
    field: 'status',
    headerName: 'Status',
    minWidth: 190,

  
  },
  { field: 'ddescription', headerName: 'Description', minWidth: 190 },
 
 
];

const rows = [
  { id: "MD603RDR2",  date:12-5-2002, description: 'code 5928MS01', status: "completed",ddescription: 'code 5928MS01',},
  { id: "MD603RDR2",  date: 12-5-2002, description: 'code 5928MS01',  status: "completed" ,ddescription: 'code 5928MS01',},
  { id: "MD603RDR2",  date: 12-5-2002, description: 'code 5928MS01',  status: "completed" ,ddescription: 'code 5928MS01', },
  { id: "MD603RDR2",  date: 12-5-2002, description:  'code 5928MS01', status: "completed" ,ddescription: 'code 5928MS01',},
  { id: "MD603RDR2",  date: 12-5-2002, description:  'code 5928MS01',status: "completed" ,ddescription: 'code 5928MS01', },
  { id: "MD603RDR2",  date: 12-5-2002, description:  null,            status: "Pending",  ddescription: 'code 5928MS01', },
  { id: "MD603RDR2",  date: 12-5-2002, description: 'code 5928MS01', status: "acompleted",ddescription: 'code 5928MS01', },
  { id: "MD603RDR2",  date: 12-5-2002, description: 'code 5928MS01', status: "completed",ddescription: 'code 5928MS01', },
  { id: "MD603RDR2",  date:12-5-2002, description:  'code 5928MS01', status: "completed",ddescription: 'code 5928MS01', },
];

const Grid = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10 , 25 , 50]}
        checkboxSelection
      />
    </div>  
  );
}

export default Grid