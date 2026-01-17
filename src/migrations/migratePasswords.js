/**
 * 数据库迁移脚本：将明文密码加密为 bcrypt 哈希
 * 
 * 使用方法：
 * 1. 确保 MongoDB 连接已配置
 * 2. 运行: node src/migrations/migratePasswords.js
 * 
 * 注意：此脚本应在生产环境谨慎运行，建议先备份数据库
 */

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { User } from '../models/index.js';

dotenv.config();

const SALT_ROUNDS = 10;

async function migratePasswords() {
    try {
        // 连接数据库
        console.log('正在连接数据库...');
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/diet_recommendation');
        console.log('数据库连接成功');

        // 查找所有 registered 或 admin 类型用户，且密码是明文（长度 < 60）
        const users = await User.find({
            userType: { $in: ['registered', 'admin'] },
            password: { $exists: true, $ne: null }
        });

        console.log(`找到 ${users.length} 个需要迁移的用户`);

        let migrated = 0;
        let skipped = 0;
        let errors = 0;

        for (const user of users) {
            try {
                // 检查密码是否已经是哈希（bcrypt 哈希长度通常是 60）
                if (user.password && user.password.length >= 60) {
                    console.log(`用户 ${user.username} 的密码已经是哈希格式，跳过`);
                    skipped++;
                    continue;
                }

                // 加密密码
                const hashedPassword = await bcrypt.hash(user.password, SALT_ROUNDS);

                // 更新用户密码
                await User.updateOne(
                    { _id: user._id },
                    { $set: { password: hashedPassword } }
                );

                console.log(`用户 ${user.username} 的密码已加密`);
                migrated++;
            } catch (err) {
                console.error(`用户 ${user.username} 迁移失败:`, err.message);
                errors++;
            }
        }

        console.log('\n=== 迁移完成 ===');
        console.log(`成功迁移: ${migrated}`);
        console.log(`跳过（已是哈希）: ${skipped}`);
        console.log(`失败: ${errors}`);

        // 验证迁移结果
        const hashedUsers = await User.find({
            userType: { $in: ['registered', 'admin'] },
            password: { $exists: true },
            password: { $regex: /^\$2[ayb]\$.{56}$/ } // bcrypt 哈希格式
        });
        console.log(`\n验证: ${hashedUsers.length} 个用户的密码已加密`);

        process.exit(0);
    } catch (error) {
        console.error('迁移过程出错:', error);
        process.exit(1);
    }
}

migratePasswords();
