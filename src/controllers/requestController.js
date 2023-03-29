import RequestService from '../services/requestService';

/**
 * @class RequestController
 * @classdesc RequestController
 */

class RequestController {
  static async createRequest (req, res) {
    try {
      const request = await RequestService.createRequest(req.body);
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
    try {
      const request = await RequestService.updateRequest(req.params.id, req.body);
      return res.status(200).json({
        status: 200,
        message: 'Request updated successfully',
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

  static async deleteRequest (req, res) {
    try {
      const request = await RequestService.deleteRequest(req.params.id);
      return res.status(200).json({
        status: 200,
        message: 'Request deleted successfully',
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
