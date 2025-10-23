import styled from "@emotion/styled";
import colors from "../../styles/color";

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  width: 100vw;
  background: linear-gradient("#ffffff", "#fff4f4");
`;

export const InnerContainer = styled.div`
  background-color: ${colors.white};
  display: flex;
  gap: 40px;
  width: 1200px;
  background: transparent;
  align-items: space-between;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  width: 610px;
  height: 100%;
  overflow: hidden;
`;

export const Heading = styled.h1`
  color: ${colors.primary01};
  font-size: 64px;
  line-height: 100%;
  font-weight: lighter;
  letter-spacing: 17.5px;
`;
export const Title = styled.span`
  color: ${colors.secondary02};
  font-size: 64px;
  line-height: 71px;
  font-weight: 400;
  letter-spacing: 17.32px;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextContainer = styled.div`
  display: flex;
  width: 445px;
  heigth: 100%;
  gap: 80px;
  justify-content: center;
  flex-direction: column;
`;
export const Text = styled.p`
  font-weight: 300;
  color: ${colors.primary01};
  font-size: 16px;
  line-height: 215%;
  letter-spacing: 0;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Input = styled.input`
  border: none;
  outline: none;
  font-size: 15px;
  font-weight: bold;
  color:${colors.secondary02}
  line-height: 215%;
  padding-left: 20px;
  background: transparent;
`;
export const Form = styled.form`
  align-items: center;
  display: flex;
  padding-left: 10px;
  border-radius: 28px;
  width: 445px;
  height: 56px;
  background-color: transparent;
  border: 2px solid ${colors.primary01};
  justify-content: space-between;
`;
export const Error = styled.span`
  font-size: 12px;
  letter-spacing: 0px;
  color: ${colors.secondary01};
  font-weight: bold;
  margin-left: 20px;
`;
export const Button = styled.button`
  border-radius: 28px;
  border: none;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 56px;
  cursor: pointer;
  width: 100px;
  z-index: 11;
  background-color: ${colors.primary01};
`;
