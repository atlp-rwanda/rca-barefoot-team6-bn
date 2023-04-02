import Feedback from '../database/models/feedback';

export async function createFeedback (req, res) {
  try {
    const userId = req.user.id;
    const { hotelId, subject, feedback } = req.body;
    const feed = await Feedback.create({ userId, hotelId, subject, feedback });
    return res.status(201).json({
      message: 'Feedback saved',
      data: feed
    });
  } catch (e) {
    return res.status(500).send(e);
  }
}

export async function getFeedbacks (req, res) {
  try {
    const feedbacks = await Feedback.findAll();
    return res.status(200).json(feedbacks);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error', error: error.message });
  }
}
export async function updateFeedback (req, res) {
  try {
    const feed = await Feedback.findOne({ where: { id: req.params.id } });
    const { subject, feedback } = req.body;
    if (typeof subject !== 'undefined') {
      feed.subject = subject;
      feed.update()
      feed.save();
    }
    if (typeof feedback !== 'undefined') {
      feed.feedback = feedback;
      feed.update()
      feed.save();
    }
    return res.status(200).json({ message: 'feedback updated' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error', error: error.message });
  }
}
export async function deleteFeedback (req, res) {
  try {
    const feed = await Feedback.findOne({ where: { id: req.params.id } });
    if (!feed) {
      return res.status(404).json({
        status: false,
        message: 'Feedback not found'
      });
    }
    await feed.destroy();
    return res.status(200).json({ message: 'feedback deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error', error: error.message });
  }
}
