export default function Tabs({ buttons, children, ButtonContainer = "div" }) {
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
