
// GET users
export async function getUsers(req, res) {
    try {
        const users = await User.findAll();
        return res.status(200).json(users);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server Error', error: error.message });
    }
}
    await user.update({ emailVerified: true, emailVerificationToken: null })
    res.status(200).json({ message: 'Email verification successful.' });
};