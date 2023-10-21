import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Select,
  Space,
  Table,
  TablePaginationConfig,
} from "antd";
import { useRouter } from "next/router";
import { useState } from "react";

const dataSources = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
];
const COLUMS = [
  {
    title: "名稱",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "封面",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "作者",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "分類",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "描述",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "庫存",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "創建時間",
    dataIndex: "address",
    key: "address",
  },
];

export default function Home() {
  const [form] = Form.useForm();
  const router = useRouter();
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 20,
    showSizeChanger: true,
    total: 0,
  });

  const [total, setTotal] = useState(0);

  const handleTableChange = (pagination: TablePaginationConfig) => {
    setPagination(pagination);
  };

  const handleSearchFinish = (value) => {
    console.log(value);
  };

  const handleBookEdit = () => {
    router.push("/book/edit/id");
  };

  const columns = [
    ...COLUMS,
    {
      title: "操作",
      key: "action",
      render: (_: any, row: any) => {
        return (
          <Space>
            <Button type="primary">編輯</Button>
            <Button type="primary" danger>
              {" "}
              刪除
            </Button>
          </Space>
        );
      },
    },
  ];

  return (
    <>
      <Form
        name="search"
        onFinish={handleSearchFinish}
        initialValues={{
          name: "",
          author: "",
          category: "",
        }}
      >
        <Row gutter={24}>
          <Col span={5}>
            <Form.Item name="name" label="名稱">
              <Input placeholder="請輸入" allowClear />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item name="author" label="作者">
              <Input placeholder="請輸入" allowClear />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item name="category" label="分類">
              <Select
                style={{ width: 100 }}
                showSearch
                placeholder="請選擇"
                options={[
                  { label: "全部", value: "all" },
                  { label: "文學", value: "literature" },
                  { label: "歷史", value: "history" },
                  { label: "藝術", value: "art" },
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={9}>
            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit">
                  搜尋
                </Button>
                <Button type="default" htmlType="reset">
                  清空
                </Button>
              </Space>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <div className={StyleSheet.tableWrap}>
        <Table
          dataSource={dataSources}
          columns={columns}
          scroll={{ x: 1000 }}
          onChange={handleTableChange}
          pagination={{
            ...pagination,
            showTotal: () => `共${pagination.total}條`,
          }}
        />
      </div>
    </>
  );
}
