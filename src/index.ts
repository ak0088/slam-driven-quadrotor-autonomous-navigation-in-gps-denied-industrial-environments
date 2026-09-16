import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    project: 'SLAM-Driven Quadrotor Autonomous Navigation in GPS-Denied Industrial Environments',
    domain: 'Robotics & Autonomous Systems',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`[SLAM-Driven Quadrotor Autonomous Navigation in GPS-Denied Industrial Environments] Server operational on port ${PORT}`);
});
