import React from 'react';
import { Button, MenuItem, TextField } from '@material-ui/core';
import district from './jsonData/district.json';

const ProfileRequest = () => {
  return (
    <div className="profile__request">
      <TextField required style={{width: '40%', margin: '10px'}} size="small" label="Tên trường" variant="outlined"/>
      <TextField
        required
        size="small"
        style={{width: '40%', margin: '10px'}}
        select
        label="Quận/Huyên"
        // value={currency}
        // onChange={handleChange}
        variant="outlined"
      >
        {
          district.map((val) => {
            return <MenuItem value={val.code}>{val.name_with_type}</MenuItem>
          })
        }
      </TextField>
      <TextField required type="number" style={{width: '40%', margin: '10px'}} size="small"
                 label="Số lượng hồ sơ (cuốn)"
                 variant="outlined"/>
      <TextField style={{width: '40%', margin: '10px'}} size="small" label="Số tiết GVNN"
                 variant="outlined"/>
      <TextField
        required
        size="small"
        style={{width: '40%', margin: '10px'}}
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
      <TextField required style={{width: '40%', margin: '10px'}} size="small" label="Yêu cầu khác" variant="outlined"/>
      <Button style={{width: '20%', margin: '10px'}} variant="contained" color="primary">THÊM HỒ SƠ</Button>
    </div>
  );
}

export default ProfileRequest;

