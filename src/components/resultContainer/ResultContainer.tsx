import { Button, Flex, Typography } from "antd";
import styles from "./ResultContainer.module.css";
import { useDispatch } from "react-redux";
import {
  setCustom,
  setPeople,
  setPrice,
  setTip,
  setTotal,
} from "../../store/features/inputSlice";
import { useAppSelector } from "../../store/store";

export const ResultContainer = () => {
  const { Paragraph } = Typography;
  const tip = useAppSelector((state) => state.input.tip);
  const total = useAppSelector((state) => state.input.total);
  const dispatch = useDispatch();

  const reset = () => {
    dispatch(setTip(0));
    dispatch(setTotal(0));
    dispatch(setPrice(""));
    dispatch(setPeople(""));
    dispatch(setCustom(""));
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
