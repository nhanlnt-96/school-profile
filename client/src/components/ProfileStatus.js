import React, { useState } from 'react';
import { Table, Input, Button, Space, Tag, Popconfirm, message } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

const data = [
  {
    key: '1',
    schoolName: 'John Brown',
    quantity: 32,
    profileRequest: 'New York No. 1 Lake Park',
    status: 'HOAN THANH',
  },
  {
    key: '2',
    schoolName: 'Joe Black',
    quantity: 42,
    profileRequest: 'London No. 1 Lake Park',
    status: 'CHUA HOAN THANH',
  },
  {
    key: '3',
    schoolName: 'Jim Green',
    quantity: 32,
    profileRequest: 'Sidney No. 1 Lake Park',
    status: 'HOAN THANH',
  },
  {
    key: '4',
    schoolName: 'Jim Red',
    quantity: 32,
    profileRequest: 'London No. 2 Lake Park',
    status: 'CHUA HOAN THANH',
  },
];

const ProfileStatus = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => (
      <div style={{padding: 8}}>
        <Input
          placeholder={`Tìm ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{width: 188, marginBottom: 8, display: 'block'}}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined/>}
            size="small"
            style={{width: 90}}
          >
            Tìm
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{width: 90}}>
            Mặc định
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({closeDropdown: false});
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Lọc
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{color: filtered ? '#1890ff' : undefined}}/>,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{backgroundColor: '#ffc069', padding: 0}}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText('');
  };

  const columns = [
      {
        title: 'Tên trường',
        dataIndex: 'schoolName',
        key: 'schoolName',
        width: '30%',
        ...getColumnSearchProps('schoolName'),
      },
      {
        title: 'Số lượng hồ sơ',
        dataIndex: 'quantity',
        key: 'quantity',
        width: '10%'
      },
      {
        title: 'Yêu cầu hồ sơ',
        dataIndex: 'profileRequest',
        key: 'profileRequest'
      },
      {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status',
        render: (text, record) => (
          <Tag color={(record.status === 'CHUA HOAN THANH') ? 'volcano' : 'green'} key={record.id}>
            {record.status.toUpperCase()}
          </Tag>
        ),
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <a>Xem hồ sơ</a>
            <a>Chỉnh sửa</a>
            <Popconfirm
              title="Bạn có chắc muốn xoá yêu cầu hồ sơ này ?"
              placement="topLeft"
              onConfirm={() => {
                message.success('Hồ sơ đã được xoá')
              }}
              onCancel={() => {
                message.error('Hồ sơ chưa được xoá')
              }}
              okText="Có"
              cancelText="Không"
            >
              <a>Xoá hồ sơ</a>
            </Popconfirm>
          </Space>
        )
      }
    ]
  ;

  return (
    <Table columns={columns} dataSource={data}/>
  );
}

export default ProfileStatus;
