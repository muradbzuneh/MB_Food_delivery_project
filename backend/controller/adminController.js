import User from "../models/UserModel.js";

export const registerAdmin = async (req, res) => {
  try {
    const { adminSecret } = req.body;

    // 🔐 protect admin creation
    if (adminSecret !== process.env.ADMIN_SECRET) {
      return res.status(403).json({ message: "Invalid admin secret" });
    }

    const { uid, email } = req.user;

    let user = await User.findOne({ firebaseUid: uid });

    if (!user) {
      // create user as admin
      user = await User.create({
        firebaseUid: uid,
        email,
        role: "admin",
      });
    } else {
      // upgrade role if user exists
      user.role = "admin";
      await user.save();
    }

    res.json({
      message: "Admin registered successfully",
      user,
    });
  } catch (err) {
    res.status(500).json({ message: "Admin registration failed" });
  }
};