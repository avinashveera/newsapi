import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination({total,fucn,count}) {



   const nextData=(value)=>{

       fucn(count*value-count,count*value)

   }

  return (
    <Stack spacing={6}  sx={{ padding: '60px 20px' }}>

      <Pagination   onChange={(event,value)=>{nextData(value)}} count={total} color="primary" />
    </Stack>
  );
}