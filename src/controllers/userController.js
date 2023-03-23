import User from '../database/models/user';
import jwt from 'jsonwebtoken';


// login user
export async function loginUser (req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const isMatch = await user.isValidPassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    user.set("isLoggedIn",true);
    await user.save()
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN
    });
    return res.json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error', error: error.message });
  }
}


// get user profile
export async function getMyProfile(req, res) {
  try {
    let user = await User.findOne({ where: { id: req.user.id } });
    delete user.dataValues.password;
    if (!user)
      return res.status(404).send(API_RESPONSE(false, "User not found", 404));
    return res.send(user);
  } catch (e) {
    return res.status(500).send(e);
  }
}

// GET users
export async function getUsers (req, res) {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error', error: error.message });
  }
}
