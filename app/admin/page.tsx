"use client";

import { useAuth } from '../../components/auth/AuthContext';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

interface OrderItem {
  name: string;
  quantity: number;
}

interface Order {
  orderDate: string;
  price: number;
  fabricWidth: string;
  deliveryDate: string;
  paymentTerms: string;
  paymentStatus: string;
  advanceAmount: number;
  dueAmount: number;

  id: string;
  status: string;
  location: string;
  customerId: string;

  customer: {
    name: string;
    customerId: string;
  };

  items: OrderItem[];
}
interface Customer {
  id: string;
  customerId: string;
  name: string;
  role: 'customer' | 'staff';
}

const statusOptions = ['Order Placed', 'Processing', 'Shipped', 'In Transit', 'Delivered'];

export default function AdminPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [editingOrder, setEditingOrder] = useState<string | null>(null);
  const [newStatus, setNewStatus] = useState('');
  const [newLocation, setNewLocation] = useState('');

  const [newCustomerId, setNewCustomerId] = useState('');
  const [newCustomerName, setNewCustomerName] = useState('');
  const [newCustomerPassword, setNewCustomerPassword] = useState('');
  const [customerMessage, setCustomerMessage] = useState('');
  const [customerError, setCustomerError] = useState('');
  const [isCreatingCustomer, setIsCreatingCustomer] = useState(false);
  const [customerSearchId, setCustomerSearchId] = useState('');

  const [newOrderId, setNewOrderId] = useState('');
  const [newOrderCustomer, setNewOrderCustomer] = useState('');
  const [newOrderStatus, setNewOrderStatus] = useState('Order Placed');
 
  const [newOrderLocation, setNewOrderLocation] = useState('');
 
  const [newOrderPrice, setNewOrderPrice] = useState('');
const [newOrderDate, setNewOrderDate] = useState('');
const [newDeliveryDate, setNewDeliveryDate] = useState('');
const [newFabricWidth, setNewFabricWidth] = useState('');

const [newPaymentTerms, setNewPaymentTerms] = useState('');
const [newPaymentStatus, setNewPaymentStatus] = useState('Pending');

const [newAdvanceAmount, setNewAdvanceAmount] = useState('');
const [newDueAmount, setNewDueAmount] = useState('');
  const [newOrderItems, setNewOrderItems] = useState<OrderItem[]>([
    { name: '', quantity: 1 },
  ]);
  const [orderMessage, setOrderMessage] = useState('');
  const [orderError, setOrderError] = useState('');
  const [isCreatingOrder, setIsCreatingOrder] = useState(false);

  const fetchOrders = useCallback(() => {
    fetch('/api/orders')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setOrders(data);
        }
      });
  }, []);

  const fetchCustomers = useCallback(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setCustomers(data);
        }
      });
  }, []);

  const refreshAdminData = useCallback(() => {
    fetchOrders();
    fetchCustomers();
  }, [fetchOrders, fetchCustomers]);
useEffect(() => {
  if (isLoading) {
    return;
  }

  if (!user) {
    router.push('/login');
    return;
  }

  if (user.role !== 'staff') {
    router.push('/');
    return;
  }

  fetchOrders();
  fetchCustomers();
}, [isLoading, user, router, fetchOrders, fetchCustomers]);

  const handleUpdate = async (orderId: string) => {
    setOrderMessage('');
    setOrderError('');

    const res = await fetch(`/api/orders/${orderId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus, location: newLocation }),
    });

    if (!res.ok) {
      const body = await res.json().catch(() => null);
      setOrderError(body?.error || 'Unable to update order.');
      return;
    }

    setEditingOrder(null);
    setNewStatus('');
    setNewLocation('');
    setOrderMessage('Order updated successfully.');
    refreshAdminData();
  };

  const handleAddCustomer = async () => {
    const customerId = newCustomerId.trim();
    const customerName = newCustomerName.trim();
    const customerPassword = newCustomerPassword.trim();

    setCustomerMessage('');
    setCustomerError('');

    if (!customerId || !customerName || !customerPassword) {
      setCustomerError('Please fill customer ID, name, and password.');
      return;
    }

    setIsCreatingCustomer(true);

    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: customerId, name: customerName, password: customerPassword }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        setCustomerError(body?.error || 'Unable to create customer.');
        return;
      }

      setNewCustomerId('');
      setNewCustomerName('');
      setNewCustomerPassword('');
      setCustomerMessage('Customer created successfully.');
      refreshAdminData();
    } catch {
      setCustomerError('Unable to create customer. Please try again.');
    } finally {
      setIsCreatingCustomer(false);
    }
  };

  const handleDeleteCustomer = async (customerId: string) => {
    if (!confirm('Delete this customer and all of their orders?')) {
      return;
    }

    const res = await fetch(`/api/users/${customerId}`, {
      method: 'DELETE',
    });

    if (!res.ok) {
      const body = await res.json().catch(() => null);
      alert(body?.error || 'Unable to delete customer');
      return;
    }

    refreshAdminData();
  };

  const handleAddOrder = async () => {
    const orderId = newOrderId.trim();
    const orderLocation = newOrderLocation.trim();

    setOrderMessage('');
    setOrderError('');

    if (!orderId || !newOrderCustomer || !orderLocation || newOrderItems.length === 0) {
      setOrderError('Please fill order ID, customer, location, and at least one item.');
      return;
    }

    const validItems = newOrderItems
      .map(item => ({ ...item, name: item.name.trim() }))
      .filter(item => item.name !== '' && item.quantity > 0);

    if (validItems.length === 0) {
      setOrderError('Please add at least one valid order item.');
      return;
    }

    setIsCreatingOrder(true);

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
  id: orderId,
  customerId: newOrderCustomer,
  status: newOrderStatus,
  location: orderLocation,

  price: Number(newOrderPrice),
    orderDate: newOrderDate,
  deliveryDate: newDeliveryDate,
  fabricWidth: newFabricWidth,

  paymentTerms: newPaymentTerms,
  paymentStatus: newPaymentStatus,

  advanceAmount: Number(newAdvanceAmount),
  dueAmount: Number(newDueAmount),

  items: validItems,

        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        setOrderError(body?.error || 'Unable to create order.');
        return;
      }

      setNewOrderId('');
      setNewOrderCustomer('');
      setNewOrderStatus('Order Placed');
      setNewOrderLocation('');
      setNewOrderPrice('');
setNewOrderDate('');
setNewDeliveryDate('');
setNewFabricWidth('');

setNewPaymentTerms('');
setNewPaymentStatus('Pending');

setNewAdvanceAmount('');
setNewDueAmount('');
      setNewOrderItems([{ name: '', quantity: 1 }]);
      setOrderMessage('Order created successfully.');
      refreshAdminData();
    } catch {
      setOrderError('Unable to create order. Please try again.');
    } finally {
      setIsCreatingOrder(false);
    }
  };

  const updateOrderItem = (index: number, field: keyof OrderItem, value: string | number) => {
    setNewOrderItems(items =>
      items.map((item, i) => i === index ? { ...item, [field]: field === 'quantity' ? Number(value) : value as string } : item)
    );
  };

  const addOrderItem = () => {
    setNewOrderItems(items => [...items, { name: '', quantity: 1 }]);
  };

  const removeOrderItem = (index: number) => {
    setNewOrderItems(items => items.filter((_, i) => i !== index));
  };

  if (isLoading || !user || user.role !== 'staff') {
    return null;
  }

  const customerList = customers.filter(c => c.role === 'customer');
const filteredCustomerList = customerList.filter(customer =>
  customer.customerId
    .toLowerCase()
    .includes(customerSearchId.trim().toLowerCase()) ||

  customer.name
    .toLowerCase()
    .includes(customerSearchId.trim().toLowerCase())
);
  const orderList = orders;

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        <div className="mb-4">
          <h1 className="text-4xl font-bold text-gray-900">Admin Panel</h1>
          <p className="text-gray-600">Manage customers, create orders, and update tracking.</p>
          <button
            onClick={refreshAdminData}
            className="mt-4 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Refresh All Data
          </button>
        </div>

        <section className="bg-white rounded-3xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Create Customer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              value={newCustomerId}
              onChange={(e) => setNewCustomerId(e.target.value)}
              placeholder="Customer ID"
              className="w-full px-4 py-3 border rounded-lg"
            />
            <input
              value={newCustomerName}
              onChange={(e) => setNewCustomerName(e.target.value)}
              placeholder="Customer Name"
              className="w-full px-4 py-3 border rounded-lg"
            />
            <input
              type="password"
              value={newCustomerPassword}
              onChange={(e) => setNewCustomerPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg"
            />
          </div>
          <button
            onClick={handleAddCustomer}
            disabled={isCreatingCustomer}
            className="mt-4 px-6 py-3 bg-plumMid text-white rounded-lg hover:bg-plumEnd disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isCreatingCustomer ? 'Creating...' : 'Create Customer'}
          </button>
          {customerError && (
            <p className="mt-3 text-sm text-red-600">{customerError}</p>
          )}
          {customerMessage && (
            <p className="mt-3 text-sm text-green-700">{customerMessage}</p>
          )}
        </section>

        <section className="bg-white rounded-3xl shadow-md p-6">
          <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <h2 className="text-2xl font-semibold text-gray-900">Customers ({customerList.length})</h2>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <input
                value={customerSearchId}
                onChange={(e) => setCustomerSearchId(e.target.value)}
                placeholder="Search by customer ID"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm sm:w-64"
              />
              <button





                onClick={refreshAdminData}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Refresh Customers
              </button>
            </div>
          </div>
          {filteredCustomerList.length > 0 ? (
            <div className="space-y-4">
              {filteredCustomerList.map((customer) => (
                <div key={customer.id} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center border border-gray-200 rounded-2xl p-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{customer.name}</p>
<p className="text-sm text-gray-500">{customer.customerId}</p>                  </div>
                  <div className="text-sm text-gray-600">Role: {customer.role}</div>
                  <div className="md:col-span-2 text-right">
                    <button
                      onClick={() => handleDeleteCustomer(customer.id)}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      Delete Customer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">
              {customerSearchId.trim() ? 'No customer found for this ID.' : 'No customers found yet.'}
            </p>
          )}
        </section>

        <section className="bg-white rounded-3xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Create Order</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              value={newOrderId}
              onChange={(e) => setNewOrderId(e.target.value)}
              placeholder="Order ID"
              className="w-full px-4 py-3 border rounded-lg"
            />
            <select
              value={newOrderCustomer}
              onChange={(e) => setNewOrderCustomer(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg"
            >
              <option value="">Select Customer</option>
              {customers.filter(c => c.role === 'customer').map((customer) => (
<option key={customer.id} value={customer.id}>
  {customer.name} ({customer.customerId})
</option>             ))}
            </select>
            <select
              value={newOrderStatus}
              onChange={(e) => setNewOrderStatus(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg"
            >
              {statusOptions.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
            <input
              value={newOrderLocation}
              onChange={(e) => setNewOrderLocation(e.target.value)}
              placeholder="Location"
              className="w-full px-4 py-3 border rounded-lg"
            />
            <input
  type="number"
  value={newOrderPrice}
  onChange={(e) => setNewOrderPrice(e.target.value)}
  placeholder="Price"
  className="w-full px-4 py-3 border rounded-lg"
/>

<div className="flex flex-col gap-2">
  <label className="text-sm font-medium text-gray-700">
    Order Date
  </label>

  <input
    type="date"
    value={newOrderDate}
    onChange={(e) => setNewOrderDate(e.target.value)}
    className="w-full px-4 py-3 border rounded-lg"
  />
</div>

<div className="flex flex-col gap-2">
  <label className="text-sm font-medium text-gray-700">
    Delivery Date
  </label>

  <input
    type="date"
    value={newDeliveryDate}
    onChange={(e) => setNewDeliveryDate(e.target.value)}
    className="w-full px-4 py-3 border rounded-lg"
  />
</div>


<input
  value={newFabricWidth}
  onChange={(e) => setNewFabricWidth(e.target.value)}
  placeholder="Fabric Width"
  className="w-full px-4 py-3 border rounded-lg"
/>

<select
  value={newPaymentTerms}
  onChange={(e) => setNewPaymentTerms(e.target.value)}
  className="w-full px-4 py-3 border rounded-lg"
>
  <option value="">Payment Terms</option>

  <option value="Payment in Advance">
    Payment in Advance
  </option>

  <option value="Payment Due at Time of Service">
    Payment Due at Time of Service
  </option>

  <option value="Due Upon Receipt">
    Due Upon Receipt
  </option>

  <option value="End of Month">
    End of Month
  </option>

  <option value="Net 7">Net 7</option>
  <option value="Net 15">Net 15</option>
  <option value="Net 30">Net 30</option>
</select>













          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">Order Items</h3>
              <button
                onClick={addOrderItem}
                className="px-4 py-2 bg-plumMid text-white rounded-lg hover:bg-plumEnd"
              >
                Add Item
              </button>
            </div>
            <div className="space-y-3">
              {newOrderItems.map((item, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-3 items-end">
                  <input
                    value={item.name}
                    onChange={(e) => updateOrderItem(index, 'name', e.target.value)}
                    placeholder="Item Name"
                    className="col-span-3 px-4 py-3 border rounded-lg"
                  />
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) => updateOrderItem(index, 'quantity', Number(e.target.value))}
                    placeholder="Qty"
                    className="px-4 py-3 border rounded-lg"
                  />
                  <button
                    onClick={() => removeOrderItem(index)}
                    className="px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleAddOrder}
            disabled={isCreatingOrder}
            className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isCreatingOrder ? 'Creating...' : 'Create Order'}
          </button>
          {orderError && (
            <p className="mt-3 text-sm text-red-600">{orderError}</p>
          )}
          {orderMessage && (
            <p className="mt-3 text-sm text-green-700">{orderMessage}</p>
          )}
        </section>

        <section className="bg-white rounded-3xl shadow-md p-6">
          <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <h2 className="text-2xl font-semibold text-gray-900">Orders ({orderList.length})</h2>
            <button
              onClick={refreshAdminData}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Refresh Orders
            </button>
          </div>
          <div className="space-y-6">
            {orderList.map((order) => (
              <div key={order.id} className="bg-gray-50 rounded-3xl p-6 border border-gray-200">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Order #{order.id}</h3>
                    <p className="text-sm text-gray-600">
  Customer: {order.customer?.name}
</p>

<p className="text-sm text-gray-500">
  Customer ID: {order.customer?.customerId}
</p>

<p className="text-xs text-gray-400">
  Internal ID: {order.customerId}
</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">{order.status}</span>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">{order.location}</span>
                  </div>
                </div>

                <div className="mt-4 bg-white rounded-2xl p-4 border border-gray-200">
                 <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
  <p><strong>Price:</strong> ₹{order.price || 0}</p>
  <p><strong>Fabric Width:</strong> {order.fabricWidth || '-'}</p>
 <p>
    <strong>Order Date:</strong>{' '}
    {order.orderDate || '-'}
  </p>

  <p>
    <strong>Delivery Date:</strong>{' '}
    {order.deliveryDate || '-'}
  </p>

  <p><strong>Payment Terms:</strong> {order.paymentTerms || '-'}</p>

  

 


</div>
                  <h4 className="font-semibold text-gray-900 mb-3">Items</h4>
                  <div className="space-y-2">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between text-sm text-gray-700">
                        <span>{item.name}</span>
                        <span>Qty: {item.quantity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  {editingOrder === order.id ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                          <select
                            value={newStatus}
                            onChange={(e) => setNewStatus(e.target.value)}
                            className="w-full px-4 py-3 border rounded-lg"
                          >
                            <option value="">Select Status</option>
                            {statusOptions.map(status => (
                              <option key={status} value={status}>{status}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                          <input
                            value={newLocation}
                            onChange={(e) => setNewLocation(e.target.value)}
                            placeholder="New Location"
                            className="w-full px-4 py-3 border rounded-lg"
                          />
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleUpdate(order.id)}
                          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingOrder(null)}
                          className="px-6 py-3 bg-gray-300 text-gray-900 rounded-lg hover:bg-gray-400"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setEditingOrder(order.id);
                        setNewStatus(order.status);
                        setNewLocation(order.location);
                      }}
                      className="px-6 py-3 bg-plumMid text-white rounded-lg hover:bg-plumEnd"
                    >
                      Edit Tracking
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
