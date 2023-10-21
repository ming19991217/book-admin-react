import React, { PropsWithChildren } from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout as AntdLayout, Menu, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styles from "./index.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";

const { Header, Content, Sider } = AntdLayout;

const USER_ITEMS: MenuProps["items"] = [
  {
    key: "0",
    label: "個人中心",
  },
  {
    key: "1",
    danger: true,
    label: "登出",
  },
];
const ITEMS = [
  {
    label: "圖書管理",
    key: "book",
    children: [
      { label: "圖書列表", key: "/book" },
      { label: "圖書添加", key: "/book/add" },
    ],
  },
  {
    label: "借閱管理",
    key: "borrow",
    children: [
      { label: "借閱列表", key: "/borrow" },
      { label: "借閱添加", key: "/borrow/add" },
    ],
  },
  {
    label: "分類管理",
    key: "category",
    children: [
      { label: "分類列表", key: "/category" },
      { label: "分類添加", key: "/category/add" },
    ],
  },
  {
    label: "用戶管理",
    key: "user",
    children: [
      { label: "用戶列表", key: "/user" },
      { label: "用戶添加", key: "/user/add" },
    ],
  },
];

// export function Layout({ children }: { children: React.ReactNode }) {
export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const handleMenuClick: MenuProps["onClick"] = ({ key }) => {
    router.push(key);
  };

  return (
    <AntdLayout>
      <Header className={styles.header}>
        <Image
          className={styles.logo}
          src="/logo.png"
          width={30}
          height={30}
          alt="logo"
        />
        夜谷圖書管理
        <span className={styles.user}>
          <Dropdown menu={{ items: USER_ITEMS }}>
            <Space>
              <a onClick={(e) => e.preventDefault()}>管理者</a>
              <DownOutlined />
            </Space>
          </Dropdown>
        </span>
      </Header>
      <AntdLayout className={styles.sectionInner}>
        <Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["/book"]}
            defaultOpenKeys={["book"]}
            style={{ height: "100%", borderRight: 0 }}
            items={ITEMS}
            onClick={handleMenuClick}
          />
        </Sider>
        <AntdLayout className={styles.sectionContent}>
          <Content className={styles.content}>{children}</Content>
        </AntdLayout>
      </AntdLayout>
    </AntdLayout>
  );
};
