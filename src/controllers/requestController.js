import Request from "../database/models/request";
import Room from "../database/models/room";
const { Op } = require('sequelize');
// Create a new request
export const createRequest = async (req, res) => {
    const { user } = req;
    const { room_id } = req.params;
    try {
        const room = await Room.findOne({
            where: { id: room_id }
        });
        if (!room) return res.status(404).json({ message: 'Room not found' });

        const maxAccomodate = room.maxAccomodate;
        const roomIsFull = await isRoomFull(room_id, maxAccomodate);
        if (roomIsFull) {
            return res.status(400).json({ message: 'This room is full' });
        }
        const userHasRequestedRoom = await hasUserRequestedRoom(user.id, room_id);
        if (userHasRequestedRoom) {
            return res.status(400).json({ message: 'You\'ve already requested this room. Please, be patient with us while it is being processed' });
        }
        // Create a new request with the current user's ID
        const request = await Request.create({
            user_id: user.id,
            room_id
        });
        request.UserId = undefined
        request.RoomId = undefined
        return res.status(201).json({
            message: 'Request created successfully',
            data: request
        });
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
};

const isRoomFull = async (roomId, maxAccomodate) => {
    const count = await Request.count({
        where: {
            room_id: roomId,
            status: {
                [Op.ne]: 'CLOSED'
            }
        }
    });
    return count >= maxAccomodate;
};

const hasUserRequestedRoom = async (userId, roomId) => {
    const request = await Request.findOne({
        where: { user_id: userId, room_id: roomId }
    });
    return request !== null;
};


// Update an existing request
export const updateRequest = async (req, res) => {
    const { user } = req;
    const { id } = req.params;
    try {
        // Find the request by ID and user ID
        const request = await Request.findOne({
            where: {
                id,
                user_id: user.id
            }
        });
        // Check if user update the PENDING request only
        //  Check if user is an administrator and trying to update the status to CONFIRMED
        if (!request || request.status !== 'PENDING') {
            return res.status(!request ? 404 : 400).json({ message: !request ? 'Request not found' : 'Request status must be "PENDING" to be updated' });
        }
        if (req.body.status == 'CONFIRMED' && user.role != 'ADMIN') {
            return res.status(401).json({ message: 'You are not authorized to update the request status to CONFIRMED' });
        }
        // Update the request
        request.status = req.body.status;
        await request.save();

        return res.status(201).json({
            message: 'Request updated successfully',
            data: request
        });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ message: 'Server Error', error: err.message });
    }
};
// Get Requests
export async function getRequests(req, res) {
    try {
        const requests = await Request.findAll();
        res.status(200).json({
            status: true,
            message: "Requests found",
            data: requests
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Internal server error",
            error,
        });
    }
}