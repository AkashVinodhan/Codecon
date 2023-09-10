import {
  Box,
  Button,
  Card,
  Container,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ChromePicker } from "react-color";
import { saveAs } from "file-saver";
import React, { useState } from "react";

function Input() {
  const [input, setInput] = useState({
    data: "",
    width: 250,
    height: 250,
    format: "png",
  });

  const [color, setColor] = useState({
    qrColor: "#000000",
    bgColor: "#FFFFFF",
  });

  const [openColorPicker, setOpenColorPicker] = useState({
    qrColor: false,
    bgColor: false,
  });

  const [qrCodeUrl, setQrCodeUrl] = useState("");

  const handleInputChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const generateQr = () => {
    const url = `https://api.qrserver.com/v1/create-qr-code/?data=${
      input.data
    }!&size=${input.width}x${input.height}&color=${color.bgColor.slice(
      1
    )}&bgcolor=${color.qrColor.slice(1)}&format=${input.format}`;
    setQrCodeUrl(url);
  };

  const downloadQr = () => {
    saveAs(qrCodeUrl, `${input.data}Qr.${input.format}`);
  };

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      onClick={() =>
        setOpenColorPicker({
          qrColor: false,
          bgColor: false,
        })
      }
    >
      <Typography component={"h1"} variant={"h4"} textAlign={"center"}>
        QR Code Generator
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
        }}
      >
        <Card sx={{ width: { xs: "100%", md: "50%" }, height: "100%", p: 2 }}>
          <TextField
            label="Data"
            variant="outlined"
            name="data"
            required
            value={input.data}
            onChange={handleInputChange}
            fullWidth
            sx={{ mb: "20px" }}
          />
          <Stack
            direction={{ xs: "column", md: "row" }}
            gap={2}
            justifyContent={"space-between"}
            sx={{ mb: "20px" }}
          >
            <TextField
              label="Width(px)"
              type="number"
              variant="outlined"
              name="width"
              value={input.width}
              onChange={handleInputChange}
            />
            <TextField
              label="Height(px)"
              type="number"
              variant="outlined"
              name="height"
              value={input.height}
              onChange={handleInputChange}
            />
          </Stack>
          {/* Color picker */}
          {/* qrcolor */}
          <Stack direction={"row"} position={"relative"} mb={2}>
            <Typography component={"span"} width={"140px"}>
              QR Color :{" "}
            </Typography>
            <Paper
              elevation={3}
              onClick={(e) => {
                e.stopPropagation();
                setOpenColorPicker((prev) => ({
                  ...prev,
                  qrColor: !prev.qrColor,
                }));
              }}
              sx={{
                ml: "50px",
                height: "30px",
                width: "70px",
                cursor: "pointer",
                bgcolor: color.qrColor,
              }}
            ></Paper>
            <Box
              onClick={(e) => e.stopPropagation()}
              sx={{
                display: openColorPicker.qrColor ? "block" : "none",
                position: "absolute",
                top: "0px",
                right: "0px",
                zIndex: 1,
              }}
            >
              <ChromePicker
                color={color.qrColor}
                onChangeComplete={(color) =>
                  setColor((prev) => ({ ...prev, qrColor: color.hex }))
                }
              />
            </Box>
          </Stack>
          {/* bgcolor */}
          <Stack direction={"row"} position={"relative"} mb={2}>
            <Typography component={"span"} width={"140px"}>
              Background Color :
            </Typography>
            <Paper
              elevation={3}
              onClick={(e) => {
                e.stopPropagation();
                setOpenColorPicker((prev) => ({
                  ...prev,
                  bgColor: !prev.bgColor,
                }));
              }}
              sx={{
                ml: "50px",
                height: "30px",
                width: "70px",
                cursor: "pointer",
                bgcolor: color.bgColor,
              }}
            ></Paper>
            <Box
              onClick={(e) => e.stopPropagation()}
              sx={{
                visibility: openColorPicker.bgColor ? "visible" : "hidden",
                position: "absolute",
                top: "0px",
                right: "0px",
                zIndex: 1,
              }}
            >
              <ChromePicker
                color={color.bgColor}
                onChangeComplete={(color) =>
                  setColor((prev) => ({ ...prev, bgColor: color.hex }))
                }
              />
            </Box>
          </Stack>
          {/* Format */}
          <Stack direction={"row"} alignItems={"center"} gap={3}>
            <Typography>Format</Typography>
            <Select
              labelId="format-select"
              value={input.format}
              name="format"
              label="Format"
              onChange={handleInputChange}
              sx={{ mb: "20px" }}
            >
              <MenuItem value={"jpg"}>JPG</MenuItem>
              <MenuItem value={"png"}>PNG</MenuItem>
              <MenuItem value={"svg"}>SVG</MenuItem>
            </Select>
          </Stack>
          <Stack gap={2}>
            <Button
              variant="outlined"
              disabled={input.data == ""}
              onClick={generateQr}
            >
              Generate
            </Button>
            <Button variant="contained" onClick={downloadQr}>
              Download
            </Button>
          </Stack>
        </Card>
        {/* image */}
        {qrCodeUrl != "" && (
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              height: { xs: "40%", md: "70%" },
              display: "grid",
              placeItems: "center",
            }}
          >
            <img src={qrCodeUrl} alt="QR Code" />
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default Input;
