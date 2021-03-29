import React from 'react';
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const ProfileRequest = () => {
    return (
        <div className="profile__request">
            <TextField style={{width: "40%", margin: "10px"}} size="small" label="Tên trường" variant="outlined"/>
            <TextField type="number" style={{width: "40%", margin: "10px"}} size="small" label="Số lượng"
                       variant="outlined"/>
            <TextField
                size="small"
                style={{width: "40%", margin: "10px"}}
                select
                label="Chương trình sách"
                // value={currency}
                // onChange={handleChange}
                variant="outlined"

            >
                <MenuItem value="book">Có sách</MenuItem>
                <MenuItem value="noBook">Không sách</MenuItem>
                <MenuItem value="myAdventure">Chương trình My Adventure</MenuItem>
            </TextField>
            <TextField style={{width: "40%", margin: "10px"}} size="small" label="Yêu cầu khác" variant="outlined"/>
            <Button style={{width: "20%", margin: "10px"}} variant="contained" color="primary">THÊM HỒ SƠ</Button>
        </div>
    );
}

export default ProfileRequest;

