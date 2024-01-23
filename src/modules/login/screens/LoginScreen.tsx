import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimetedContainer, LogoImage } from "../styles/LoginScreen.styles";

const LoginScreen = () => {
  return (
    <div>
      <ContainerLoginScreen>
        <ContainerLogin>
          <LimetedContainer>
            <LogoImage src="./logo.png" />
          </LimetedContainer>
        </ContainerLogin>
        <BackgroundImage src="./background.png" />
      </ContainerLoginScreen>
    </div>
  );
};

export default LoginScreen;
