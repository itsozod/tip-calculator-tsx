import { Button, Flex, Typography } from "antd";
import styles from "./ResultContainer.module.css";

export const ResultContainer = () => {
  const { Paragraph } = Typography;
  return (
    <Flex className={styles.result_container}>
      <Flex className={styles.tip_amount}>
        <Paragraph className={styles.para}>Tip amount</Paragraph>
        <Paragraph className={styles.para}>$0.00</Paragraph>
      </Flex>
      <Flex className={styles.total_amount}>
        <Paragraph className={styles.para}>Total</Paragraph>
        <Paragraph className={styles.para}>$0.00</Paragraph>
      </Flex>
      <Button className={styles.reset_btn}>Reset</Button>
    </Flex>
  );
};
