import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import axios from 'axios';
import DepartmentAccordion from './DepartmentAccordion';
import './s1';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const DataDisplay: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const departments = [
    {
      department: "customer_service",
      sub_departments: [
        "support",
        "customer_success"
      ]
    },
    {
      department: "design",
      sub_departments: [
        "graphic_design",
        "product_design",
        "web_design"
      ]
    }
  ];

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const columns: GridColDef[] = [
    { field: 'userId', headerName: 'User ID', width: 150 },
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 500 },
  ];

  return (
    <div style={{ padding: 20 }}>
      <div style={{ height: 600, width: '100%', marginBottom: 20 }}>
        <DataGrid
          rows={posts.map((post) => ({ ...post, id: post.id }))}
          columns={columns}
          pageSizeOptions={[10]}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 10 },
            },
          }}
        />
      </div>
      <DepartmentAccordion departments={departments} />
    </div>
  );
};

export default DataDisplay;
