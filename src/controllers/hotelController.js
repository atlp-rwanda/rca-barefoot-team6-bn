import Hotel from '../database/models/hotel';

// create a hotel
export async function createHotel(req, res) {
  const {name, address, email, website} = req.body;
  try {
    const existingHotel = await Hotel.findOne({ where: { email } });
    if (existingHotel) {
        return res.status(400).json({ error: 'Email already registered' });
    }
    const hotel = await Hotel.create({ name, address, email, website });
    res.status(201).json({
      status: true,
      message: "Hotel created successfully",
      hotel,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Internal server error",
      error,
    });
  }
}
// get a hotel
export async function getHotel(req, res) {
  try {
    const hotel = await Hotel.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!hotel) {
      return res.status(404).json({
        status: false,
        message: "Hotel not found",
      });
    }
    res.status(200).json({
      status: true,
      message: "Hotel found",
      hotel,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Internal server error",
      error,
    });
  }
}

// get hotels
export async function getHotels(req, res) {
  try {
    const hotels = await Hotel.findAll();
    res.status(200).json({
      status: true,
      message: "Hotels found",
      hotels,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Internal server error",
      error,
    });
  }
}

// update a hotel
export async function updateHotel(req, res) {
  try {
    const hotel = await Hotel.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!hotel) {
      return res.status(404).json({
        status: false,
        message: "Hotel not found",
      });
    }
    await hotel.update(req.body);
    res.status(200).json({
      status: true,
      message: "Hotel updated successfully",
      hotel,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Internal server error",
      error,
    });
  }
}

// delete a hotel
export async function deleteHotel(req, res) {
  try {
    const hotel = await Hotel.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!hotel) {
      return res.status(404).json({
        status: false,
        message: "Hotel not found",
      });
    }
    await hotel.destroy();
    res.status(200).json({
      status: true,
      message: "Hotel deleted successfully",
      hotel,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Internal server error",
      error,
    });
  }
}
