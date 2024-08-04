import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';

import ProjectInfo from './ProjectInfo';

const meta = {
  title: 'Components/Contents/ProjectInfo',
  component: ProjectInfo,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    infoType: { option: ['thumb', 'popup'], control: { type: 'select' } },
    title: { control: 'string' },
    desc: { control: 'string' },
  },
} satisfies Meta<typeof ProjectInfo>;

export default meta;
type Story = StoryObj<typeof ProjectInfo>;

export const Popup: Story = {
  args: {
    infoType: 'thumb',
    title: '프로젝트 썸네일용 정보',
    desc: '프로젝트 정보 내용을 입력하세요',
  },
};

export const Summary: Story = {
  args: {
    infoType: 'popup',
    title: '프로젝트 팝업용 정보',
    desc: '프로젝트 정보 내용을 입력하세요',
  },
};
