import styled from "styled-components/native";

export const CardContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  border-radius: 8px;
  align-self: stretch;
  padding: 32px;
  background-color: #fafafa;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
`;
