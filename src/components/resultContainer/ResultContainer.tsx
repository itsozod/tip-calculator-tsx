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
  const { Paragraph, Title } = Typography;
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
        <Flex className={styles.para_container}>
          <Paragraph className={styles.para}>Tip amount</Paragraph>
          <Paragraph className={styles.para}>/ person</Paragraph>
        </Flex>
        <Title
          style={{
            color: "hsl(172, 67%, 45%)",
          }}
          level={2}
        >
          ${tip}
        </Title>
      </Flex>
      <Flex className={styles.total_amount}>
        <Flex className={styles.para_container}>
          <Paragraph className={styles.para}>Total</Paragraph>
          <Paragraph className={styles.para}>/ person</Paragraph>
        </Flex>
        <Title
          style={{
            color: "hsl(172, 67%, 45%)",
          }}
          level={2}
          className={styles.para}
        >
          ${total}
        </Title>
      </Flex>
      <Button onClick={() => reset()} className={styles.reset_btn}>
        Reset
      </Button>
    </Flex>
  );
};
