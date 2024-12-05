import { Box, Grid, GridItem, Image, Button } from "@chakra-ui/react";
import onepieceLogo from "../assets/onepieceLogo.png";
import { GiBattleship, GiPirateFlag, GiSnail } from "react-icons/gi";
import { To, useNavigate } from "react-router-dom";
import routeConstants from "../utils/constants.ts";
function Navbar() {
  let navigate = useNavigate();
  const navigateToRoute = (route: To) => {
    navigate(route);
  };
  return (
    <>
      <Box
        minW="sm"
        borderWidth={"1px"}
        minH={"80px"}
        py={{ base: 6 }}
        px={{ base: 4 }}
        bgColor={"#000000"}
        rounded={5}
        shadow="lg"
      >
        <Grid templateColumns="auto auto auto 1fr auto" gap="6" ml={5}>
          <GridItem>
            <Box h={10}>
              <Button
                color={"white"}
                bg={"none"}
                onClick={() => {
                  navigateToRoute(routeConstants.ROUTE_HOME);
                }}
              >
                Home <GiBattleship color="whiteAlpha.900" />
              </Button>
            </Box>
          </GridItem>
          <GridItem>
            <Box h={10}>
              <Button
                color={"white"}
                bg={"none"}
                onClick={() => {
                  navigateToRoute(routeConstants.ROUTE_ABOUT);
                }}
              >
                About <GiPirateFlag color="whiteAlpha.900" />
              </Button>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Button
                color={"white"}
                bg={"none"}
                onClick={() => {
                  navigateToRoute(routeConstants.ROUTE_CONTACT);
                }}
              >
                Contact Us
                <GiSnail color="whiteAlpha.900" />
              </Button>
            </Box>
          </GridItem>
          <GridItem justifySelf={"end"}>
            <Box>
              <a href="https://one-piece.com/index.html">
                <Image
                  src={onepieceLogo}
                  alt="Mugiwara"
                  width={120}
                  height={10}
                />
              </a>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

export default Navbar;
