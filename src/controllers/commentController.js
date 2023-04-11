/* eslint-disable camelcase */
import Comment from '../database/models/comment';
import User from '../database/models/user'
import Request from '../database/models/request';

// get comments
export async function getComments (req, res) {
  try {
    const conditions = {
      request_id: req.params.requestId || undefined,
      parent_comment_id: null,
      is_deleted: false
    };
    if (!conditions.request_id) delete conditions.request_id;
    const comments = await Comment.findAll({
      where: conditions,
      include: [
        {
          model: User,
          attributes: ['firstName', 'lastName', 'email']
        }
      ]
    });
    // return the comments
    return res.status(200).json({
      status: 200,
      message: 'Comments retrieved successfully',
      data: comments
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: 'Internal server error',
      data: error
    });
  }
}

export async function createComment (req, res) {
  try {
    const { comment_text, request_id, parent_comment_id } = req.body;
    if (parent_comment_id) {
      const comment = await Comment.findOne({
        where: {
          id: parent_comment_id,
          request_id
        }
      });
      if (!comment) {
        return res.status(404).json({
          status: 404,
          message: 'Comment not found'
        });
      }
    }

    // check if the request exists
    if (request_id) {
      const request = await Request.findOne({
        where: {
          id: request_id
        }
      });
      if (!request) {
        return res.status(404).json({
          status: 404,
          message: 'Request not found'
        });
      }
    }

    const requestObj = {
      comment_text,
      request_id,
      user_id: req.user.id,
      parent_comment_id,
      timestamp: new Date()
    }

    const comment = await Comment.create(requestObj);
    return res.status(201).json({
      status: 201,
      message: 'Comment created successfully',
      data: comment
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: 'Internal server error',
      data: error
    });
  }
}

// update a comment
export async function updateComment (req, res) {
  try {
    const { comment_text } = req.body;
    const comment = await Comment.findOne({
      where: {
        id: req.params.commentId,
        is_deleted: false
      }
    });
    if (!comment) {
      return res.status(404).json({
        status: 404,
        message: 'Comment not found'
      });
    }

    if (comment.user_id !== req.user.id) {
      return res.status(403).json({
        status: 403,
        message: 'You are not authorized to perform this action'
      });
    }

    await comment.update({
      comment_text
    });
    return res.status(200).json({
      status: 200,
      message: 'Comment updated successfully',
      data: comment
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: 'Internal server error',
      data: error
    });
  }
}

// delete a comment
export async function deleteComment (req, res) {
  try {
    const comment = await Comment.findOne({
      where: {
        id: req.params.commentId,
        is_deleted: false
      }
    });
    if (!comment) {
      return res.status(404).json({
        status: 404,
        message: 'Comment not found'
      });
    }
    if (comment.user_id !== req.user.id) {
      return res.status(403).json({
        status: 403,
        message: 'You are not authorized to perform this action'
      });
    }
    await comment.update({
      is_deleted: true
    });
    return res.status(200).json({
      status: 200,
      message: 'Comment deleted successfully'
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: 'Internal server error',
      data: error
    });
  }
}

// get a comment
export async function getComment (req, res) {
  try {
    const comment = await Comment.findOne({
      where: {
        id: req.params.commentId,
        is_deleted: false
      },
      include: [
        {
          model: User,
          attributes: ['firstName', 'lastName', 'email']
        }
      ]
    });
    if (!comment) {
      return res.status(404).json({
        status: 404,
        message: 'Comment not found'
      });
    }
    return res.status(200).json({
      status: 200,
      message: 'Comment retrieved successfully',
      data: comment
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: 'Internal server error',
      data: error
    });
  }
}

// get replies
export async function getCommentWithReplies (req, res) {
  try {
    // comment only contains id of the parent comment
    const comment = await Comment.findOne({
      where: {
        id: req.params.commentId,
        is_deleted: false
      },
      include: [
        {
          model: User,
          attributes: ['firstName', 'lastName', 'email']
        }
      ]
    });

    if (!comment) {
      return res.status(404).json({
        status: 404,
        message: 'Comment not found'
      });
    }

    const replies = await Comment.findAll({
      where: {
        parent_comment_id: comment.id,
        is_deleted: false
      },
      include: [
        {
          model: User,
          attributes: ['firstName', 'lastName', 'email']
        }
      ]
    });

    // return the replies
    return res.status(200).json({
      status: 200,
      message: 'Replies retrieved successfully',
      data: replies
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: 'Internal server error',
      data: error
    });
  }
}
