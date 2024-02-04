import { Flex, Input, Typography } from "antd";
import styles from "./PeopleCounter.module.css";

export const PeopleCounter = () => {
  const { Paragraph } = Typography;
  return (
    <Flex className={styles.people_counter}>
      <Paragraph>Number of people</Paragraph>
      <Input type="number" placeholder="Number of people"></Input>
    </Flex>
  );
};
