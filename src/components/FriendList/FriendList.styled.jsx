import styled from '@emotion/styled';

export const FriendContainer = styled.ul`
  width: 400px;
  background-color: rgb(216, 216, 216);
  display: block;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 50px;
`;

export const FriendItem = styled.li`
  display: flex;
  gap: 10px;
`;

export const FriendItemDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const FriendItemTrue = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: green;
  color: green;
`;

export const FriendItemFalse = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: red;
  color: red;
`;
