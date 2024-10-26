module.exports = {
    apps: [
      {
        name: 'bigmarket', // Tên của ứng dụng
        script: 'npm', // Sử dụng npm để chạy ứng dụng
        args: 'start', // Lệnh start cho ứng dụng Next.js
        instances: 'max', // Tự động scale ứng dụng dựa trên số lượng CPU
        exec_mode: 'cluster', // Chế đ cluster cho phép PM2 scale ng dụng
        watch: false, // Tắt watch mode (nên tắt trong môi trường production)
        env: {
          NODE_ENV: 'production', // Thiết lập môi trường production
          PORT: 3001, // Cổng mà ng dụng sẽ chạy
        },
      },
    ],
  };
  