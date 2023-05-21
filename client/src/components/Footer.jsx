import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const CustomFooter = () => {
  return (
    <Footer className='sha' style={{ textAlign: 'center' }}>
      © Avez Blog ❤️ 2023. All Rights Reserved.
    </Footer>
  );
};

export default CustomFooter;
