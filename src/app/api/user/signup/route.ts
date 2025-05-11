import { connectDb } from '../../../../dbconfig/dbConfig.js';
import User from '../../../../models/user.model.js';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';

import { v2 as cloudinary } from 'cloudinary';
// Removed unused imports




cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });


connectDb();






export async function POST(request: NextRequest) {
    try {
        const data = await request.json(); // ⬅️ receive JSON
        const { username, email, fullname, password } = data;

        if (!username || !email || !fullname || !password) {
            return NextResponse.json({ message: 'Please fill in all fields' }, { status: 400 });
        }

        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({ message: "User already exists" }, { status: 400 });
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const avatarUrl = ''; // Placeholder if needed later
        const newUser = new User({ username, password: hashedPassword, email, fullname, avatarUrl });
        const savedUser = await newUser.save();

        console.log('User created:', savedUser);

        return NextResponse.json({
            message: 'User created successfully',
            success: true,
            savedUser
        });

    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

  