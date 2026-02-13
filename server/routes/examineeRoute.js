const Examinee = require('../models/Examinee');
const express = require('express');
const router = express.Router();

// =============================
// Register Examinee
// =============================
router.post('/', async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }

        // Check if already exists
        const ex = await Examinee.findOne({ email }); // ✅ fixed await
        if (ex) {
            return res.status(400).json({ message: "Details already exist" });
        }

        const user = new Examinee(req.body);
        await user.save();

        return res.status(201).json({ message: "Registered Successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server Error" });
    }
});

// =============================
// Get All Examinees
// =============================
router.get('/', async (req, res) => {
    try {
        const users = await Examinee.find();
        return res.json(users);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server Error" });
    }
});

// =============================
// Get Examinee by ID
// =============================
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await Examinee.findById(id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.json(user);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server Error" });
    }
});

// =============================
// Update Examinee
// =============================
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Examinee.findByIdAndUpdate(id, req.body, { new: true });
        return res.json({ message: "Updated Successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server Error" });
    }
});

// =============================
// Delete Examinee
// =============================
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Examinee.findByIdAndDelete(id);
        return res.json({ message: "Deleted Successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server Error" });
    }
});

// =============================
// Login Examinee
// =============================
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and Password are required" });
        }

        const user = await Examinee.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (user.password !== password) {
            return res.status(400).json({ message: "Password not matched" });
        }

        return res.status(200).json({
            message: "Login Successfully",
            user: {
                id: user._id,
                email: user.email,
                role: "user"
            }
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server Error" });
    }
});

// =============================
// Change Password
// =============================
router.put('/change/:id', async (req, res) => {
    try {
        const { op, np, cnp } = req.body;
        const { id } = req.params;

        if (!op || !np || !cnp) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await Examinee.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (user.password !== op) {
            return res.status(400).json({ message: "Old password does not match" });
        }

        if (op === np) {
            return res.status(400).json({ message: "New password cannot be same as old password" });
        }

        if (np !== cnp) {
            return res.status(400).json({ message: "New password and confirm password must match" });
        }

        await Examinee.findByIdAndUpdate(id, { password: np }, { new: true });

        return res.json({ message: "Password updated successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Sorry try again" });
    }
});

module.exports = router;
