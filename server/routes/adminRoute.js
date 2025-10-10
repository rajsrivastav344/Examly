const Admin = require('../models/Admin');
const express = require('express');
const router = express.Router();

// Test route
router.get('/', (req, res) => {
    return res.json("API Called");
});

// Register Admin
router.post('/', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existing = await Admin.findOne({ email });
        if (existing) {
            return res.status(400).json({ message: "Admin already exists" });
        }

        const reg = new Admin({ name, email, password });
        await reg.save();

        return res.status(201).json({ message: "Admin Registered Successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server Error" });
    }
});

// Login Admin
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and Password are required" });
        }

        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        if (admin.password !== password) {
            return res.status(400).json({ message: "Invalid password" });
        }

        return res.status(200).json({
            message: "Login Successfully",
            admin: {
                id: admin._id,
                email: admin.email,
                role: "admin"
            }
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server Error" });
    }
});

// Change Password
router.put('/change/:id', async (req, res) => {
    try {
        const { op, np, cnp } = req.body;
        const { id } = req.params;

        if (!op || !np || !cnp) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await Admin.findById(id);
        if (!user) {
            return res.status(404).json({ message: "Admin not found" });
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

        await Admin.findByIdAndUpdate(id, { password: np });

        return res.status(200).json({ message: "Password updated successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;
