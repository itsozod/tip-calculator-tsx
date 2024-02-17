import { Flex, Input, Typography } from "antd";
import styles from "./PeopleCounter.module.css";
import { useDispatch } from "react-redux";
import { setPeople } from "../../store/features/inputSlice";
import { useAppSelector } from "../../store/store";

export const PeopleCounter = () => {
  const peopleInput = useAppSelector((state) => state.input.peopleInput);
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
