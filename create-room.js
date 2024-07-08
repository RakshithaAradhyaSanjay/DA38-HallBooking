const express = require('express');
const app = express();
const port = 3000;

// Example in-memory storage for rooms (you can use a database)
const rooms = [];

app.use(express.json());

// API endpoint to create a room
app.post('/create-room', (req, res) => {
  const { seats, amenities, pricePerHour } = req.body;
  const roomId = rooms.length + 1; // Generate a unique room ID

  // Save the room details
  rooms.push({
    roomId,
    seats,
    amenities,
    pricePerHour,
  });

  res.status(201).json({ message: 'Room created successfully', roomId });
});

// API endpoint to book a room
app.post('/book-room', (req, res) => {
    const { customerName, date, startTime, endTime, roomId } = req.body;
  
    // Save the booking details (you can add validation logic here)
    // ...
  
    res.status(201).json({ message: 'Room booked successfully' });
  });
  // API endpoint to list all rooms with booked data
app.get('/list-rooms', (req, res) => {
    // Fetch room data and booking information (you can use your database here)
    // ...
  
    // Example response:
    const roomDataWithBookings = rooms.map((room) => ({
      roomId: room.roomId,
      seats: room.seats,
      amenities: room.amenities,
      pricePerHour: room.pricePerHour,
      // Add booked data (customer name, date, etc.) based on your implementation
    }));
  
    
    res.status(200).json(roomDataWithBookings);
  });


  // API endpoint to list all customers with booked data
app.get('/list-customers', (req, res) => {
  const customerDataWithBookings = bookings.map((booking) => ({
    customerName: booking.customerName,
    roomId: booking.roomId,
    date: booking.date,
    startTime: booking.startTime,
    endTime: booking.endTime,
  }));

  res.status(200).json(customerDataWithBookings);
});

// API endpoint to list customer bookings
app.get('/list-customer-bookings', (req, res) => {
  const customerBookings = {};

  // Group bookings by customer name
  bookings.forEach((booking) => {
    const { customerName, roomId, date, startTime, endTime, bookingId, bookingStatus } = booking;

    if (!customerBookings[customerName]) {
      customerBookings[customerName] = [];
    }

    customerBookings[customerName].push({
      roomId,
      date,
      startTime,
      endTime,
      bookingId,
      bookingStatus,
    });
  });

  res.status(200).json(customerBookings);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
