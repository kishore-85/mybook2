import {
  Card,
  Stack,
  Box,
  CardContent,
  Typography,
  CardMedia,  
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Container() {
  return (
    <div className="Container">
      <Stack direction="row" spacing={5} sx={{ margin: "40px" }}>
        <Box>
          <Box
            width="300px"
            height="150px"
            sx={{ backgroundColor: "darkseagreen", padding: "15px" }}
          >
            <Typography className="h-a-h5" variant="h5">
              New customers:
            </Typography>
            <Typography variant="h6" className="t-a-c" sx={{ lineHeight: "3" }}>
              190+ Active customers
            </Typography>
            <Typography className="t-a-c">Since last week</Typography>
          </Box>
          <Box
            height="155px"
            width="300px"
            sx={{
              backgroundColor: "darkseagreen",
              marginTop: "5px",
              padding: "15px",
            }}
          >
            <Typography className="h-a-h5" variant="h5">
              New products:
            </Typography>
            <Typography variant="h6" className="t-a-c" sx={{ lineHeight: "3" }}>
              50+ New arrivals
            </Typography>
            <Typography className="t-a-c">Since last week</Typography>
          </Box>
        </Box>

        <Box width="250px">
          <Card>
            <CardMedia component="img" image="/images/ERP.jpg"></CardMedia>
            <CardContent>
              <Typography variant="h5">ERP SOFTWARE</Typography>
              <Typography>
                ERP is crucial for businesses as it integrates core processes
                like finance, supply chain, fostering efficiency, and
                decision-making. empowering organizations to thrive in dynamic
                markets.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box width="250px">
          <Card>
            <CardMedia component="img" image="/images/images1.jpg"></CardMedia>
            <CardContent>
              <Typography variant="h5">Products Module</Typography>
              <Typography>
                The Products module in an ERP system manages the entire
                lifecycle of products, from creation to disposal and includes
                inventory tracking, pricing, and product configuration.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box width="250px">
          <Card>
            <CardMedia component="img" image="/images/images2.jpg"></CardMedia>
            <CardContent>
              <Typography variant="h5">Billing Module</Typography>
              <Typography>
                Billing software within an ERP system automates invoicing,
                payment processing, and financial transactions Enhancing
                accuracy and improved decision making.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Stack>

      <Stack margin="34px">
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>New Updates</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              "Introducing enhanced AI-driven forecasting capabilities in our
              ERP software, revolutionizing inventory management and optimizing
              supply chain efficiency."
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Upcoming Release</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              It consists of Purchase, Sales and Inventory module in release
              3.0!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </div>
  );
}
export default Container;
