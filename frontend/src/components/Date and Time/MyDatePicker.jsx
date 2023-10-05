import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './custom-styles.css'; // Import your custom CSS file


export default function MyDatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <div className="my-datepicker-container">
          <DatePicker
            sx={{ width: "420px " }}
            label="Basic date picker"
            className="my-datepicker-class"
          />
        </div>
      </DemoContainer>
    </LocalizationProvider>
  );
}
