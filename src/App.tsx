import React, { Fragment, useState } from "react";
import { Button, Input, Typography } from "antd";
import styled from "styled-components";
import QRCode from "react-qr-code";

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

  const onImageDownload = () => {
    console.log("log download");
    const svg = document.getElementById("QRCode");
    // @ts-ignore
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      // @ts-ignore
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = "QRCode";
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };

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
            <QRCode
              // @ts-ignore
              id="QRCode"
              value={value}
              autoSave={"true"}
            />
          </Flexbox>
          <Spacer />
          <Flexbox>
            <Button onClick={onImageDownload}>Download</Button>
          </Flexbox>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
