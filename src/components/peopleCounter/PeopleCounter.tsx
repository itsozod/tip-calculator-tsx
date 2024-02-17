import { Flex, Input, Typography } from "antd";
import styles from "./PeopleCounter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setPeople } from "../../store/features/inputSlice";

export const PeopleCounter = () => {
  const peopleInput = useSelector((state) => state.input.peopleInput);
  const dispatch = useDispatch();
  const { Paragraph } = Typography;
  return (
    <Flex className={styles.people_counter}>
      <Paragraph>Number of people</Paragraph>
      <Input
        value={peopleInput}
        onChange={(e) => dispatch(setPeople(e.target.value))}
        type="number"
        placeholder="Number of people"
      ></Input>
    </Flex>
  );
};
