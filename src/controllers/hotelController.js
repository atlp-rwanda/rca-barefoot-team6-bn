import Hotel from '../database/models/hotel';
const db = require('../database/models');
// create a hotel
export async function createHotel (req, res) {
  const { name, address, email, website } = req.body;
  try {
    const existingHotel = await Hotel.findOne({ where: { email } });
    if (existingHotel) {
      return res.status(400).json({ error: 'Email already registered' });
    }
    const hotel = await Hotel.create({ name, address, email, website });
    res.status(201).json({
      status: true,
      message: 'Hotel created successfully',
      hotel
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Internal server error',
      error
    });
  }
}
// get a hotel
export async function getHotel (req, res) {
  try {
    const hotel = await Hotel.findOne({
      where: {
        id: req.params.id
      }
    });
    if (!hotel) {
      return res.status(404).json({
        status: false,
        message: 'Hotel not found'
      });
    }
    res.status(200).json({
      status: true,
      message: 'Hotel found',
      hotel
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Internal server error',
      error
    });
  }
}

// get hotels
export async function getHotels (req, res) {
  try {
    const hotels = await Hotel.findAll();
    res.status(200).json({
      status: true,
      message: 'Hotels found',
      hotels
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
export async function updateHotel (req, res) {
  try {
    const hotel = await Hotel.findOne({
      where: {
        id: req.params.id
      }
    });
    if (!hotel) {
      return res.status(404).json({
        status: false,
        message: 'Hotel not found'
      });
    }
    await hotel.update(req.body);
    res.status(200).json({
      status: true,
      message: 'Hotel updated successfully',
      hotel
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
export async function deleteHotel (req, res) {
  try {
    const hotel = await Hotel.findOne({
      where: {
        id: req.params.id
      }
    });
    if (!hotel) {
      return res.status(404).json({
        status: false,
        message: 'Hotel not found'
      });
    }
    await hotel.destroy();
    res.status(200).json({
      status: true,
      message: 'Hotel deleted successfully',
      hotel
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Internal server error',
      error
    });
  }
}

// // Controller function to handle searching for related data across all tables
// export async function searchAllTables (req, res) {
//   const { searchText } = req.body; // assuming search text is passed in the request body
//   // const userId = req.user.id; // assuming user ID is stored in the 'id' property of the 'user' object on the request

//   try {
//     // Find all tables in the database and their corresponding Sequelize models
//     const tableNames = await db.sequelize.query(
//       "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'",
//       { type: db.sequelize.QueryTypes.SELECT }
//     );
//     const models = tableNames.map(
//       (tableName) => db.sequelize.models[tableName.table_name]
//     );

//     // Search for records in each table where any of the relevant columns contain the search text
//     const results = await Promise.all(
//       models.map((model) =>
//         model.findAll({
//           where: {
//             [db.Sequelize.Op.or]: [
//               // { [db.Sequelize.Op.col]: 'id' }, userId, // assuming each table has an 'id' column and we want to restrict results to the current user's records
//               // { [db.Sequelize.Op.col]: 'createdBy' }, userId, // assuming each table has a 'createdBy' column indicating the user who created the record
//               // { [db.Sequelize.Op.col]: 'updatedBy' }, userId, // assuming each table has an 'updatedBy' column indicating the user who last updated the record
//               { [db.Sequelize.Op.col]: 'requestId' }, {
//                 [db.Sequelize.Op.iLike]: `%${searchText}%`
//               },
//               { [db.Sequelize.Op.col]: 'owner' }, {
//                 [db.Sequelize.Op.iLike]: `%${searchText}%`
//               },
//               { [db.Sequelize.Op.col]: 'destination' }, {
//                 [db.Sequelize.Op.iLike]: `%${searchText}%`
//               },
//               { [db.Sequelize.Op.col]: 'origin' }, {
//                 [db.Sequelize.Op.iLike]: `%${searchText}%`
//               },
//               { [db.Sequelize.Op.col]: 'duration' }, {
//                 [db.Sequelize.Op.iLike]: `%${searchText}%`
//               },
//               { [db.Sequelize.Op.col]: 'startDate' }, {
//                 [db.Sequelize.Op.iLike]: `%${searchText}%`
//               },
//               { [db.Sequelize.Op.col]: 'requestStatus' }, {
//                 [db.Sequelize.Op.iLike]: `%${searchText}%`
//               }
//               // Add additional columns to search as needed
//             ]
//           }
//         })
//       )
//     );

//     // Combine results from all tables into a single array
//     const flattenedResults = results.reduce(
//       (accumulator, current) => accumulator.concat(current),
//       []
//     );

//     res.status(200).json(flattenedResults);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };

// export async function searchAllTables (req, res) {
//   try {
//     const { query } = req.query;

//     // search for hotels that match the query in the name, address, or description fields
//     const hotels = await Hotel.find({
//       $or: [
//         { name: { $regex: query, $options: 'i' } }, // i for case-insensitive
//         { address: { $regex: query, $options: 'i' } },
//         { description: { $regex: query, $options: 'i' } }
//       ]
//     });

//     // return the matching hotels
//     res.status(200).json(hotels);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error.' });
//   }
// };

export async function Search (req, res, next) {
  try {
    const searchText = req.body;
    const data = await Hotel.findAll({
      where: {
        [db.Sequelize.Op.or]: [
          // { [db.Sequelize.Op.col]: 'id' }, userId, // assuming each table has an 'id' column and we want to restrict results to the current user's records
          // { [db.Sequelize.Op.col]: 'createdBy' }, userId, // assuming each table has a 'createdBy' column indicating the user who created the record
          // { [db.Sequelize.Op.col]: 'updatedBy' }, userId, // assuming each table has an 'updatedBy' column indicating the user who last updated the record
          // { [db.Sequelize.Op.col]: 'requestId' }, {
          //   [db.Sequelize.Op.iLike]: `%${searchText}%`
          // },
          { [db.Sequelize.Op.col]: 'name' }, {
            [db.Sequelize.Op.iLike]: `%${searchText}%`
          },
          { [db.Sequelize.Op.col]: 'address' }, {
            [db.Sequelize.Op.iLike]: `%${searchText}%`
          },
          { [db.Sequelize.Op.col]: 'email' }, {
            [db.Sequelize.Op.iLike]: `%${searchText}%`
          },
          { [db.Sequelize.Op.col]: 'website' }, {
            [db.Sequelize.Op.iLike]: `%${searchText}%`
          }
          // { [db.Sequelize.Op.col]: 'startDate' }, {
          //   [db.Sequelize.Op.iLike]: `%${searchText}%`
          // },
          // { [db.Sequelize.Op.col]: 'requestStatus' }, {
          //   [db.Sequelize.Op.iLike]: `%${searchText}%`
          // }
          // Add additional columns to search as needed
        ]
      }
    });
    res.json(data);
  } catch (error) {
    next(error);
  }
};
