import React from 'react';
import ContentLoader, { IContentLoaderProps } from 'react-content-loader';

const SkeletonTrailer: React.FC<IContentLoaderProps> = () => (
  <ContentLoader
    speed={3}
    width={1080}
    height={400}
    viewBox="0 0 1080 400"
    backgroundColor="#898080"
    foregroundColor="#ae8484">
    {/* Левый блок для изображения */}
    <rect x="20" y="20" rx="10" ry="10" width="270" height="400" />

    {/* Правый блок для текста */}
    <rect x="310" y="20" rx="10" ry="10" width="740" height="400" />

    {/* Дополнительные элементы для текста */}
    <rect x="310" y="30" rx="5" ry="5" width="400" height="30" />
    <rect x="310" y="80" rx="5" ry="5" width="300" height="20" />
    <rect x="310" y="110" rx="5" ry="5" width="250" height="20" />

    {/* Блоки для рейтинга */}
    <rect x="800" y="80" rx="5" ry="5" width="50" height="30" />
    <rect x="860" y="80" rx="5" ry="5" width="80" height="30" />
  </ContentLoader>
);

export default SkeletonTrailer;
