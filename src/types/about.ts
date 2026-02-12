import React from 'react';

export interface GuidingValue {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface StepChart {
  imageSrc: string;
  step: string;
  title: string;
}
