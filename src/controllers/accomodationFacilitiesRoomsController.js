/* eslint-disable camelcase */
import AccomodationFacilityRoom from '../database/models/accomodationfacilityroom';
import AccommodationFacility from '../database/models/accommodationfacility';

// create a room
export async function createAccomodationFacilityRoom (req, res) {
  const { name, accomodationFacilityRoomType } = req.body;
  const { accomodationFacility_id } = req.params
  try {
    const accommodationFacility = await AccommodationFacility.findOne({
      where: { id: accomodationFacility_id }
    });
    if (!accommodationFacility) return res.status(404).json({ message: ' Accomodation not found' });
    const accomodationFacilityRoom = await AccomodationFacilityRoom.create({ name, accomodationFacilityRoomType, accomodationFacility_id });
    res.status(201).json({
      status: true,
      message: ' Accomodation Room created successfully',
      data: accomodationFacilityRoom
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Internal server error',
      error: error.message
    });
  }
}
