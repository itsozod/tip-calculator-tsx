import { Button, Col, Input, Row, Typography } from "antd";
import styles from "./TipSelector.module.css";

export const TipSelector = () => {
  const { Paragraph } = Typography;
  return (
    <Col className={styles.row}>
      <Paragraph>Select a tip %</Paragraph>
      <Row className={styles.col}>
        <Button className={styles.tip_btn}>5%</Button>
        <Button className={styles.tip_btn}>10%</Button>
        <Button className={styles.tip_btn}>15%</Button>
        <Button className={styles.tip_btn}>25%</Button>
        <Button className={styles.tip_btn}>50%</Button>
        <Input type="number" placeholder="Custom"></Input>
      </Row>
    </Col>
  );
};
