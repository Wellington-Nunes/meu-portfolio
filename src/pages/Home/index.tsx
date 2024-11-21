import * as S from "./styles";
import logoDark from "../../assets/logo-full-darkmode.png";
import logoLight from "../../assets/logo-full-lightmode.png";
import { useTheme } from "styled-components";
const Home = () => {
    const theme = useTheme()
    return (
        <S.Container>
            <img src={theme.name === "dark" ? logoDark : logoLight} alt="logo" />
        </S.Container>
    )
}

export default Home;