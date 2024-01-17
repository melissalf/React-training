export default function Tabs({children, buttons, ButtonsContainer = 'menu'}) {
    // this is a way to set a custom tag name
    // const ButtonsContainer = buttonsContainer
    return (
      <>
        <ButtonsContainer>{buttons}</ButtonsContainer>
        {children}
      </>
    );
}