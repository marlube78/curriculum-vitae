import { Avatar } from 'antd';

export const AvatarCustom = (avatarUrl: string, avatarSize: number) => (
    <Avatar
      src={avatarUrl}
      size={avatarSize}
    />
);