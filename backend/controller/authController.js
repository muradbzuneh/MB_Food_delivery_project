import User from "../models/UserModel.js";

export const syncUser = async (req, res) => {
  try {
    const { uid, email, name } = req.user;

    let user = await User.findOne({ firebaseUid: uid });

    if (!user) {
      user = await User.create({
        firebaseUid: uid,
        email,
        name,
        role: "user",
      });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "User sync failed" });
  }
};