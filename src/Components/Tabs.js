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
                    GeeksforGeeks
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
                                <Tab label="Tutorial 1" value="1" />
                                <Tab label="Tutorial 2" value="2" />
                                <Tab label="Tutorial 3" value="3" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">Data Structures</TabPanel>
                        <TabPanel value="2">Algorithms</TabPanel>
                        <TabPanel value="3">{transfer}</TabPanel>
                    </TabContext>
                </Box>
            </div>
        </div>
    );
}
//
export default Tabs_R