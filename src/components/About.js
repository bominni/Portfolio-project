import styled from "styled-components";
import images from "./Images";

export default function About() {
  var picture = [images.mail, images.phone, images.blog, images.github];
  var title = ["이메일", "전화번호", "블로그", "깃허브"];
  var content = [
    "bom.iiini@gmail.com",
    "010-3444-4655",
    "https://velog.io/@_spring",
    "https://github.com/bominni",
  ];

  return (
    <AboutMe>
      <Title>About Me</Title>
      <Content>
        {picture.map(function (e, i) {
          return (
            <Imformation>
              <img src={e} alt="아이콘" width="40px;" />
              <Text>
                <h2 style={{ margin: 0 }}>{title[i]}</h2>
                <p style={{ margin: 0 }}>{content[i]}</p>
              </Text>
            </Imformation>
          );
        })}
      </Content>
    </AboutMe>
  );
}

const AboutMe = styled.div`
  width: 80rem;
  margin: 0 auto;
`;
const Title = styled.p`
  font-size: 50px;
  font-weight: 900;
`;
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Imformation = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 20rem;
  padding: 34px;
  box-sizing: border-box;
`;
const Text = styled.div`
  margin-left: 1rem;
  text-align: left;
`;
