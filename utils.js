// --- Helper Functions ---
export const generateCanvasImage = async (elementId, formatWidth) => {
  try {
    await document.fonts.ready;
    if (!window.html2canvas) {
      await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    }
    const element = document.getElementById(elementId);
    if (!element) return null;
    const canvas = await window.html2canvas(element, {
      scale: 3,
      useCORS: true,
      backgroundColor: '#ffffff',
      logging: false,
      letterRendering: true,
      windowWidth: formatWidth,
    });
    return canvas.toDataURL('image/jpeg', 0.95);
  } catch (error) {
    console.error("Canvas generation error", error);
    return null;
  }
};

export const getFormattedDate = () => {
  const d = new Date();
  const months = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear() + 543} เวลา ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')} น.`;
};

export const convertGDriveUrl = (url) => {
  if (!url) return url;
  // Format: https://drive.google.com/file/d/{FILE_ID}/view...
  let match = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (match) return `https://lh3.googleusercontent.com/d/${match[1]}`;
  // Format: https://drive.google.com/open?id={FILE_ID}
  match = url.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/);
  if (match) return `https://lh3.googleusercontent.com/d/${match[1]}`;
  // Format: https://drive.google.com/uc?id={FILE_ID}
  match = url.match(/drive\.google\.com\/uc\?.*id=([a-zA-Z0-9_-]+)/);
  if (match) return `https://lh3.googleusercontent.com/d/${match[1]}`;
  return url;
};

export const isGDriveUrl = (url) => {
  return url && url.includes('drive.google.com');
};
