import { Button, Flex, Typography } from "antd";
import styles from "./ResultContainer.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setPeople,
  setPrice,
  setTip,
  setTotal,
} from "../../store/features/inputSlice";

export const ResultContainer = () => {
  const { Paragraph } = Typography;
  const tip = useSelector((state) => state.input.tip);
  const total = useSelector((state) => state.input.total);
  const dispatch = useDispatch();

  const reset = () => {
    dispatch(setTip(0));
    dispatch(setTotal(0));
    dispatch(setPrice(0));
    dispatch(setPeople(0));
  };
  return (
    <Flex className={styles.result_container}>
      <Flex className={styles.tip_amount}>
        <Paragraph className={styles.para}>Tip amount</Paragraph>
        <Paragraph className={styles.para}>${tip}</Paragraph>
      </Flex>
      <Flex className={styles.total_amount}>
        <Paragraph className={styles.para}>Total</Paragraph>
        <Paragraph className={styles.para}>${total}</Paragraph>
      </Flex>
      <Button onClick={() => reset()} className={styles.reset_btn}>
        Reset
      </Button>
    </Flex>
  );
};
