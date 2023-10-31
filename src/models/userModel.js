import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a username"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Please enter a email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter password"],
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    profilePhoto: {
        type: String,
        default: "https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
    },
    video: {
        type: String
    },
    role: {
        type: String,
        default: "none"
    },
    about: {
        type: String
    },
    achievements: {
        type: String
    },
    links:
    {
        github: {
            type: String,
        },
        leetcode: {
            type: String,
        },
        stackoverflow: {
            type: String
        },
        behance: {
            type: String,
        },
        dribble: {
            type: String,
        },
        medium: {
            type: String,
        },
        blog: {
            type: String,
        },
        facebook: {
            type: String,
        },
        instagram: {
            type: String,
        },
        youtube: {
            type: String,
        },
    },
    projects: {
        title: {
            type: String
        },
        description: {
            type: String
        },

        github: {
            type: String
        }
    },
    forgetPasswordToken: {
        type: String
    },
    forgetPasswordTokenExpiry: {
        type: Date
    },
    verifyToken: {
        type: String
    },
    verifyTokenExpiry: {
        type: Date
    }
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User