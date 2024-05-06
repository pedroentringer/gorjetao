import { LayoutCenter } from "../container";
import { Subtitle, Value } from "../text";
import { CardContainer, PaymentCardContainer } from "./styles";

export const Card = ({ title, subtitle, onPress }) => {
  return (
    <CardContainer onPress={onPress}>
      <LayoutCenter>
        <Value value={title} size="medium" />
        <Subtitle text={subtitle} variant="light" />
      </LayoutCenter>
    </CardContainer>
  );
};
