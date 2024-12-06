import {
  Box,
  Center,
  HStack,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoIosPaperPlane } from "react-icons/io";

function Contact() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    setCount(0);
  }, []);

  return (
    <>
      <Center py={10}>
        <Box>
          <VStack>
            <Box>
              <HStack>
                <Text textStyle="lg">
                  {count < 5
                    ? `You called us ${count} time(s)`
                    : `We are annoyed!!! Dont Call Us :(`}
                </Text>
              </HStack>
            </Box>
            <Box justifyItems={"center"} py={5}>
              <IconButton
                aria-label="Call us"
                variant="solid"
                size="2xl"
                onClick={() => increment()}
                rounded="full"
                colorPalette={"red"}
                shadow="lg"
                disabled={count < 5 ? false : true}
              >
                <IoIosPaperPlane />
              </IconButton>
              <Text textStyle="lg" py={3}>
                Click to call !!!
              </Text>
            </Box>
          </VStack>
        </Box>
      </Center>
    </>
  );
}

export default Contact;
