import { Flex } from "antd";
import styles from "./Layout.module.css";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <Flex className={styles.main}>{children}</Flex>;
};
