import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';

interface Department {
  department: string;
  sub_departments: string[];
}

interface DepartmentAccordionProps {
  departments: Department[];
}

const DepartmentAccordion: React.FC<DepartmentAccordionProps> = ({ departments }) => {
  return (
    <div>
      {departments.map((dept, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <AccountCircleIcon style={{ marginRight: 8 }} />
            <Typography>{dept.department}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              {dept.sub_departments.map((subDept, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', paddingLeft: 16 }}>
                  <SubdirectoryArrowRightIcon style={{ marginRight: 8 }} />
                  <Typography>{subDept}</Typography>
                </div>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default DepartmentAccordion;
