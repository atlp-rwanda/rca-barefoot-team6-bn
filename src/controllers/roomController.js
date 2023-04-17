/* eslint-disable camelcase */
import Hotel from '../database/models/hotel';
import Room from '../database/models/room';
import { Op } from 'sequelize';

// create a room
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

// function to get all roooms
export async function getRooms (req, res) {
  try {
    const rooms = await Room.findAll();
    res.status(200).json({
      status: true,
      message: 'Rooms found',
      rooms
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Internal server error',
      error
    });
  }
}

// get rooms by search input
export async function getRoomsBySearch (req, res) {
  const { search } = req.query;

  try {
    const rooms = await Room.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${search}%` } },
          { description: { [Op.iLike]: `%${search}%` } }
        ]
      },
      include: {
        model: Hotel,
        attributes: ['name']
      }
    });

    return res.status(200).json({
      status: true,
      message: 'Rooms retrieved successfully',
      data: rooms
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false,
      message: 'Internal server error',
      error: error.message
    });
  }
}
