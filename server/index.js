import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import resourceRoutes from './routes/resources.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ اتصال بقاعدة بيانات MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ MongoDB Connected Successfully');
}).catch((err) => {
  console.error('❌ MongoDB Connection Error:', err.message);
});

// ✅ 🔥 FIX نهائي لـ CORS — للسماح بكل الطلبات مؤقتًا (يمكن تقفيله لاحقًا)
app.use(cors({
  origin: '*', // يسمح بأي دومين (مؤقتًا)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.options('*', cors()); // هام جدًا للـ preflight requests

// ✅ Body Parser
app.use(express.json());

// ✅ المسارات
app.use('/api/auth', authRoutes);
app.use('/api/resources', resourceRoutes);

// ✅ Health Check
app.get('/api/health', (req, res) => {
  res.json({
    message: 'Server is running',
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

// ✅ معالجة الأخطاء
app.use((err, req, res, next) => {
  console.error('❌ Error:', err);
  res.status(500).json({
    message: 'حدث خطأ في الخادم',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// ✅ صفحة غير موجودة
app.use('*', (req, res) => {
  res.status(404).json({ message: 'الصفحة غير موجودة' });
});

// ✅ تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
});
