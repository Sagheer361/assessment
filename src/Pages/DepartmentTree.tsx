import React from 'react';
import { TreeView, TreeItem } from '@mui/lab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface SubDepartment {
  id: number;
  name: string;
  subDepartments: SubDepartment[];
}

interface Department {
  id: number;
  name: string;
  subDepartments: SubDepartment[];
}

interface DepartmentTreeProps {
  departments: Department[];
}

const DepartmentTree: React.FC<DepartmentTreeProps> = ({ departments }) => {
  const renderTree = (nodes: Department | SubDepartment) => (
    <TreeItem key={nodes.id} nodeId={String(nodes.id)} label={nodes.name}>
      {Array.isArray(nodes.subDepartments) &&
        nodes.subDepartments.length > 0 &&
        nodes.subDepartments.map((node) => renderTree(node))}
    </TreeItem>
  );

  return (
    <TreeView
      aria-label="department tree"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {departments.map((dept) => renderTree(dept))}
    </TreeView>
  );
};

export default DepartmentTree;
