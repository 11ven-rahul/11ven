import React, { useState } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';


const Demo = ({fileList, onChange, onPreview }) => {
  

  return (
    <ImgCrop rotate>
      <Upload
        action="http://127.0.0.1:5000/upload"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 1 && '+ Upload'}
      </Upload>
    </ImgCrop>
  );
};

export default Demo;