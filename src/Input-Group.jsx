// import { DatePicker } from 'antd';
// ReactDOM.render(<DatePicker />, mountNode);
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less
import { Input } from 'antd';
import React from 'react';
const { TextArea } = Input;


const onChange = (e) => {
  console.log(e);
};

const InputBox = () => (
  <>
    <Input placeholder="input with clear icon" allowClear onChange={onChange} onClick/>
    <br />
    <br />
    <TextArea placeholder="textarea with clear icon" allowClear onChange={onChange} />
    <Input placeholder="input with clear icon" allowClear onChange={onChange} />
    <br />
    <br />
    <TextArea placeholder="textarea with clear icon" allowClear onChange={onChange} />
    <Input placeholder="input with clear icon" allowClear onChange={onChange} />
    <br />
    <br />
    <TextArea placeholder="textarea with clear icon" allowClear onChange={onChange} />
    <Input placeholder="input with clear icon" allowClear onChange={onChange} />
    <br />
    <br />
    <TextArea placeholder="textarea with clear icon" allowClear onChange={onChange} />
    <Input placeholder="input with clear icon" allowClear onChange={onChange} />
    <br />
    <br />
    <TextArea placeholder="textarea with clear icon" allowClear onChange={onChange} />
  </>
);

export default InputBox;
