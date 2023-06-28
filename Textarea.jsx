import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
//import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Textarea from '@mui/joy/Textarea';
import TextareaAutosize from '@mui/base/Textarea';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Modal from '@mui/material/Modal';
import { DataGrid } from '@mui/x-data-grid';
//import { TextareaAutosize } from '@mui/material';


export default function UpPJ() {
    return (
        <div>
            <Grid item xs={12} sm={6} sx={{ mt: 1 }}>
                <TextareaAutosize
                    minRows={4} cols={150}
                    placeholder="Description..."
                    size="lg"
                />
            </Grid>

            <Grid item xs={12} sm={6} sx={{ mt: 1 }}>
                <Textarea
                    minRows={4} cols={150}
                    placeholder="Description..."
                    size="lg"
                />
            </Grid>
        </div>
    );
}
