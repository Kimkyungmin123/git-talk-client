import styled, { css } from 'styled-components';
import NavProfile from '@/icons/nav_profile_img.svg';
// import More from '@/icons/more.svg';
import React, { useState } from 'react';
import MoreButton from '@/buttons/MoreButton';
import ChatExitButton from '@/buttons/ChatExitButton';
import ChatFollowButton from '@/buttons/ChatFollowButton';

export const Box = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      max-width: 43.725rem;
      height: 10%;
      border-bottom: 0.125rem solid rgba(112, 124, 151, 0.1);
      background-color: ${colors.white};
      display: flex;
      /* position: fixed;
      top: 0;
      left: 0;
      right: 0; */
      .profileImg {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.625rem 1.625rem 1.625rem 2.1875rem;
      }
    `;
  }}
`;

const Middle = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      gap: 0.3125rem;

      .name {
        font-size: ${fontSize.sm};
        font-size: 1.875rem;
      }

      .nickname {
        color: ${colors.lightgray};
        font-size: ${fontSize.md};
      }
    `;
  }}
`;

const Right = styled.div`
  display: flex;
  margin-right: 0.875rem;
`;

const ButtonDom = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const DropDownButton = styled.div<{ isVisible: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 4.625rem;
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
`;

const DropUpButton = styled.div``;

export interface ChatRoomNavProps {
  name: string;
  profileImg: string | null;
  nickname: string;
}

const ChatRoomNav = ({ name, profileImg, nickname }: ChatRoomNavProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Box>
      {profileImg ? (
        <div className="profileImg">{profileImg}</div>
      ) : (
        <div className="profileImg">
          <NavProfile />
        </div>
      )}
      <Middle>
        <div className="nickname">{nickname}</div>
        <div className="name">{name}</div>
      </Middle>
      <Right>
        <ButtonDom className="dropDown">
          <DropUpButton>
            <MoreButton onClick={handleVisible} />
          </DropUpButton>
          <DropDownButton isVisible={isVisible}>
            <ChatExitButton onClick={() => console.log('exit')} />
            <ChatFollowButton onClick={() => console.log('follow')} />
          </DropDownButton>
        </ButtonDom>
      </Right>
    </Box>
  );
};

export default ChatRoomNav;
