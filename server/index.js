import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import resourceRoutes from './routes/resources.js';

dotenv.config(); // تحميل متغيرات البيئة من ملف .env

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ الاتصال بقاعدة بيانات MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('✅ MongoDB Connected Successfully');
  })
  .catch((err) => {
    console.error('❌ Failed to connect to MongoDB:', err.message);
  });

// ✅ إعدادات CORS المتقدمة لدعم كل روابط Vercel
const corsOptions = {
  origin: function (origin, callback) {
    const allowed = [
      'http://localhost:5173',
      'http://localhost:3000',
    ];

    const vercelRegex = /\.vercel\.app$/;

    if (!origin || allowed.includes(origin) || vercelRegex.test(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(express.json()); // لتحليل JSON تلقائيًا من الطلبات

// ✅ المسارات (Routes)
app.use('/api/auth', authRoutes);
app.use('/api/resources', resourceRoutes);

// ✅ Health Check Route
app.get('/api/health', (req, res) => {
  res.json({
    message: 'Server is running',
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

// ✅ التعامل مع الأخطاء
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    message: 'حدث خطأ في الخادم',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// ✅ التعامل مع الصفحات غير الموجودة
app.use('*', (req, res) => {
  res.status(404).json({ message: 'الصفحة غير موجودة' });
});

// ✅ تشغيل الخادم
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
});
