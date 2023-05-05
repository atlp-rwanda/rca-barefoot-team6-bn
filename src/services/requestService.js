/* eslint-disable no-console */
/* eslint-disable no-useless-catch */
import Request from '../database/models/request';
import Room from '../database/models/room';
import User from '../database/models/user';

/** Class representing request services. */

class RequestService {
  /**
    * Return all requests
    * @returns {[object]} all request.
    */
  static async getAllRequests () {
    try {
      const requests = await Request.findAll();
      return requests;
    } catch (error) {
      throw error;
    }
  }

  /**
 * Get request by id
 * @param number id for request
 * @returns {object} request.
 */
  static async getRequestById (id) {
    try {
      const request = await Request.findOne(
        { where: { id } });
      return request;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get requests by user_id
   * @param number userId for user
   * @returns {[object]} all user requests
   */
  static async getRequestsByUserId (userId) {
    try {
      const requests = await Request.findAll({
        include: [
          { model: User, attributes: ['id'] },
          { model: Room, attributes: ['id'] }
        ],
        where: { userId },
        raw: true
      });

      // Map user and room information to each request object
      for (const request of requests) {
        const user = await User.findByPk(request.userId);
        const room = await Room.findByPk(request.roomId);
        request.User = user;
        request.Room = room;
        requests.userId = user.id
        requests.roomId = room.id
        // eslint-disable-next-line no-unused-expressions
        delete request.RoomId; delete request.UserId;
      }
      return requests
    } catch (error) {
      throw error
    }
  }

  /**
   * Get all requests by roomId for a room
   * @returns {[Object]} all room requests
   */
  static async getRequestsByRoomId (roomId) {
    try {
      const requests = await Request.findAll({ where: { roomId } });
      return requests;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get requests of a hotel
   * @param hotelId hotel id
   * @returns {[object]} all requests in a hotel
   */
  static async getRequestsByHotelId (hotelId) {
    try {
      const allRooms = await Room.findAll({ where: { hotelId } });
      // then find all requests that have roomId in allRooms object
      const requests = await Request.findAll({ where: { roomId: allRooms.map(room => room.id) } });
      return requests;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Filter requests by different params
   * @param {object} {status, roomId, userId, checkIn, checkOut}
   * @returns {[object]} requests that matches all the params
   */
  static async filterRequests (params) {
    try {
      const requests = await Request.findAll({ where: { ...params } });
      return requests;
    } catch (error) {
      throw error;
    }
  }

  /**
   * change request status
   * @param id request id
   * @param status request status
   * @returns {object} updated data
   */
  static async changeRequestStatus (id, status) {
    try {
      const request = await Request.update({ status }, { where: { id } });
      if (request.length > 0) {
        return await this.getRequestById(id)
      }
      return request;
    } catch (error) {
      throw error;
    }
  }

  /**
     * Update request
     * @param number id for request
     * @param {object} request new data
     * @returns {object} updated requests
     */
  static async updateRequest (id, request, userId) {
    try {
      const newRequest = await Request.update(request, { where: { id, userId } });
      return newRequest;
    } catch (error) {
      throw error;
    }
  }

  /**
     * Delete request
     * @param id for request
     * @returns {object} deleted requests
     */
  static async deleteRequest (id) {
    try {
      const request = await Request.destroy({ where: { id } });
      return request;
    } catch (error) {
      throw error;
    }
  }
}

export default RequestService;
