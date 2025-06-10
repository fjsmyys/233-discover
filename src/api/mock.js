// src/api/mock.js
export function getMockData(type = 'img', page = 1, pageSize = 10) {
  const data = [];
  for (let i = 0; i < pageSize; i++) {
    const id = `${type}-${page}-${i}`;
    if (type === 'img') {
      data.push({
        id,
        title: `图片标题 ${id}`,
        type: 'img',
        url: `https://picsum.photos/seed/${id}/300/4${i}0`
      });
    } else if (type === 'video') {
      data.push({
        id,
        title: `视频标题 ${id}`,
        type: 'video',
        url: 'https://www.w3schools.com/html/mov_bbb.mp4'
      });
    } else {
      // 混合
      if (i % 2 === 0) {
        data.push({
          id,
          title: `图片标题 ${id}`,
          type: 'img',
          url: `https://picsum.photos/seed/${id}/300/4${i}0`
        });
      } else {
        data.push({
          id,
          title: `视频标题 ${id}`,
          type: 'video',
          url: 'https://www.w3schools.com/html/mov_bbb.mp4'
        });
      }
    }
  }
  return Promise.resolve(data);
}