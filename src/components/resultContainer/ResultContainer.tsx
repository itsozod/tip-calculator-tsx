import { Button, Flex, Typography } from "antd";
import styles from "./ResultContainer.module.css";
import { FormikValues } from "formik";

export const ResultContainer = ({ formik }: FormikValues) => {
  const { Paragraph, Title } = Typography;

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
          {formik.values.tip}
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
          {formik.values.total}
        </Title>
      </Flex>
      <Button className={styles.reset_btn} onClick={formik.handleReset}>
        Reset
      </Button>
    </Flex>
  );
};
