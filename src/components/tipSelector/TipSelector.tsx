import { Button, Col, Input, Row, Typography } from "antd";
import styles from "./TipSelector.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setTotal } from "../../store/features/inputSlice";

export const TipSelector = () => {
  const { Paragraph } = Typography;
  const priceInput = useSelector((state) => state.input.priceInput);
  const btnValue = useSelector((state) => state.input.btnValue);
  const dispatch = useDispatch();
  const getResult = (value) => {
    const result = priceInput * btnValue;
    dispatch(setTotal(result));
    console.log("hello");
  };
  return (
    <Col className={styles.row}>
      <Paragraph>Select a tip %</Paragraph>
      <Row className={styles.col}>
        <Button
          // value={btnValue}
          onClick={() => getResult(btnValue)}
          className={styles.tip_btn}
        >
          {btnValue}
        </Button>
        <Button value={"10%"} className={styles.tip_btn}>
          10%
        </Button>
        <Button value={"15"} className={styles.tip_btn}>
          15%
        </Button>
        <Button value={"25%"} className={styles.tip_btn}>
          25%
        </Button>
        <Button value={"50%"} className={styles.tip_btn}>
          50%
        </Button>
        <Input type="number" placeholder="Custom"></Input>
      </Row>
    </Col>
  );
};
