import styled from '@emotion/styled';

const BG_COLOR = {
  default: '#fafafa',
  error: '#ffcccb',
  success: '#d2f8d2',
};

const ICON_COLOR = {
  default: '#8a8585',
  error: '#eb0500',
  success: '#3391339c',
};

const Container = styled.div`
  background-color: ${({ color }) => BG_COLOR[color] || BG_COLOR.default};
  align-items: center;
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  height: 35px;
  justify-content: center;
  width: 35px;

  & > svg {
    fill: ${({ color }) => ICON_COLOR[color] || ICON_COLOR.default};
  }
`;

export function IconContainer({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}
