import React from 'react';
import ContentLoader, { IContentLoaderProps } from 'react-content-loader';

const Skeleton: React.FC<IContentLoaderProps> = () => (
  <ContentLoader
    speed={3}
    width={600}
    height={1000}
    viewBox="0 0 600 1000"
    backgroundColor="#898080"
    foregroundColor="#ae8484">
    <rect x="11" y="96" rx="15" ry="15" width="492" height="768" />
  </ContentLoader>
);

export default Skeleton;
