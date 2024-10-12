import React from 'react';
import ContentLoader, { IContentLoaderProps } from 'react-content-loader';

const SliderSkeleton: React.FC<IContentLoaderProps> = () => (
  <ContentLoader
    speed={3}
    width={1480} // Ширина слайдера
    height={400} // Высота слайдера
    viewBox="0 0 1480 400"
    backgroundColor="#898080"
    foregroundColor="#ae8484">
    <rect x="50" y="20" rx="10" ry="10" width="1380" height="100%" />
  </ContentLoader>
);

export default SliderSkeleton;
