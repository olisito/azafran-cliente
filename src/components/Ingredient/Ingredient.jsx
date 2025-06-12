import { Flex, Typography } from "antd";
const { Paragraph } = Typography;

const Ingredient = ({ name, handleButtonClick }) => {
  return (
    <Flex
      justify="center"
      align="center"
      style={{
        border: "1px solid black",
        borderRadius: "8px",
        padding: "5px",
      }}
    >
      <Paragraph style={{ margin: 0 }}>{name}</Paragraph>
      <button onClick={handleButtonClick}>Hola</button>
    </Flex>
  );
};

export { Ingredient };
