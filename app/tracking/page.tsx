"use client";

import { useAuth } from '../../components/auth/AuthContext';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

interface OrderItem {
  name: string;
  quantity: number;
}

interface Order {
  id: string;
  status: string;
  location: string;
  customerId: string;
  items?: OrderItem[];
}

const statusSteps = ['Order Placed', 'Processing', 'Shipped', 'In Transit', 'Delivered'];

const getStatusIndex = (status: string) => statusSteps.indexOf(status);

export default function TrackingPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);

  const fetchOrders = useCallback(() => {
    if (user) {
      fetch(`/api/orders?customerId=${user.id}`)
        .then(res => res.json())
        .then(data => setOrders(data));
    }
  }, [user]);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (!user) {
      router.push('/login');
      return;
    }
    if (user.role !== 'customer') {
      router.push('/');
      return;
    }

    fetchOrders();
    const interval = setInterval(fetchOrders, 10000);
    return () => clearInterval(interval);
  }, [isLoading, user, router, fetchOrders]);

  if (isLoading || !user || user.role !== 'customer') {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">My Orders</h1>
            <p className="text-gray-600">Track your fabric orders and delivery status</p>
            <p className="text-sm text-gray-500 mt-2">Status updates automatically every 10 seconds.</p>
          </div>
          <button
            onClick={fetchOrders}
            className="inline-flex items-center justify-center rounded-full bg-plumMid px-5 py-3 text-sm font-medium text-white hover:bg-plumEnd"
          >
            Refresh Status
          </button>
        </div>

        {orders.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No orders found</h3>
            <p className="text-gray-600">You haven't placed any orders yet.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => {
              const items = order.items ?? [];
              return (
                <div key={order.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-gradient-to-r from-plumStart to-plumEnd text-white p-6">
                    <div>
                      <h2 className="text-2xl font-bold">Order #{order.id}</h2>
                      <p className="text-plumLight mt-1">Track your order status below</p>
                    </div>
                  </div>

                  <div className="p-6 border-b">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">Order Status</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                        order.status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
                        order.status === 'Shipped' ? 'bg-purple-100 text-purple-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2 mb-4">
                      {statusSteps.map((step, index) => (
                        <div key={step} className="flex-1 flex flex-col items-center">
                          <div className={`w-4 h-4 rounded-full ${
                            index <= getStatusIndex(order.status) ? 'bg-plumMid' : 'bg-gray-300'
                          }`}></div>
                          <span className="text-xs text-gray-600 mt-1 text-center">{step}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-plumMid rounded-full"></div>
                        <span className="font-medium text-gray-900">Current Location:</span>
                        <span className="text-gray-700">{order.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Items</h3>
                    {items.length === 0 ? (
                      <p className="text-sm text-gray-600">No items available for this order.</p>
                    ) : (
                      <div className="space-y-3">
                        {items.map((item, index) => (
                          <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                            <div>
                              <h4 className="font-medium text-gray-900">{item.name}</h4>
                              <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
