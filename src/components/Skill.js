import styled from "styled-components";
import images from "./Images";

export default function Skill() {
  var title = ["Language", "Frontend", "Backend", "Tools"];
  var image = [
    [images.c, images.python],
    [
      images.html,
      images.css,
      images.sass,
      images.javascript,
      images.typescript,
      images.react,
      images.vue,
    ],
    [images.nodejs, images.mongodb, images.mysql, images.springboot],
    [images.vscode, images.git, images.github, images.figma, images.notion],
  ];
  return (
    <Skills>
      <Title>Skill</Title>
      {image.map(function (img, i) {
        return (
          <Content>
            <h2 style={{ margin: 0, width: 160 }}>{title[i]}</h2>
            {img.map(function (e, i) {
              return <img src={e} alt="사진" width="50px" />;
            })}
          </Content>
        );
      })}
    </Skills>
  );
}

const Skills = styled.div`
  width: 80rem;
  margin: 0 auto;
`;
const Title = styled.p`
  font-size: 50px;
  font-weight: 900;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1rem;
`;
