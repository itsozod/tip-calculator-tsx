import { Flex, Input, Typography } from "antd";
import styles from "./BillCounter.module.css";
import { TipSelector } from "../tipSelector/TipSelector";
import { PeopleCounter } from "../peopleCounter/PeopleCounter";
import { ResultContainer } from "../resultContainer/ResultContainer";
import { useDispatch, useSelector } from "react-redux";
import { setPrice } from "../../store/features/inputSlice";

export const BillCounter = () => {
  const priceInput = useSelector((state) => state.input.priceInput);
  const { Paragraph } = Typography;
  const dispatch = useDispatch();
  return (
    <Flex className={styles.bill_holder}>
      <Flex className={styles.bill_container}>
        <Paragraph>Bill</Paragraph>
        <Input
          // value={priceInput}
          value={priceInput}
          type="number"
          onChange={(e) => dispatch(setPrice(e.target.value))}
          placeholder="Enter price"
        ></Input>
        <TipSelector />
        <PeopleCounter />
      </Flex>
      <ResultContainer />
    </Flex>
  );
};
