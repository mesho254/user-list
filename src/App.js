import React, { useEffect, useState } from 'react';
import { Table, Modal, Typography, Space, Spin, message } from 'antd';

const { Title, Text } = Typography;

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  // Fetch users from the API on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        message.error('Failed to fetch users!');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // Show modal with selected user details
  const handleRowClick = (user) => {
    setSelectedUser(user);
    setModalVisible(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedUser(null);
  };

  // Define table columns
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
  ];

  return (
    <div style={{ padding: '40px' }}>
      <Title level={2}>User List</Title>
      {loading ? (
        <Spin size="large" style={{ display: 'block', margin: '20px auto' }} />
      ) : (
        <Table
          dataSource={users}
          columns={columns}
          rowKey="id"
          onRow={(record) => ({
            onClick: () => handleRowClick(record),
            style: { cursor: 'pointer' },
          })}
          pagination={{ pageSize: 5 }}
          bordered
        />
      )}

      {selectedUser && (
        <Modal
          title="User Details"
          visible={modalVisible}
          onCancel={handleCloseModal}
          footer={null}
        >
          <Space direction="vertical" size="middle">
            <Text strong>Name:</Text> <Text>{selectedUser.name}</Text>
            <Text strong>Email:</Text> <Text>{selectedUser.email}</Text>
            <Text strong>Address:</Text>
            <Text>
              {selectedUser.address.street}, {selectedUser.address.city}
            </Text>
            <Text strong>Company:</Text>
            <Text>{selectedUser.company.name}</Text>
          </Space>
        </Modal>
      )}
    </div>
  );
};

export default App;
