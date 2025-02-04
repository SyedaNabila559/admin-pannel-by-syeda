import React from 'react';
import Navbar from './Navbar'
const UserAccountList = () => {
  // Static data of 15 users
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+1234567890', address: '123 Street, City', joinDate: '2023-01-01' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '+0987654321', address: '456 Avenue, Town', joinDate: '2023-02-15' },
    { id: 3, name: 'Michael Johnson', email: 'michael@example.com', phone: '+1122334455', address: '789 Road, Village', joinDate: '2023-03-10' },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com', phone: '+2233445566', address: '101 Boulevard, Metro', joinDate: '2023-04-20' },
    { id: 5, name: 'David Wilson', email: 'david@example.com', phone: '+3344556677', address: '202 Parkway, Suburb', joinDate: '2023-05-05' },
    { id: 6, name: 'Sophia Martinez', email: 'sophia@example.com', phone: '+4455667788', address: '303 Crescent, City', joinDate: '2023-06-30' },
    { id: 7, name: 'Daniel Taylor', email: 'daniel@example.com', phone: '+5566778899', address: '404 Square, Town', joinDate: '2023-07-10' },
    { id: 8, name: 'Olivia Anderson', email: 'olivia@example.com', phone: '+6677889900', address: '505 Hill, Village', joinDate: '2023-08-15' },
    { id: 9, name: 'James Thomas', email: 'james@example.com', phone: '+7788990011', address: '606 Loop, Metro', joinDate: '2023-09-25' },
    { id: 10, name: 'Ava Jackson', email: 'ava@example.com', phone: '+8899001122', address: '707 Ring, Suburb', joinDate: '2023-10-12' },
    { id: 11, name: 'Lucas White', email: 'lucas@example.com', phone: '+9900112233', address: '808 Circle, City', joinDate: '2023-11-01' },
    { id: 12, name: 'Mia Harris', email: 'mia@example.com', phone: '+1011122334', address: '909 Highway, Town', joinDate: '2023-12-05' },
    { id: 13, name: 'Ethan Clark', email: 'ethan@example.com', phone: '+1112233445', address: '1001 Field, Village', joinDate: '2024-01-10' },
    { id: 14, name: 'Isabella Lewis', email: 'isabella@example.com', phone: '+1223344556', address: '1102 Garden, Suburb', joinDate: '2024-02-18' },
    { id: 15, name: 'Charlotte Young', email: 'charlotte@example.com', phone: '+1334455667', address: '1203 Lane, City', joinDate: '2024-03-22' },
  ];

  return (
    <>
     <Navbar />
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">User Accounts</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gradient-to-r from-rose-600 to-pink-500 text-white">
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Phone</th>
              <th className="py-3 px-4 text-left">Address</th>
              <th className="py-3 px-4 text-left">Join Date</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-b hover:bg-gray-100">
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.phone}</td>
                <td className="py-2 px-4">{user.address}</td>
                <td className="py-2 px-4">{user.joinDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default UserAccountList;