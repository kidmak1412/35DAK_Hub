import {
  Video, Image as ImageIcon, TrendingUp, Calculator, Percent,
  Table, FileText, HeartPulse, Users, FileSpreadsheet
} from 'lucide-react';

export const initialUsers = [
  { id: 1, username: 'admin', password: 'password', role: 'admin', name: 'ผู้ดูแลระบบสูงสุด' },
  {
    id: 2, username: 'agent01', password: 'password', role: 'member', name: 'ตัวแทน ทดสอบ',
    targetFYP: 1000000,
    performanceRecords: [
      { month: 'มกราคม', submitted: 150000, approved: 100000, commission: 35000, lastUpdated: '31 ม.ค. 2024 16:30' },
      { month: 'กุมภาพันธ์', submitted: 350000, approved: 350000, commission: 122500, lastUpdated: '28 ก.พ. 2024 09:15' }
    ],
    specialQualifications: []
  }
];

export const initialQuals = [
  { id: 1, name: 'ทริปญี่ปุ่น (Q3)', target: 800000 },
  { id: 2, name: 'MDOT 2024', target: 1500000 },
  { id: 3, name: 'MBRT 2027', target: 1200000 }
];

export const initialVideos = [
  { id: 1, title: 'เทคนิคการเปิดใจลูกค้า', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', category: 'ทักษะการขาย' },
  { id: 2, title: 'สรุปแบบประกันสุขภาพ อัปเดต 2024', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', category: 'ความรู้แบบประกัน' }
];

export const initialContents = [
  { id: 1, type: 'image', title: 'ภาพสวัสดีวันจันทร์ พร้อมคำคม', url: 'https://placehold.co/400x400/0B162C/D4AF37?text=Happy+Monday' },
  { id: 2, type: 'video', title: 'คลิปสั้น โปรโมทประกันออมทรัพย์', url: 'https://placehold.co/400x400/D4AF37/0B162C?text=Video+Content' },
  { id: 3, type: 'caption', title: 'แคปชั่นขายประกันสุขภาพ', content: 'สุขภาพดีไม่มีขาย อยากได้ต้องดูแลตัวเอง... แต่ถ้าเจ็บป่วยขึ้นมา ให้เราดูแลค่าใช้จ่ายนะครับ 💙 #ประกันสุขภาพ #คุ้มครองคุ้มค่า' }
];

export const memberMenu = [
  { id: 'video_hub', icon: Video, label: 'คลังวีดีโอความรู้' },
  { id: 'content_hub', icon: ImageIcon, label: 'คลังคอนเทนต์ฟรี' },
  { id: 'performance', icon: TrendingUp, label: 'ติดตามผลงาน & คุณวุฒิ' },
  { id: 'comm_calc', icon: Percent, label: 'คำนวณค่าคอมมิชชั่น' },
  { id: 'irr_calc', icon: Calculator, label: 'คำนวณ IRR' },
  { id: 'savings_pres', icon: FileSpreadsheet, label: 'ตารางเสนอออมทรัพย์' },
  { id: 'income_pres', icon: FileText, label: 'ตารางเสนอชดเชยรายได้' },
  { id: 'legacy_pres', icon: Table, label: 'ตารางเสนอประกันมรดก' },
  { id: 'health_pres', icon: HeartPulse, label: 'ตารางเสนอสุขภาพ 3-5 แผน' },
];

export const adminMenu = [
  { id: 'admin_dashboard', icon: Users, label: 'จัดการข้อมูลสมาชิก' },
  { id: 'admin_performance', icon: TrendingUp, label: 'จัดการเป้าหมายเบี้ย&คุณวุฒิ' },
  { id: 'admin_videos', icon: Video, label: 'จัดการคลังความรู้' },
  { id: 'admin_contents', icon: ImageIcon, label: 'จัดการคลังคอนเทนต์' },
];
