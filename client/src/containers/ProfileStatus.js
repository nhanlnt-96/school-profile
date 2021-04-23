import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(
  date,
  schoolName,
  district,
  quantity,
  foreignLesson,
  book,
  note,
  status
) {
  return {
    date,
    schoolName,
    district,
    quantity,
    foreignLesson,
    book,
    note,
    status,
  };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, "nhan", "le nguyen thien nhan", true),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, "nhan", "thien", true),
  createData("Eclair", 262, 16.0, 24, 6.0, "nhan", "thien", false),
  createData("Cupcake", 305, 3.7, 67, 4.3, "nhan", "thien", true),
  createData("Gingerbread", 356, 16.0, 49, 3.9, "nhan", "thien", false),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const ProfileStatus = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center" width="200px">Ngày yêu cầu</StyledTableCell>
            <StyledTableCell align="center">Tên trường</StyledTableCell>
            <StyledTableCell align="center">Quận/Huyện</StyledTableCell>
            <StyledTableCell align="center">Số lượng hồ sơ</StyledTableCell>
            <StyledTableCell align="center">Số tiết GVNN</StyledTableCell>
            <StyledTableCell align="center">Chương trình sách</StyledTableCell>
            <StyledTableCell align="center">Yêu cầu khác</StyledTableCell>
            <StyledTableCell align="center">Trạng thái</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.schoolName}>
              <StyledTableCell component="th" scope="row">
                {row.date}
              </StyledTableCell>
              <StyledTableCell align="left">{row.schoolName}</StyledTableCell>
              <StyledTableCell align="center">{row.district}</StyledTableCell>
              <StyledTableCell align="center">{row.quantity}</StyledTableCell>
              <StyledTableCell align="center">
                {row.foreignLesson}
              </StyledTableCell>
              <StyledTableCell align="center">{row.book}</StyledTableCell>
              <StyledTableCell align="center">{row.note}</StyledTableCell>
              <StyledTableCell align="center">
                <p
                  className={
                    row.status ? "status-complete" : "status-not-complete"
                  }
                >
                  {row.status ? "Đã hoàn thành" : "Chưa hoàn thành"}
                </p>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProfileStatus;
