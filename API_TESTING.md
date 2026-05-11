# API Testing Examples

Test your database-connected API endpoints using these curl commands.

## Prerequisites

- Server running: `npm run dev`
- Database connected and tables created: `npm run db:push`

---

## Users API

### 1. Create a User
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123",
    "name": "John Doe",
    "role": "customer"
  }'
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": "cl7x8y9z0a",
    "email": "john@example.com",
    "name": "John Doe",
    "role": "customer"
  }
}
```

### 2. Get All Users
```bash
curl http://localhost:3000/api/users
```

**Response:**
```json
[
  {
    "id": "cl7x8y9z0a",
    "email": "john@example.com",
    "name": "John Doe",
    "role": "customer"
  }
]
```

### 3. Get Single User
```bash
curl http://localhost:3000/api/users/cl7x8y9z0a
```

### 4. Update User
```bash
curl -X PUT http://localhost:3000/api/users/cl7x8y9z0a \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Smith",
    "email": "john.smith@example.com"
  }'
```

### 5. Delete User
```bash
curl -X DELETE http://localhost:3000/api/users/cl7x8y9z0a
```

---

## Orders API

### 1. Create an Order
```bash
curl -X POST http://localhost:3000/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "customerId": "cl7x8y9z0a",
    "location": "New York, USA",
    "status": "pending",
    "items": [
      {"name": "Cotton Fabric", "quantity": 10, "price": 25.50},
      {"name": "Silk Blend", "quantity": 5, "price": 45.00}
    ]
  }'
```

**Response:**
```json
{
  "success": true,
  "order": {
    "id": "cla1b2c3d4",
    "customerId": "cl7x8y9z0a",
    "status": "pending",
    "location": "New York, USA",
    "items": [
      {"id": "item1", "name": "Cotton Fabric", "quantity": 10, "price": 25.50},
      {"id": "item2", "name": "Silk Blend", "quantity": 5, "price": 45.00}
    ]
  }
}
```

### 2. Get All Orders
```bash
curl http://localhost:3000/api/orders
```

### 3. Get Orders for Specific Customer
```bash
curl http://localhost:3000/api/orders?customerId=cl7x8y9z0a
```

### 4. Get Single Order
```bash
curl http://localhost:3000/api/orders/cla1b2c3d4
```

### 5. Update Order
```bash
curl -X PUT http://localhost:3000/api/orders/cla1b2c3d4 \
  -H "Content-Type: application/json" \
  -d '{
    "status": "shipped",
    "location": "Los Angeles, USA"
  }'
```

### 6. Delete Order
```bash
curl -X DELETE http://localhost:3000/api/orders/cla1b2c3d4
```

---

## Contact API

### Submit Contact Form
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Smith",
    "email": "jane@example.com",
    "subject": "Custom Fabric Inquiry",
    "message": "I am interested in custom fabric solutions for my business. Can you help?",
    "phone": "+1-555-0123"
  }'
```

**Response:**
```json
{
  "success": true,
  "message": "Message received"
}
```

---

## Using Postman

Instead of curl, you can use Postman for easier testing:

1. Open Postman
2. Create a new request
3. Select method (GET, POST, PUT, DELETE)
4. Enter URL: `http://localhost:3000/api/...`
5. Go to Body tab → Select "raw" and "JSON"
6. Paste the JSON data
7. Click Send

---

## Error Examples

### Missing Required Field
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com"}'
```

**Response:**
```json
{
  "error": "Missing required fields: email, password, name"
}
```

### User Not Found
```bash
curl http://localhost:3000/api/users/invalid-id
```

**Response:**
```json
{
  "error": "User not found"
}
```

### Database Connection Error
```json
{
  "error": "Failed to fetch users: Database connection failed"
}
```

---

## Tips for Testing

1. **Save User ID**: After creating a user, save the returned `id` for use in order creation
2. **Check Status**: HTTP status codes:
   - `200` = Success
   - `201` = Created
   - `400` = Bad Request (missing fields)
   - `404` = Not Found
   - `500` = Server Error

3. **Use Environment Variables**: In Postman, set:
   - `BASE_URL`: `http://localhost:3000`
   - `USER_ID`: `<id from create response>`

4. **Pretty Print JSON**: Use `| jq` with curl:
   ```bash
   curl http://localhost:3000/api/users | jq .
   ```

---

## Debugging

If you get an error, check:

1. **Server is running**: `npm run dev`
2. **Database is connected**: Check DATABASE_URL in `.env.local`
3. **Tables are created**: Run `npm run db:push`
4. **Correct URL**: Check spelling and ID
5. **Request format**: Check JSON is valid
6. **Prisma Studio**: Run `npm run db:studio` to verify data

---

## Next: Advanced Testing

Once basic CRUD works, test:
- Relationships (orders linked to users)
- Cascading deletes (delete user → orders deleted)
- Filtering (get orders by customerId)
- Error handling (invalid data)
- Performance (bulk operations)
