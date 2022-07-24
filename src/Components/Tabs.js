import * as React from "react";
import Box from "@material-ui/core/Box";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";



function Tabs_R({transfer}) {
    const [value, setValue] = React.useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="App">
            <div
                className="head"
                style={{
                    width: "fit-content",
                    margin: "auto",
                }}
            >
                <h1
                    style={{
                        color: "green",
                    }}
                >
                    Худшая работа года
                </h1>
            </div>
            <div
                style={{
                    width: "fit-content",
                    margin: "auto",
                }}
            >
                <strong>React MUI Tab API</strong>
            </div>
            <br />
            <div
                style={{
                    margin: "auto",
                    display: "flex",
                    justifyContent: "space-evenly",
                }}
            >
                <Box sx={{ width: "100%", typography: "body1" }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <TabList onChange={handleChange}>
                                <Tab label="Граф 1" value="1" />
                                <Tab label="Граф 2" value="2" />
                                <Tab label="Граф 3" value="3" />
                                <Tab label="Граф 4" value="4" />
                                <Tab label="Граф 5" value="5" />
                                <Tab label="Граф 6" value="6" />
                            </TabList>
                        </Box>
                        <TabPanel value="1"><div id="chartdiv12" style={{ width: "100%", height: "500px", top: "200px",right: "0px",position: "absolute" }}></div></TabPanel>
                        <TabPanel value="2"><div id="chartdiv1" style={{ width: "100%", height: "500px", top: "200px",right: "0px",position: "absolute" }}></div></TabPanel>
                        <TabPanel value="3"><div id="chartdiv2" style={{ width: "100%", height: "500px", top: "200px",right: "0px",position: "absolute" }}></div></TabPanel>
                        <TabPanel value="4"><div id="chartdiv3" style={{ width: "100%", height: "500px", top: "200px",right: "0px",position: "absolute" }}></div></TabPanel>
                        <TabPanel value="5"><div id="chartdiv4" style={{ width: "100%", height: "500px", top: "200px",right: "0px",position: "absolute" }}></div></TabPanel>
                        <TabPanel value="6"><div id="chartdiv5" style={{ width: "100%", height: "500px", top: "200px",right: "0px",position: "absolute" }}></div></TabPanel>
                    </TabContext>
                </Box>
            </div>
        </div>
    );
}

export default Tabs_R