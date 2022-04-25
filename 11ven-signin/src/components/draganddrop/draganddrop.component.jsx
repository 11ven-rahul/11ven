import React from 'react';
import 'antd/dist/antd.css';
// import './index.css';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;



const DragAndDrop = ({ props }) => (
  <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Choose a .pdf file of your Resume
    </p>
  </Dragger>
);

export default DragAndDrop;