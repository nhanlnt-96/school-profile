import React, {useState} from 'react';
import {Button, MenuItem, TextField} from '@material-ui/core';
import district from './jsonData/district.json';

const ProfileRequest = () => {
    const [schoolNameInput, setSchoolNameInput] = useState('');
    const [districtInput, setDistrictInput] = useState('');
    const [quantityInput, setQuantityInput] = useState('');
    const [foreignTeacherInput, setForeignTeacherInput] = useState('');
    const [bookProgram, setBookProgram] = useState('');
    const [otherRequestInput, setOtherRequestInput] = useState('');

    const onSubmitBtnClick=(schoolNameInput, districtInput, quantityInput, foreignTeacherInput, bookProgram, otherRequestInput)=>{
        console.log(`school: ${schoolNameInput}`);
        console.log(`district: ${districtInput}`);
        console.log(`quantity: ${quantityInput}`);
        console.log(`foreign: ${foreignTeacherInput}`);
        console.log(`book: ${bookProgram}`);
        console.log(`other: ${otherRequestInput}`);
    };

    return (
        <div className="profile__request">
            <h2>THÊM HỒ SƠ</h2>
            <div className="request__form">
            <TextField
                required style={{width: '40%', margin: '10px'}}
                size="small"
                label="Tên trường"
                variant="outlined"
                value={schoolNameInput}
                onChange={(e) => setSchoolNameInput(e.target.value)}
            />
            <TextField
                required
                size="small"
                style={{width: '40%', margin: '10px'}}
                select
                label="Quận/Huyên"
                value={districtInput}
                onChange={(e) => setDistrictInput(e.target.value)}
                variant="outlined"
            >
                {
                    district.map((val) => {
                        return <MenuItem value={val.code}>{val.name_with_type}</MenuItem>
                    })
                }
            </TextField>
            <TextField
                required
                type="number"
                style={{width: '40%', margin: '10px'}}
                size="small"
                label="Số lượng hồ sơ (cuốn)"
                variant="outlined"
                value={quantityInput}
                onChange={(e) => setQuantityInput(e.target.value)}
            />
            <TextField
                style={{width: '40%', margin: '10px'}}
                size="small"
                label="Số tiết GVNN"
                variant="outlined"
                value={foreignTeacherInput}
                onChange={(e) => setForeignTeacherInput(e.target.value)}
            />
            <TextField
                required
                size="small"
                style={{width: '40%', margin: '10px'}}
                select
                label="Chương trình sách"
                variant="outlined"
                value={bookProgram}
                onChange={(e) => setBookProgram(e.target.value)}
            >
                <MenuItem value="book">Có sách</MenuItem>
                <MenuItem value="noBook">Không sách</MenuItem>
                <MenuItem value="myAdventure">Chương trình My Adventure</MenuItem>
            </TextField>
            <TextField
                required
                style={{width: '40%', margin: '10px'}}
                size="small"
                label="Yêu cầu khác"
                variant="outlined"
                value={otherRequestInput}
                onChange={(e) => setOtherRequestInput(e.target.value)}
            />
            <Button
                style={{width: '20%', margin: '10px'}}
                variant="contained"
                color="primary"
                onClick={() => {
                    onSubmitBtnClick(schoolNameInput, districtInput, quantityInput, foreignTeacherInput, bookProgram, otherRequestInput)
                }}>THÊM HỒ SƠ</Button>
            </div>
        </div>
    );
}

export default ProfileRequest;

