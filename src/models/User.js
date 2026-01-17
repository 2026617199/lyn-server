import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const SALT_ROUNDS = 10;


const userSchema = new mongoose.Schema({
    // 基础信息
    username: {
        type: String,
        required: false,        // 匿名用户可为空
        unique: true,
        sparse: true,           // 允许多个null值
        minlength: 3,
        maxlength: 20,
        match: /^[a-zA-Z0-9_]+$/
    },
    password: {
        type: String,
        required: false,        // 匿名用户可为空
        minlength: 6
    },

    // 用户类型和会话
    userType: {
        type: String,
        enum: ['anonymous', 'registered', 'admin'],
        default: 'anonymous'
    },
    // 用户角色
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    sessionId: {
        type: String,
        required: true,
        unique: true,
        index: true
    },

    // 体质信息（保持兼容）
    constitution: {
        type: {
            type: String,
            enum: ['balanced', 'qi_deficiency', 'yang_deficiency', 'yin_deficiency',
                'phlegm_dampness', 'damp_heat', 'blood_stasis', 'qi_stagnation', 'special'],
            default: null
        },
        diagnosisMethod: {
            type: String,
            enum: ['manual', 'ai'],
            default: null
        },
        diagnosedAt: {
            type: Date,
            default: null
        }
    },

    // 登录信息
    lastLoginAt: {
        type: Date,
        default: null
    },
    loginCount: {
        type: Number,
        default: 0
    },

    // 时间戳
    createdAt: {
        type: Date,
        default: Date.now
    },
    lastActiveAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true,
    collection: 'users'
});

// 保存前自动加密密码
userSchema.pre('save', async function (next) {
    // 只在密码字段被修改且不是明文哈希时加密
    if (this.isModified('password') && this.password && this.password.length < 60) {
        this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    }
    next();
});


// 更新最后活跃时间
userSchema.methods.updateLastActive = function () {
    this.lastActiveAt = new Date();
    return this.save();
};

// 设置体质
userSchema.methods.setConstitution = function (type, method = 'manual') {
    this.constitution = {
        type: type,
        diagnosisMethod: method,
        diagnosedAt: new Date()
    };
    return this.save();
};

// 登录成功后更新登录信息
userSchema.methods.updateLoginInfo = function () {
    this.lastLoginAt = new Date();
    this.loginCount += 1;
    return this.save();
};

// 验证密码（使用 bcrypt 比较）
userSchema.methods.verifyPassword = async function (inputPassword) {
    // 如果密码是明文（旧的兼容处理），先加密再比较
    if (!this.password || this.password.length < 60) {
        return inputPassword === this.password;
    }
    return bcrypt.compare(inputPassword, this.password);
};

// 转换为安全的用户对象（不包含密码）
userSchema.methods.toSafeObject = function () {
    const obj = this.toObject();
    delete obj.password;
    return obj;
};

const User = mongoose.model('User', userSchema);

export default User;
