import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



function createData(name, pan, UnivesrDegree, dateofReciving,AreaOfSpecilisation, papers,gudince,designination,year,guestLeture) {
  return {name, pan, UnivesrDegree, dateofReciving,AreaOfSpecilisation, papers,gudince,designination,year,guestLeture };
}

const rows = [
  createData('Frozen',"EQSRT5520K", "nagarujna university","12/10/2006","EEE","publiations","rajKumar","Professor",2010,"guestLecture"),
  createData('Raju',"EQRRT4520K", "anna university","01/08/2003","ECE","publiations","tharun","Asst Professor",2011,"guestLecture"),
  createData('Rani',"JQSRT5530K", "bharathi university","12/10/2004","IT","publiations","vijayareddy","Professor",2007,"guestLecture"),
  createData('Gopal',"OOSRT5520K", "jntuh university","13/10/2006","CSE","publiations","varun","Asst Professor",2009,"guestLecture"),
  createData('Laxmi',"FASRT8440K", "kakathiya university","23/10/2006","Mec","publiations","laxmi","Professor",2010,"guestLecture"),
  createData('Bhanu',"AjSKT4620K", "andhra university","19/10/20010","IIT","publiations","anusha","Professor",2018,"guestLecture"),
];

export default function FacultyAllTable() {


  return (
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Pan No</TableCell>
            <TableCell align="right">University degree</TableCell>
            <TableCell align="right">date of Reciving degree</TableCell>
            <TableCell align="right">Area of specilisation</TableCell>
            <TableCell align="right">Research paper pulication</TableCell>
            <TableCell align="right">Ph.D guidance</TableCell>
            <TableCell align="right">Cuurent Dessigination</TableCell>
            <TableCell align="right">Ph.D granted Year</TableCell>
            <TableCell align="right">Guest Lectures</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.pan}</TableCell>
              <TableCell align="right">{row.UnivesrDegree}</TableCell>
              <TableCell align="right">{row.dateofReciving}</TableCell>
              <TableCell align="right">{row.AreaOfSpecilisation}</TableCell>
              <TableCell align="right">{row.papers}</TableCell>
              <TableCell align="right">{row.gudince}</TableCell>
              <TableCell align="right">{row.designination}</TableCell>
              <TableCell align="right">{row.year}</TableCell>
              <TableCell align="right">{row.guestLeture}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
