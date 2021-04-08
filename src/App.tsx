import React, { Fragment, useState } from "react";
import { Input, Typography } from "antd";
import styled from "styled-components";
import QRcode from "qrcode.react";

const Flexbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spacer = styled.div`
  padding: 10px;
`;
const App = () => {
  const [value, setValue] = useState<string>("");
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div>
          <Flexbox>
            <Typography.Text strong>QRCode Generator</Typography.Text>
          </Flexbox>
          <Spacer />
          <Input
            placeholder={"Enter Value"}
            style={{ width: 300 }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Spacer />
          <Flexbox>
            <QRcode value={value} autoSave={"true"} />
          </Flexbox>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
