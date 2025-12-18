
// Fix: Import React to resolve the 'Cannot find namespace React' error when using React.ReactNode
import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Specialist {
  name: string;
  role: string;
  avatar: string;
}

export interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}
