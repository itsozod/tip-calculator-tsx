import { Button, Flex, Typography } from "antd";
import styles from "./ResultContainer.module.css";
import { useSelector } from "react-redux";

export const ResultContainer = () => {
  const { Paragraph } = Typography;
  const tip = useSelector((state) => state.input.tip);
  const total = useSelector((state) => state.input.total);
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
      <Button className={styles.reset_btn}>Reset</Button>
    </Flex>
  );
};
