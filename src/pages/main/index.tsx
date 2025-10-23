import {
  Heading,
  Image,
  ImageContainer,
  InnerContainer,
  MainContainer,
  TextContainer,
  Text,
  Container,
  Title,
  Button,
  Form,
  Input,
  Error,
  FormContainer,
} from "./styles";
import image from "../../assets/images/hero-desktop.jpg";
import Logo from "../../assets/icons/logo.svg";
import { useForm } from "react-hook-form";
import Arrow from "../../assets/icons/icon-arrow.svg";

import ErrorIcon from "../../assets/icons/icon-error.svg";
const Main = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{ email: string }>({
    mode: "all",
  });

  function submit() {
    alert("You have succesfully registered");
  }

  return (
    <MainContainer>
      <InnerContainer>
        <TextContainer>
          <Logo />
          <Container>
            <Heading>
              WE'RE <Title>COMING SOON</Title>
            </Heading>
            <Text>
              Hello fellow shoppers! We're currently building our new <br />{" "}
              fashion store. Add your email below to stay up-to-date with
              announcements and our launch deals.
            </Text>
            <FormContainer>
              <Form onSubmit={handleSubmit(submit)}>
                <Input
                  type="email"
                  placeholder="Email Address"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please provide a valid email",
                    },
                  })}
                />
                {errors.email && <ErrorIcon />}
                <Button>
                  <Arrow />
                </Button>
              </Form>
              <Error>{errors.email?.message}</Error>
            </FormContainer>
          </Container>
        </TextContainer>
        <ImageContainer>
          <Image src={image} />
        </ImageContainer>
      </InnerContainer>
    </MainContainer>
  );
};

export default Main;
