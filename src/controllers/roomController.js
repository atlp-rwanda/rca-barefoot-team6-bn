import Hotel from '../database/models/hotel';
import Room from '../database/models/room';

// create a hotel
export async function createRoom (req, res) {
  const { name, description, maxAccomodate, floor, roomType } = req.body;
  const { hotel_id } = req.params
  try {
    const hotel = await Hotel.findOne({
      where: { id: hotel_id }
    });
    if (!hotel) return res.status(404).json({ message: 'Hotel not found' });
    const room = await Room.create({ name, description, maxAccomodate, floor, roomType, hotel_id });
    res.status(201).json({
      status: true,
      message: 'Room created successfully',
      data: room
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Internal server error',
      error: error.message
    });
  }
}
