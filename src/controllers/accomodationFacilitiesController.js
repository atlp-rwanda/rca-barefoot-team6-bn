import AccommodationFacility from '../database/models/accommodationfacility';

// create a accommodation facility
export async function createAccomodationFacility (req, res) {
  try {
    const existingAccomodationFacility = await AccommodationFacility.findOne({ where: { name: req.body.name } });
    if (existingAccomodationFacility) {
      return res.status(400).json({ error: 'Accomodation already registered' });
    }
    const accommodationFacility = await AccommodationFacility.create(req.body);
    res.status(201).json({
      status: true,
      message: 'Accomodation created successfully',
      accommodationFacility
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Internal server error',
      error
    });
  }
}
// get an accomodation facility
export async function getAccomodationFacilityById (req, res) {
  try {
    const accommodationFacility = await AccommodationFacility.findOne({
      where: {
        id: req.params.id
      }
    });
    if (!accommodationFacility) {
      return res.status(404).json({
        status: false,
        message: 'Accomodation not found'
      });
    }
    res.status(200).json({
      status: true,
      message: 'Hotel found',
      accommodationFacility
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Internal server error',
      error
    });
  }
}

// get accomodation facilities
export async function getAccomodationFacilities (req, res) {
  try {
    const accommodationFacilities = await AccommodationFacility.findAll();
    res.status(200).json({
      status: true,
      message: 'Hotels found',
      accommodationFacilities
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Internal server error',
      error
    });
  }
}

// update a hotel
export async function updateAccomodationFacility (req, res) {
  try {
    const accommodationFacility = await AccommodationFacility.findOne({
      where: {
        id: req.params.id
      }
    });
    if (!accommodationFacility) {
      return res.status(404).json({
        status: false,
        message: 'Accomodation not found'
      });
    }
    await accommodationFacility.update(req.body);
    res.status(200).json({
      status: true,
      message: 'Accomodation updated successfully',
      accommodationFacility
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Internal server error',
      error
    });
  }
}

// delete a hotel
export async function deleteAccomodationFacility (req, res) {
  try {
    const accommodationFacility = await AccommodationFacility.findOne({
      where: {
        id: req.params.id
      }
    });
    if (!accommodationFacility) {
      return res.status(404).json({
        status: false,
        message: 'Hotel not found'
      });
    }
    await accommodationFacility.destroy();
    res.status(200).json({
      status: true,
      message: 'Hotel deleted successfully',
      accommodationFacility
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Internal server error',
      error
    });
  }
}
