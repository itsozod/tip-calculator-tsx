import { Flex, Input, Typography } from "antd";
import styles from "./PeopleCounter.module.css";
import { useSelector } from "react-redux";
import { setPeople } from "../../store/features/inputSlice";

export const PeopleCounter = () => {
  const peopleInput = useSelector((state) => state.input.peopleInput);
  const { Paragraph } = Typography;
  return (
    <Flex className={styles.people_counter}>
      <Paragraph>Number of people</Paragraph>
      <Input
        value={peopleInput}
        onChange={(e) => setPeople(e.target.value)}
        type="text"
        placeholder="Number of people"
      ></Input>
    </Flex>
  );
};
