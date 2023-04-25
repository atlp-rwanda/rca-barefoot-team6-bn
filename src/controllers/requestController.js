import REQUESTS_ENUM from '../database/enums/request';
import Request from '../database/models/request';
import Room from '../database/models/room';

import RequestService from '../services/requestService';
const { Op } = require('sequelize');

const isRoomFull = async (roomId, maxAccomodate) => {
  const count = await Request.count({
    where: {
      roomId,
      status: {
        [Op.ne]: 'CLOSED'
      }
    }
  });
  return count >= maxAccomodate;
}

/**
 * @class RequestController
 * @classdesc RequestController
 */
class RequestController {
  /**
    * Creates a new request.
    * @param {object} request details of a request.
    * @returns {object} requests new request.
    */
  static async createRequest (req, res) {
    const { user } = req;
    const { roomId, checkIn, checkOut } = req.body;
    try {
      if (req.body.status != 'PENDING') {
        return res.status(400).json({
          status: 400,
          message: 'You are not permitted to change default request status'
        });
      }
      const room = await Room.findOne({
        where: { id: roomId }
      });
      if (!room) return res.status(404).json({ message: 'Room not found' });

      // verify if the room is already booked by another user
      const booked = await Request.findOne({
        where: { roomId, status: REQUESTS_ENUM.APPROVED }
      });
      if (booked) return res.status(400).json({ message: 'This room is already booked' });

      // verify if the user is not requesting the room the second time
      const userHasRequestedRoom = await Request.findOne({
        where: { userId: user.id, roomId, status: REQUESTS_ENUM.PENDING }
      });

      if (userHasRequestedRoom) {
        return res.status(400).json({ message: 'You\'ve already requested this room. Please, be patient with us while it is being processed' });
      }
      const maxAccomodate = room.maxAccomodate;
      const roomIsFull = await isRoomFull(roomId, maxAccomodate);
      if (roomIsFull) {
        return res.status(400).json({ message: 'This room is full' });
      }

      const request = await Request.create({
        userId: user.id, roomId, checkIn, checkOut
      });
      return res.status(201).json({
        status: 201,
        message: 'Request created successfully',
        data: request
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: 'Server error',
        error: error.message
      });
    }
  }

  static async getAllRequests (req, res) {
    try {
      const requests = await RequestService.getAllRequests();
      return res.status(200).json({
        status: 200,
        message: 'Requests retrieved successfully',
        data: requests
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: 'Server error',
        error: error.message
      });
    }
  }

  static async getRequestById (req, res) {
    try {
      const request = await RequestService.getRequestById(req.params.id);
      if (!request) {
        return res.status(404).json({
          status: 404,
          message: 'Request not found'
        });
      }
      return res.status(200).json({
        status: 200,
        message: 'Request retrieved successfully',
        data: request
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: 'Server error',
        error: error.message
      });
    }
  }

  static async getRequestsByUserId (req, res) {
    try {
      const requests = await RequestService.getRequestsByUserId(req.params.userId);
      return res.status(200).json({
        status: 200,
        message: 'Requests retrieved successfully',
        data: requests
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: 'Server error',
        error: error.message
      });
    }
  }

  static async getRequestsByRoomId (req, res) {
    try {
      const requests = await RequestService.getRequestsByRoomId(req.params.roomId);
      return res.status(200).json({
        status: 200,
        message: 'Requests retrieved successfully',
        data: requests
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: 'Server error',
        error: error.message
      });
    }
  }

  static async getRequestsByHotelId (req, res) {
    try {
      const requests = await RequestService.getRequestsByHotelId(req.params.hotelId);
      return res.status(200).json({
        status: 200,
        message: 'Requests retrieved successfully',
        data: requests
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: 'Server error',
        error: error.message
      });
    }
  }

  static async filterRequestsByParams (req, res) {
    try {
      const requests = await RequestService.filterRequestsByParams(req.query);
      return res.status(200).json({
        status: 200,
        message: 'Requests retrieved successfully',
        data: requests
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: 'Server error',
        error: error.message
      });
    }
  }

  static async updateRequest (req, res) {
    const { user } = req;
    try {
      if (req.body.status) {
        return res.status(400).json({
          status: 400,
          message: 'You are not permitted to update the status of a request'
        });
      }
      const requests = await RequestService.getRequestById(req.params.id);
      if (!requests) {
        return res.status(404).json({
          status: 404,
          message: 'Request not found'
        });
      }
      const updatedRequest = await RequestService.updateRequest(req.params.id, req.body, user.id);
      return res.status(200).json({
        status: 200,
        message: 'Request updated successfully',
        data: updatedRequest
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: 'Server error',
        error: error.message
      });
    }
  }

  static async deleteRequest (req, res) {
    try {
      const requests = await RequestService.getRequestById(req.params.id);
      if (!requests) {
        return res.status(404).json({
          status: 404,
          message: 'Request not found'
        });
      }

      const updatedRequest = await RequestService.deleteRequest(req.params.id);
      return res.status(200).json({
        status: 200,
        message: 'Request deleted successfully',
        data: updatedRequest
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: 'Server error',
        error: error.message
      });
    }
  }

  static async approveRequest (req, res) {
    try {
      const requests = await RequestService.getRequestById(req.params.id);
      if (!requests) {
        return res.status(404).json({
          status: 404,
          message: 'Request not found'
        });
      }
      // eslint-disable-next-line eqeqeq
      if (requests.status != 'PENDING') {
        return res.status(400).json({ message: 'Request status must be "PENDING" to be updated' });
      }
      const updatedRequest = await RequestService.changeRequestStatus(req.params.id, 'APPROVED')
      return res.status(200).json({
        status: 200,
        message: 'Request approved successfully',
        data: updatedRequest
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: 'Server error',
        error: error.message
      });
    }
  }

  static async rejectRequest (req, res) {
    try {
      const requests = await RequestService.getRequestById(req.params.id);
      if (!requests) {
        return res.status(404).json({
          status: 404,
          message: 'Request not found'
        });
      }
      if (requests.status != 'PENDING') {
        return res.status(400).json({ message: 'Request status must be "PENDING" to be updated' });
      }
      const updatedRequest = await RequestService.changeRequestStatus(req.params.id, 'REJECTED')
      return res.status(200).json({
        status: 200,
        message: 'Request rejected successfully',
        data: updatedRequest
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: 'Server error',
        error: error.message
      });
    }
  }

  static async cancelRequest (req, res) {
    try {
      const requests = await RequestService.getRequestById(req.params.id);
      if (!requests) {
        return res.status(404).json({
          status: 404,
          message: 'Request not found'
        });
      }
      if (requests.status != 'PENDING') {
        return res.status(400).json({ message: 'Request status must be "PENDING" to be updated' });
      }
      const request = await RequestService.changeRequestStatus(req.params.id, 'CANCELLED')
      return res.status(200).json({
        status: 200,
        message: 'Request closed successfully',
        data: request
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: 'Server error',
        error: error.message
      });
    }
  }
}

export default RequestController;
