/* eslint-disable camelcase */
import { sequelize } from '../database/config/db';
import Hotel from '../database/models/hotel';
import Request from '../database/models/request';
import Room from '../database/models/room';

const getMostTravelledDestinations = async (req, res) => {
  try {
    const levelEnum = ['District', 'Hotel']
    if (!levelEnum.includes(req.params.level)) {
      return res.status(400).json({
        status: false,
        message: 'Invalid level'
      });
    }
    const requests = await Request.findAll({
      attributes: [
        'roomId',
        [sequelize.fn('COUNT', sequelize.col('roomId')), 'count']
      ],
      group: ['roomId']
    });

    const mostTravelledDestinations = {}
    const rooms = await Room.findAll({
      attributes: ['id', 'hotel_id'],
      where: {
        id: requests.map(request => request.dataValues.roomId)
      }
    });
    const hotels = await Hotel.findAll({
      attributes: ['id', 'name', 'district'],
      where: {
        id: rooms.map(room => room.dataValues.hotel_id)
      }
    });
    for (let i = 0; i < requests.length; i++) {
      const { roomId, count } = requests[i].dataValues;

      const room = rooms.find(room => room.dataValues.id === roomId);

      const hotel = hotels.find(hotel => hotel.dataValues.id === room.hotel_id);
      const { name, district } = hotel.dataValues;
      const location = req.params.level === 'District' ? district : name;
      if (mostTravelledDestinations[location]) {
        mostTravelledDestinations[location] += Number(count);
      } else {
        mostTravelledDestinations[location] = Number(count);
      }
    }

    res.status(200).json({
      status: true,
      message: 'Most travelled destinations',
      data: Object.keys(mostTravelledDestinations).map(key => ({
        location: key,
        count: mostTravelledDestinations[key]
      })).sort((a, b) => b.count - a.count).slice(0, 5)
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: false,
      message: 'Internal server error',
      error
    });
  }
};

export {
  getMostTravelledDestinations
}
